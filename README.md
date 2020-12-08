# Profesh

**Profesh** is an app that helps job-seekers find jobs and organize their job hunt.

## Description:

Profesh is an app that assists job seekers throughout their job hunt. The app provides a directory of job listings that users can refine using various search parameters, including location, title, experience, and company. More importantly, the app provides a series of tools that enable the user to track their journey with each individual opportunity, from interview to offer. 

Using Profesh, job-seekers will be able to take the most advantage of opportunitity and land their dream career.

## API & Data Sample

To provide maximum value to the user, Profesh leverages the power of two APIs. 

A curated list of potential jobs provided by *The Muse*'s Jobs API and accessed using a GET request. When a user finds a job that they like, they may save the job as an *opportunity* and begin to track it using the Opportunity Tracker.

Opportunities are stored and accessed using *Airtable*. The Airtable API allows users to perform full CRUD functionality (create, read, update, and destroy) over the course of their job hunt.

### Sample JSON

#### The Muse's [Jobs API](https://www.themuse.com/developers/api/v2)

```
{
      "contents": "Facebook's mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we're building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them...",
      "name": "Quantitative UX Researcher, Facebook App",
      "type": "external",
      "publication_date": "2020-10-25T23:14:17.278685Z",
      "short_name": "quantitative-ux-researcher-facebook-app-28afaa",
      "model_type": "jobs",
      "id": 4136334,
      "locations": [
        {
          "name": "New York, NY"
        }
      ],
      "categories": [
        {
          "name": "Creative & Design"
        }
      ],
      "levels": [
        {
          "name": "Mid Level",
          "short_name": "mid"
        }
      ],
      "tags": [
        {
          "name": "Fortune 1000",
          "short_name": "fortune-1000-companies"
        }
      ],
      "refs": {
        "landing_page": "https://www.themuse.com/jobs/facebook/quantitative-ux-researcher-facebook-app-28afaa"
      },
      "company": {
        "id": 659,
        "short_name": "facebook",
        "name": "Facebook"
      }
    },

```

#### Airtable [API](https://airtable.com/)

<img src="https://i.imgur.com/VZp2auV.png" width="40%">

## Key Components & MVP

The following components are required for Profesh to achieve minimum viable product (MVP):

*  Home (acts as the app's landing page)

*  Navigation Bar (allows users to navigate around the app)

*  Opportunity Tracker (connects to Airtable API and offers full CRUD functionality)

  * Opportunity Search Bar (allows users to search saved opportunities)

  * Opportunity Results (displays a filtered list of saved opportunities using search parameters)

  * Opportunity Cards (expandable cards that display low- and high-detail views for each opportunity)

  * Add Opportunity Menu Toggle Button  (toggles visibility of the "Add Opportunity Menu" -- a form that allows users to save new opportunities)

  * Add Opportunity Menu (a form that contains allows users to "Post" a new opportunity to the Airtable API)

## Post-MVP

* Jobs List (connects to The Muse's API)

  * Jobs Search Bar (allows users to search saved jobs)

  * Jobs Results (displays a filtered list of saved jobs using search parameters)

  * Job Cards (expandable cards that display low- and high-detail views for each job)

  * Add Job Menu Toggle Button (toggles visibility of the "Save Job Menu" -- a form that allows users to save new jobs and add them to the Opportunities Tracker)

  * Add Job Menu (a form that contains allows users to "Post" to the Airtable API by converting a job to a new opportunity for the tracker)

## Wireframes

<img src="https://i.imgur.com/J6263Bi.png" width="60%">

## Component Hierarchy

<img src="https://i.imgur.com/Q792GzF.png" width="60%">

### Repo Structure

```
|_src
     |_app.js
     |_screens
                 |_Home.jsx
                 |_OpportunityTracker.jsx
                 |_FindJobs
     |_components
                 |_layout
                                     |_Footer.jsx
                                     |_Nav.jsx
                                     |_Sidebar.jsx                                        
                 |_Jobs
                                     |_AddJob
                                                 |_AddJobForm.jsx
                                                 |_AddJobButton.jsx
                                     |_JobResults
                                                 |_JobCard.jsx
                                                 |_JobResults.jsx
                                     |_SearchJobs
                                                 |_SearchJobs.jsx
                 |_TrackOpportunities
                                     |_AddOpportunity
                                                          |_AddOpportunityForm.jsx
                                                          |_AddOpportunityButton.jsx
                                     |_OpportunityResults
                                                          |_OpportunityCard.jsx
                                                          |_OpportunityResults.jsx
                                     |_SearchOpportunities
                                                          |_OpportunitiesSearchBar.jsx
                                     |_UpdateOpportunity
                                                          |_UpdateOpportunity.jsx
                                                          |_UpdateOpportunityButton.jsx

```

## Functionality & Sample Code

**Opportunity Tracker w/ Full CRUD Functionality**

The Opportunity Tracker offers users the ability to read, create, edit, and delete opportunities by connecting to the Airtable API.

```

// Below calls upon the API to obtain Jobs data on load.

  useEffect(() => {
    async function jobsAPICall() {
      const apiURL = `https://www.themuse.com/api/public/jobs?page=75`
      const response = await Axios.get(apiURL);
      setJobs(response.data.results)
    }
    jobsAPICall();
  }, [fetchJobs]);

