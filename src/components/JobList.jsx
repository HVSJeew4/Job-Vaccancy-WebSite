import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import JobListC from './JobListC';
import Spinner from './Spinner';

const JobList = ({ isHome = false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ?'/api/jobs?_limit=5' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., display an error message to the user
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  },);
  

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListC key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
JobList.propTypes = {
  isHome: PropTypes.bool
};

export default JobList;