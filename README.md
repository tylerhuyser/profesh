# .Profesh

An app that helps job-seekers find jobs and organize their job hunt.

## Description:

.Profesh is an app that assists job seekers throughout their job hunt. The app provides a directory of job listings that users can refine through various search parameters, such as location, title, experience, and company. More importantly, the app provides a system of tools, that enable the user to track the individual journey with each opportunity. 

Using .Profesh, job-seekers will be able to take the most advantage of opportunitity and land their dream career.
 
## Wireframes

### Mobile

** Home

![Home] (/profesh/Mobile/Profesh_Wireframes_(Mobile).001.jpeg)

** Tracker Home

![Tracker Home] (/profesh/Mobile/Profesh_Wireframes_(Mobile).005.jpeg)

** Tracker Opportunity Details

![Opportunity Details] (/profesh/Mobile_Profesh_Wireframes_(Mobile).006.jpeg)

** Search

![Opportunity Details] (/profesh/Mobile_Profesh_Wireframes_(Mobile).002.jpeg)

## Component Heirarchy

* **Home Page:**

    * Job Search Bar -> Routes to "Search" Page
 
    * Job Timeline (a random list of jobs) 
 
        * Composed of Job components.
   
    * Nav Bar -> Routes to "Search", "Track", or "Profile" Pages
 
* **Search Page:**

    * Includes a form with "Key Word", "Location", and "experience" inputs.
 
    * Produces a list of jobs displaying high-level information. When a user selects a job....
 
    * A job component opens, which includes detailed information on the job.
  
* **Tracker**

    * Includes a list of "Saved" opportunities, displaying high-level information. When a user selects a job...
 
        * A job component opens, which includes detailed information on the job.

## API

I will be using two APIs to achieve my MVP. 

The first API (Indeed, ZipRecruiter, or The Muse) will be used to generate a list of jobs that match the user's search paramters (i.e. "Get" request). 

The other (AirTable) will be used to track opportunities that the user has "saved" to their profile. The user will also be able to "add" jobs not generated by the app's "search" function. Thus, users will be able to view (i.e. "Get"), save (i.e. "Post"), update (i.e. "Put"), and delete (i.e. "Delete") opportunities using the AirTable API.

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

## MVP

My MVP will focus on building the "tracker" feature. Components include:

* A search bar (to search saved opportunities)

* Opportunity cards (displaying high-level information on the tracked opportunity)

* Detailed Opportunity Cards (displaying detailed information on the opportunity)

* "Add" Button (allowing users to Post a new opportunity to AirTable API)

* "Add" Card (a form containing various fields concerning the new opportunity)

* Bottom Navigation Bar (allowing users to navigate to other pages in the app)

## Post-MVP

My Post-MVP will include:

* Home Page

* Job Search Page

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


