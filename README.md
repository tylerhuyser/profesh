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

### Mobile

**Home**

![Home](https://github.com/tylerhuyser/profesh/blob/master/Images/Wireframe_Images/Mobile/Profesh_Wireframes_(Mobile).001.jpeg?raw=true)

**Tracker Home**

![Tracker Home](https://github.com/tylerhuyser/profesh/blob/master/Images/Wireframe_Images/Mobile/Profesh_Wireframes_(Mobile).005.jpeg?raw=true)

**Tracker Opportunity Details**

![Opportunity Details](https://github.com/tylerhuyser/profesh/blob/master/Images/Wireframe_Images/Mobile/Profesh_Wireframes_(Mobile).006.jpeg?raw=true)

**Search**

![Search](https://github.com/tylerhuyser/profesh/blob/master/Images/Wireframe_Images/Mobile/Profesh_Wireframes_(Mobile).002.jpeg?raw=true)

## Component Hierarchy

![Component Hierarchy](https://github.com/tylerhuyser/profesh/blob/master/Images/README_Images/Profesh%20-%20Component%20Hierarchy.002.jpeg?raw=true)

## Repo Structure

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

**MVP**:

* **Tracker**

    * Includes a list of "Saved" opportunities, displaying high-level information. When a user selects a job...
 
        * A job component opens, which includes detailed information on the job.

**Post MPV**

* **Home Page:**

    * Job Search Bar -> Routes to "Search" Page
 
    * Job Timeline (a random list of jobs) 
 
        * Composed of Job components.
   
    * Nav Bar -> Routes to "Search", "Track", or "Profile" Pages
 
* **Search Page:**

    * Includes a form with "Key Word", "Location", and "experience" inputs.
 
    * Produces a list of jobs displaying high-level information. When a user selects a job....
 
    * A job component opens, which includes detailed information on the job.

## API

I will be using two APIs to achieve my MVP.

**MVP**

For MVP, AirTable will be used to track opportunities that the user has "saved" to their profile. The user will also be able to "add" jobs not generated by the app's "search" function. Thus, users will be able to view (i.e. "Get"), save (i.e. "Post"), update (i.e. "Put"), and delete (i.e. "Delete") opportunities using the AirTable API.

**POST-MVP**

For Post-MVP either Indeed, ZipRecruiter, or The Muse will be used to generate a list of jobs that match the user's search paramters (i.e. "Get" request). 

Details on the job listings arrays below:

1. Indeed: 
 
    * Documentation: https://www.indeed.com/publisher
  
    * API Link: TBD
  
    * Request Limitations: TBD
  
2. The Muse: 

    * Documentation: https://www.themuse.com/developers/api/v2
  
    * API Link: https://www.themuse.com/api/public/jobs  
  
    * Request Limitations: You can register your app and use the provided API key by passing it in as the query parameter api_key. This will allow you to make up to 3600 requests per hour. If you don't register your app and provide an api_key query parameter, you're limited to 500 requests per hour.


3. ZipRecruiter:

    * Documentation: https://www.ziprecruiter.com/partner
  
    * API Link: TBD
  
    * Request Limitations: TBD

## SWOT Analysis

* *Strengths*:

    * Ability to work independently
 
    * Understanding of CRUD
 
    * Understanding of FlexBox

* *Weaknesses*:

    * Difficult to reign in scope
 
    * Prioritization of MVP

* *Opportunities*:

    * To create an app that can provide realistic value

* *Threats*:

    * Large Scope


