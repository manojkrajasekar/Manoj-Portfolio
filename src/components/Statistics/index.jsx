import React from 'react';
import styles from './styles.css';
import { Spring } from 'react-spring/renderprops';


const statsCardStyleContainer = {
    display: "flex",
    flexDirection: "row",};

const statsCardStyles = {
    flexDirection: "flex-start",
    fontSize: "25px",
    // border: "1px solid black",
    borderRadius: '20px',
};

const statsCardNumber = {
    margin: "10px"
};

const statsCardTitle = {
    margin: "10px"
};

const Statistics = (dataProps) => {
    const statsProps = dataProps.dataProps;
    console.log('STAT PROPS:', statsProps);
    return (
        <div style={{ ...statsCardStyleContainer }}>
            <div>
                <Spring
                    className=""
                    from={{ 
                        opacity: 0,
                        number: statsProps.minRange,
                        description: ' ',
                    }}
                    to={{ 
                        opacity: 1,
                        number: statsProps.maxRange,
                        description: statsProps.description
                    }}
                >   
                
                    {statsProps => 
                        <div style={{ ...statsCardStyles }}>
                            <span style={{ ...statsCardNumber }}>{statsProps.number}</span>
                            <span style={{ ...statsCardTitle }}>{statsProps.description}</span>
                        </div>
                    }
                
                </Spring>
            </div>
        </div>
    );
}

export default Statistics;