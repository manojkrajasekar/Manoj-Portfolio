import React from 'react';
import Experience from '../components/Experience/index.jsx';
import { Spring } from 'react-spring/renderprops';
import Statistics from '../components/Statistics/index.jsx';
import PersonalProjects from '../components/PersonalProjects/index.jsx';
// import Manoj from 'src/Images';
import styles from './styles.css';

const App = () => {

    const number =  100;

    const StatisticsData = [{
        'minRange': 0,
        'maxRange': 4,
        'description': 'years of coding' 
    },
    {
        'minRange': 0,
        'maxRange': 34,
        'description': 'github repositories'
    },
    {
        'minRange': 0,
        'maxRange': 17000,
        'description': 'lines of code',
    },
    // {
    //     'minRange': 'n-1',
    //     'maxRange': 'n',
    //     'description': 'cups of coffee'
    // }
    ];

    const experienceData = [{
        'name': 'Educational Funding Company',
        'title': 'Front End Engineer',
        'summary': 'TAP - Total Accountability Partner Design and Develop the Front End Architecture and System using React JS, Redux',
    },
    {
        'name': 'TATA Consultancy Services',
        'title': 'Web Engineer',
        'summary': 'Designed and Developed a Single Page Web  application   tool  using JavaScript, which lets the user to configure the  rules  for  the    insurance policies. Front-end   was developed  using  Bootstrap, HTML5 and CSS3, and MYSQL   as the Database management  system. ',
    }
    ];
    return <div>
        <div className="portfolio__container">
            <span className="profileCard">
            <div>
                <img className="profile__image" src={'src/assets/manoj.jpg'}/>
            </div>
            <div className="Profile__data">
                Manoj kumar Rajasekar
                <i className="fas fa-camera"/>
                   
                <div className="profile__description">
                    Web Engineer, who loves to build web applications and Front End components
                </div>
            </div>
            
            </span>
            <div className="Experience__container">
                {experienceData.map((element) => {
                    return <Experience dataProps={element} />
                })}
            </div>
            {StatisticsData.map((element) => {
                return <Statistics dataProps={element} />
            })}
            <PersonalProjects />
        </div>
    </div>
}

export default App;

