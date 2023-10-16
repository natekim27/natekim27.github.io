import React from 'react';
import './index.scss';
import WorkCard from './WorkCard';
import pro1 from "../../assets/images/tower_defense_logo.png"
import pro2 from "../../assets/images/sherlock_ai_logo.png"
import pro3 from "../../assets/images/selenium_logo.png"
import pro4 from "../../assets/images/weeat_logo.png"

function Project() {
  return (
    <div style={{overflowY:'scroll'}} className='project'>
      <h1>Projects</h1>
      <div className='project_container'>
        <div className='project_wrapper'>
          <ul className='project_items'>
            <WorkCard
              src={pro2}
              text='Ask questions about your codebase to an intelligent chatbot'
              label='Sherlock AI'
              path='https://github.com/natekim27/Sherlock-AI'
            />
            <WorkCard
              src={pro3}
              text='Automate your purchases on shoppings sites'
              label='AWS Web Scrape Transaction Bot'
              path='https://github.com/natekim27/webscrape-bot/tree/main'
            />
          </ul>
          <ul className='project_items'>
            <WorkCard
              src={pro4}
              text="Find nearby restaurants that match you and your friends' food preferences"
              label='WeEat'
              path='https://github.com/natekim27/weEat'
            />
            <WorkCard
              path='https://github.com/natekim27/Buzz-Tower-Defense'
              src={pro1}
              text='GT Yellow Jackets vs Georgia Bulldogs Tower Defense game'
              label='Buzz Tower Defense'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;