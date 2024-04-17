import React from 'react'

function Timeline({timelineData}) {
  return (
    <div className='bg-black'>
      <h2 className='text-2xl bg-black p-3 underline text-white text-center font-bold '>Timeline</h2>
    <div className="timeline-container">
        {timelineData.map((item) => (
          <div className="timeline-item bg-gray-100 rounded-lg shadow-md p-6 m-6" key={item._id}>
            <div className="timeline-item-content">
              <span className="tag bg-gray-400 text-gray-800 rounded-lg py-1 px-2 text-xs">{item.startDate} - {item.endDate}</span>
              <h3 className="text-lg font-semibold mt-2">{item.company_name}</h3>
              <p className="text-sm text-gray-600">{item.summary}</p>
              <p className="text-sm text-gray-700">{item.jobTitle} | {item.jobLocation}</p>
              <ul className="mt-2">
                {item.bulletPoints.map((point, index) => (
                  <li className="text-sm text-gray-700" key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Timeline