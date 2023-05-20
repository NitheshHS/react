import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import data from './data'

function App() {
  
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  
  useEffect(()=>{
    setJobs(data)
    setLoading(false)
  },[])
  if(loading){
    return (<section className="section loading">
      <h1>Loading</h1>
    </section>)
  }
  const {company, dates, duties, title}=jobs[value]
  return (
    <section className='section'>
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="button-container">
        {jobs.map((job,index)=>(
          <button onClick={()=>setValue(index)}>{job.company}</button>
        ))}
      </div>
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty,index)=>{
          return (<div className="job-desc" key={index}>
              <p>{duty}</p>
          </div>)
        })}
      </article>

    </section>
  );
}

export default App;