```

**Search**

The Search Bar allows users to filter opportunity or job results using parameters, such as job title, company name, or keyword.

```

{opportunities.filter(opportunity => opportunity.fields.companyName.toLowerCase().includes(lowerCaseQuery) || opportunity.fields.jobTitle.toLowerCase().includes(lowerCaseQuery)).map((opportunity, idx) => {

        return (
          <div className="opportunity-card-container" key={opportunity.id}>
              <OpportunityCard 
                idx={idx}
                opportunity={opportunity}
                fetchOpportunities={fetchOpportunities}
                setFetchOpportunities={setFetchOpportunities}
                updateVisibility={updateVisibility}
                setUpdateVisibility={setUpdateVisibility}
                handleEdit={handleEdit}
                expanded={expanded}
                toggleExpand={toggleExpand}
              />

              <UpdateOpportunity
                fetchOpportunities={fetchOpportunities}
                setFetchOpportunities={setFetchOpportunities}
                opportunity={opportunity}
                handleEdit={ (e)=> handleEdit(e) }
                toggleUpdateMenu={toggleUpdateMenu}
                updateVisibility={updateVisibility}
              />
          </div>
          )
        })
      }

```

**Expandable Cards**

Each job or opportunity card is able to expand on click and toggle between low- and high- detail views.

```

//Below creates a state variable to store "expanded" opportunity cards

const [expanded, setExpanded] = useState([])

//Below function enables opportunity card expansion. If the id IS contained in the UseState array, it is removed (collapsed), if not, it is added (and expanded)

  function toggleExpand(id) {
    let opportunitiesContainer = document.getElementById(`${id}`);
    opportunitiesContainer.classList.toggle('expanded');
    console.log(expanded)
    if (!expanded.includes(id)) {
      setExpanded(prevExpand => {
        return [...prevExpand, id]
      });
      console.log(expanded)
    }; 
    if (expanded.includes(id)) {
      setExpanded(prevExpand => {
        console.log(prevExpand);
        return (prevExpand.filter(e => e !== id))
      })
        console.log(expanded)
    };
  }

```

**Add Job/Add Opportunitiy Form Modals**

Reach Hooks enable the the Add Opportunity/Job Modals to toggle on click. Leveraging UseState, I created a "switch" that changed the modal's class from either "visible" or "hidden".

A CSS animation is used in order to create the slider-like menu effect.

```

  // Below sets visibility of the form to "hidden". CSS for the "hidden" class is contained the corresponding component stylesheet "AddOpportunityForm.css"
  
  let visibilityClass = "hidden";

  // Below toggles visibility to "visible" if the visibility prop (from parent Track Opportunities) is true.
  
  if (props.visibility) {
    visibilityClass = "visible";
  }

  <div className={visibilityClass} id="addOpportunityFormContainer" >

  [...]

  </div>

```

**Desktop vs. Mobile Layout**

Profesh uses media queries in order to toggle between a two-column, desktop layout and a condensed mobile display.






