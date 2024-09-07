const crypto = require('crypto');
const { URL } = require('url');
const axios = require('axios');
const qs = require('qs');

const authConfig = {
  redirect_uri: "https://dazzling-bartik-4a9043.netlify.app/",
  client_id: `${process.env.REACT_APP_AIRTABLE_CLIENT_ID}`,
  clientSecret: "",
  airtable_url: `https://www.airtable.com`,
  scope: 'data.records:read data.records:write',
  state: state,
  code_challenge: codeChallenge,
  code_challenge_method: codeChallengeMethod,
}

const encodedCredentials = Buffer.from(`${authConfig.client_id}`).toString('base64');
const authorizationHeader = `Basic ${encodedCredentials}`;

// book keeping to make using this easier, not needed in a real implementation
setLatestTokenRequestState('NONE');

const state = crypto.randomBytes(100).toString('base64url');
const codeVerifier = crypto.randomBytes(96).toString('base64url'); // 128 characters
const codeChallengeMethod = 'S256';
const codeChallenge = crypto
  .createHash('sha256')
  .update(codeVerifier) // hash the code verifier with the sha256 algorithm
  .digest('base64') // base64 encode, needs to be transformed to base64url
  .replace(/=/g, '') // remove =
  .replace(/\+/g, '-') // replace + with -
  .replace(/\//g, '_'); // replace / with _ now base64url encoded
      
const authorizationCache = {}
authorizationCache[state] = {
  // we'll use this in the redirect url route
  codeVerifier,
  // any other data you want to store, like the user's ID
};

export const authorize = async () => {
  try { 
    const code = req.query.code;
    const codeVerifier = cached.codeVerifier;

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    const authorization = await axios.get(`${authConfig.airtable_url}/oauth2/v1/authorize`, headers)
    console.log(authorization)
  }
  catch (error) {
    console.log(error)
    throw error
  }
}

// route that user is redirected to after successful or failed authorization
// Note that one exemption is that if your client_id is invalid or the provided
// redirect_uri does exactly match what Airtable has stored, the user will not
// be redirected to this route, even with an error.
app.get('/airtable-oauth', (req, res) => {
    const state = req.query.state;
    const cached = authorizationCache[state];
    // validate request, you can include other custom checks here as well
    if (cached === undefined) {
        res.send('This request was not from Airtable!');
        return;
    }
    // clear the cache
    delete authorizationCache[state];

    // Check if the redirect includes an error code.
    // Note that if your client_id and redirect_uri do not match the user will never be re-directed
    // Note also that if you did not include "state" in the request, then this redirect would also not include "state"
    if (req.query.error) {
        const error = req.query.error;
        const errorDescription = req.query.error_description;
        res.send(`
            There was an error authorizing this request.
            <br/>Error: "${error}"
            <br/>Error Description: "${errorDescription}"
        `);
        return;
    }

    // since the authorization didn't error, we know there's a grant code in the query
    // we also retrieve the stashed code_verifier for this request
    const code = req.query.code;
    const codeVerifier = cached.codeVerifier;

    const headers = {
        // Content-Type is always required
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    if (clientSecret !== '') {
        // Authorization is required if your integration has a client secret
        // omit it otherwise
        headers.Authorization = authorizationHeader;
    }

    // more book-keeping, you don't need this
    setLatestTokenRequestState('LOADING');
    // make the POST request
    axios({
        method: 'POST',
        url: `${airtableUrl}/oauth2/v1/token`,
        headers,
        // stringify the request body like a URL query string
        data: qs.stringify({
            // client_id is optional if authorization header provided
            // required otherwise.
            client_id: clientId,
            code_verifier: codeVerifier,
            redirect_uri: redirectUri,
            code,
            grant_type: 'authorization_code',
        }),
    })
        .then((response) => {
            // book-keeping so we can show you the response
            setLatestTokenRequestState('AUTHORIZATION_SUCCESS', response.data);
            // redirect to the form where we show you the response
            // you don't need this in your own implementation
            res.redirect('/');
        })
        .catch((e) => {
            // 400 and 401 errors mean some problem in our configuration, the user waited too
            // long to authorize, or there were multiple requests using this auth code.
            // We expect these but not other error codes during normal operations
            if (e.response && [400, 401].includes(e.response.status)) {
                setLatestTokenRequestState('AUTHORIZATION_ERROR', e.response.data);
            } else if (e.response) {
                console.log('uh oh, something went wrong', e.response.data);
                setLatestTokenRequestState('UNKNOWN_AUTHORIZATION_ERROR');
            } else {
                console.log('uh oh, something went wrong', e);
                setLatestTokenRequestState('UNKNOWN_AUTHORIZATION_ERROR');
            }
            res.redirect('/');
        });
});

// this route exists only for your convenience in testing Airtable OAuth
app.get('/refresh_token_form', (req, res) => {
    const latestRequestStateDisplayData = formatLatestTokenRequestStateForDeveloper();

    // double clicking submit may cause a token revocation
    res.send(`<div>
        ${latestRequestStateDisplayData}
        <p>To Refresh a token, enter it into the input and press "submit"</p>
        <form action="/refresh_token" method="post" >
            <label for="refresh">Refresh token:
            <input type="text" id="refresh" name="refresh_token" autocomplete="off" minLength="64"/>
            <input type="submit">
        </form>
        <a href="/">Back to home</a>
    </div>`);
});

// this route demonstrates how to make refresh a token, though normally
// this should not occur inside a route handler (we do so here to make this
// tool easier to use).
app.post('/refresh_token', (req, res) => {
    let refreshToken = req.body ? req.body.refresh_token : undefined;
    if (!refreshToken) {
        console.log(req.body);
        res.send('no refresh token in data');
        return;
    }

    if (typeof refreshToken !== 'string') {
        console.log(req.body);
        res.send('refresh token was not a string');
        return;
    }

    refreshToken = refreshToken.trim();

    const headers = {
        // Content-Type is always required
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    if (clientSecret !== '') {
        // Authorization is required if your integration has a client secret
        // omit it otherwise
        headers.Authorization = authorizationHeader;
    }
    axios({
        method: 'POST',
        url: `${airtableUrl}/oauth2/v1/token`,
        headers,
        // stringify the request body like a URL query string
        data: qs.stringify({
            // client_id is optional if authorization header provided
            // required otherwise.
            client_id: clientId,
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        }),
    })
        .then((response) => {
            console.log(response);
            setLatestTokenRequestState('REFRESH_SUCCESS', response.data);
            res.redirect('/');
        })
        .catch((e) => {
            // 400 and 401 errors mean some problem in our configuration, the refresh token has
            // already been used, or the refresh token has expired.
            // We expect these but not other error codes during normal operations
            if (e.response && [400, 401].includes(e.response.status)) {
                setLatestTokenRequestState('REFRESH_ERROR', e.response.data);
            } else if (e.response) {
                console.log('uh oh, something went wrong', e.response.data);
                setLatestTokenRequestState('UNKNOWN_REFRESH_ERROR');
            } else {
                console.log('uh oh, something went wrong', e);
                setLatestTokenRequestState('UNKNOWN_REFRESH_ERROR');
            }
            res.redirect('/');
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

function setLatestTokenRequestState(state, dataToFormatIfExists) {
    latestTokenRequestState = {
        state,
    };

    if (dataToFormatIfExists) {
        const json = JSON.stringify(dataToFormatIfExists, null, 2);
        // access and refresh tokens are difficult to copy paste in normal JSON formatting,
        // to make it easier we put them on a newline without the quotes
        const formattedData = json
            .split('\n')
            .map((line) =>
                line.replace(/^(\s+"(access_token|refresh_token)":)\s+"(.*)",$/g, '$1\n$3'),
            )
            .join('\n');
        latestTokenRequestState.formattedData = formattedData;
        console.log(state, latestTokenRequestState);
    }
}

function formatLatestTokenRequestStateForDeveloper() {
    let formatRequestState = '';

    switch (latestTokenRequestState.state) {
        case 'NONE':
            break;
        case 'LOADING':
            formatRequestState =
                'The request for the access token from your latest authorization is still outstanding, check the terminal or refresh';
            break;
        case 'AUTHORIZATION_ERROR':
            formatRequestState = 'Your latest authorization request failed, the error was:';
            break;
        case 'UNKNOWN_AUTHORIZATION_ERROR':
            formatRequestState =
                'The request for the access token from your latest authorization failed, check the terminal for details';
            break;
        case 'REFRESH_ERROR':
            formatRequestState = 'Your latest refresh request failed, the error was:';
            break;
        case 'UNKNOWN_REFRESH_ERROR':
            formatRequestState =
                'Your latest request to refresh your access token failed, see the terminal for details';
            break;
        case 'AUTHORIZATION_SUCCESS':
            formatRequestState = 'Your authorization succeeded, the response was:';
            break;
        case 'REFRESH_SUCCESS':
            formatRequestState = 'Your refresh request succeeded, the response was:';
            break;
        default:
            throw Error(
                `unexpected latestTokenRequestState loading state: ${latestTokenRequestState.state}`,
            );
    }

    if (latestTokenRequestState.formattedData) {
        formatRequestState += `<br/>
    <code>
        <pre>${latestTokenRequestState.formattedData}</pre>
    </code>`;
    }

    if (formatRequestState) {
        formatRequestState = `<p>${formatRequestState}</p>`;
    }

    return formatRequestState;
}