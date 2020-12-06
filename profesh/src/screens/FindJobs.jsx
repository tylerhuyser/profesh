import React, { useState } from 'react';
import SearchJobs from '../components/Jobs/SearchJobs/SearchJobs'

function FindJobs() {

  const [fetchJobs, setFetchJobs] = useState(false)


  return (
    <div className="findJobs">
      <SearchJobs fetchJobs={fetchJobs} setFetchJobs={setFetchJobs} />
    </div>
  )

}

export default FindJobs;