import axios from 'axios'
import authAPI from './auth-config'

const crypto = require('crypto');

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


export const authorize = async () => {
  try { 
    const authorization = await axios.get(`${authConfig.airtable_url}/oauth2/v1/authorize`)
    console.log(authorization)
  }
  catch (error) {
    console.log(error)
    throw error
  }
}