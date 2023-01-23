export default function filterJobs(jobs, mount, searchQuery, location) {

  if (mount && jobs.length > 0 && location === "/jobs" && jobs[0].company) {

    return jobs?.filter(job => job.company.name.toLowerCase().includes(searchQuery) || job.name.toLowerCase().includes(searchQuery) || job.locations[0].name.toLowerCase().includes(searchQuery))

  } else if (mount && jobs.length > 0 && location === "/tracker" && jobs[0].fields) {

    return jobs?.filter(job => job.fields.companyName.toLowerCase().includes(searchQuery) || job.fields.jobTitle.toLowerCase().includes(searchQuery))

  }
}