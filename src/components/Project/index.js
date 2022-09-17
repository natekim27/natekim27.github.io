// import './index.scss'
// import WorkCard from './WorkCard'
// import pro1 from "../../assets/images/zeus_logo.png"

// const Project = () => {
//     return (
//         <div className="project">
//             {/* <div className="text-zone"> */}
//             <h1>Check Out Some of the Cool Things I've Worked On!</h1>
//             {/* </div> */}
//             <div className="project_container">
//                 <div className="project_wrapper">
//                     <ul className="project_items">
//                         <WorkCard
//                             src={pro1}
//                             text="Zeus: an all-in-one SMS Chat Service for weather!"
//                             label="SMS Chat Bot"
//                             path="yuh"
//                         />
//                     </ul>
//                 </div>
//             </div>
            
            
//         </div>
//     )
// }

// export default Project

import React from 'react';
import './index.scss';
import WorkCard from './WorkCard';
import pro1 from "../../assets/images/tower_defense_logo.png"
import pro2 from "../../assets/images/zeus_logo.png"

function Project() {
  return (
    <div className='project'>
      <h1>Check Out Some of the Cool Things I've Worked On!</h1>
      <div className='project_container'>
        <div className='project_wrapper'>
          <ul className='project_items'>
            <WorkCard
              src={pro1}
              text='A GT Yellow Jackets vs Georgia Bulldogs Tower Defense game!'
              label='Buzz Tower Defense'
              path='/services'
            />
            <WorkCard
              src={pro2}
              text='An all-in-one SMS chat bot that delivers daily reports as well as gives live weather updates!'
              label='Zeus'
              path='/services'
            />
          </ul>
          <ul className='project_items'>
            <WorkCard
              src={pro1}
              text='A web app that scrapes shopping sites and automatically purchases items when released!'
              label='AWS Web Scrape Transaction Bot'
              path='/services'
            />
            <WorkCard
              src={pro1}
              text="This very website you're using right now to get to know me!"
              label='React Personal Website'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;