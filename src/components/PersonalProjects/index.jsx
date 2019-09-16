import React from 'react';
import { Spring } from 'react-spring/renderProps';
import VisibilitySensor from 'react-visibility-sensor';
import ProjectCards from './ProjectCards/index.jsx';

const h2Styles = {
    fontSize: "82px"
};

const personalProjectsData = [{
    'title': 'Pixels',
    'links': 'Gtihub',
    'descritpion': 'Photo Sharing Application, to share the photos and like a competition'
},{
    'title': 'Pixels',
    'links': 'Gtihub',
    'descritpion': 'Photo Sharing Application, to share the photos and like a competition'
},{
    'title': 'Pixels',
    'links': 'Gtihub',
    'descritpion': 'Photo Sharing Application, to share the photos and like a competition'
}];

const PersonalProjects =  () => {
    return (
        <div>
            <VisibilitySensor>
                {({ isVisible }) => (
                    <React.Fragment>
                        <Spring delay={50} to={{ opacity: isVisible ? 1 : 0}}>
                            {({ opacity }) => <div style={{ ...h2Styles, opacity }}>
                                <ProjectCards />
                                
                            </div> }
                        </Spring>
                        <Spring delay={150} to={{ opacity: isVisible ? 1 : 0}}>
                            {({ opacity }) => <div style={{ ...h2Styles, opacity }}>
                                <ProjectCards />
                            </div> }
                        </Spring>
                        <Spring delay={250} to={{ opacity: isVisible ? 1 : 0}}>
                            {({ opacity }) => <div style={{ ...h2Styles, opacity }}>
                                <ProjectCards />
                            </div> }
                        </Spring>
                    </React.Fragment>
                )}
            </VisibilitySensor>

        </div>
    )
}

export default PersonalProjects;