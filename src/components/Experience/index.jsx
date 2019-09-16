import React from 'react';
import styles from './styles.css';

const Experience = (dataProps) => {
    console.log('DATA PROPS:', dataProps);
    return (
        <div className="Experience">
            <div className="Experience__title">
               {dataProps.dataProps.title}
            </div>
            <div className="Experience__company">
                {dataProps.dataProps.name}            
            </div>
            <div className="Experience__descripion">
                {dataProps.dataProps.summary}
            </div>
        </div>
    )
}

export default Experience;