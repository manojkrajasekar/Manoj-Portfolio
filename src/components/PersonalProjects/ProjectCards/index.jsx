import React from 'react';
import styles from './styles.css';





const ProjectCards = (data) => {
    // console.log('PROJECT CARDS DATA:', data.data.title);
    return (
        <div className="ProjectCard__Container">
            <div className="ProjectCard__title">
                Pixels
            </div>
            <div className="ProjectCard__links">
                GitHub Links
            </div>
            <div className="ProjectCard__decription">
                PhotoSharing Application to share photos
            </div>
        </div>
    )
}

export default ProjectCards;