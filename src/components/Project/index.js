import React from 'react';
import './index.scss';
import WorkCard from './WorkCard';
import pro1 from "../../assets/images/tower_defense_logo.png"
import pro2 from "../../assets/images/zeus_logo.png"
import pro3 from "../../assets/images/selenium_logo.png"
import pro4 from "../../assets/images/react_logo.jpeg"

function Project() {
  return (
    <div style={{overflowY:'scroll'}} className='project'>
      <h1>Projects</h1>
      <div className='project_container'>
        <div className='project_wrapper'>
          <ul className='project_items'>
            <WorkCard
              path='https://github.com/natekim27/Buzz-Tower-Defense'
              src={pro1}
              text='GT Yellow Jackets vs Georgia Bulldogs Tower Defense game'
              label='Buzz Tower Defense'
            />
            <WorkCard
              src={pro2}
              text='All-in-one SMS chat bot that delivers daily reports as well as gives live weather alerts'
              label='Zeus'
              path='https://github.com/natekim27/zeus'
            />
          </ul>
          <ul className='project_items'>
            <WorkCard
              src={pro3}
              text='Web app that scrapes shopping sites and automatically purchases items when released'
              label='AWS Web Scrape Transaction Bot'
              path='https://github.com/natekim27/webscrape-bot/tree/main'
            />
            <WorkCard
              src={pro4}
              text="Dynamic website developed for a personal portfolio"
              label='React Personal Website'
              path='https://github.com/natekim27/react-deploy'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;