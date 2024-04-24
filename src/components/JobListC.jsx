import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {FaMapMarked} from 'react-icons/fa'


const JobListC = ({job}) => {
    const [showFullDescription,setShowFullDesceiption] =useState(false);

    let description =job.description;
    
    if(!showFullDescription){
        description=description.substring(0,90)+'...';
    }
    
  return (
    <div key={job.id} className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{job.type  }</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
              </div>

              <div className="mb-5">
               {description}
              </div>
              <button onClick={()=>setShowFullDesceiption((prevState)=>!prevState)} className="text-indigo-500 hover:text-indigo-600">{showFullDescription ? 'Less':'More'}</button>
              
              <h3 className="text-indigo-500 mb-2 mt-7">{job.salary} / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarked className='inline text-lg mb-1 mr-1' />
                 {job.location}
                </div>
                <Link
                  to={`/job/${job.id}`}
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
    </div>
  )
}

// Define PropTypes for the job object
JobListC.propTypes = {
    job: PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      salary: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
    }).isRequired,
}

export default JobListC;