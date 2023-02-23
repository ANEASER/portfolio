import React from 'react';
import 'bulma/css/bulma.css'; // Import the Bulma CSS file
import '../App.css';

import { faPython, faMicrosoft, faDatabase, faSnowflake, faReact } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TechStack() {
return (
<div>
    <div id="techstack" className="my-3" style={{textAlign: 'center', fontSize: '220%', color: 'rgb(31, 72, 255)'}}>TECH STACK</div>
        <div className="main_container mt-3" style={{margin: '1em'}}>
            <div className="sub_containers" id="data">
                <p className="teckstackhead">DATA SCIENCE</p>
                    <ul className="list">
                        <li style={{fontSize: '1.2em'}}> <FontAwesomeIcon icon={faPython} /> Python</li>
                        <li style={{fontSize: '1.2em'}}><FontAwesomeIcon icon={faPython} />Pandas</li>
                        <li style={{fontSize: '1.2em'}}><FontAwesomeIcon icon={faPython} />Scikit Learn</li>
                        <li style={{fontSize: '1.2em'}}><FontAwesomeIcon icon={faPython} />Tensorflow</li>
                        <li style={{fontSize: '1.2em'}}><FontAwesomeIcon icon={faPython} />PySpark</li>
                        <li style={{fontSize: '1.2em'}}><FontAwesomeIcon icon={faMicrosoft} />Power BI</li>
                        <li style={{fontSize: '1.2em'}}>SQL</li>
                        <li style={{fontSize: '1.2em'}}>Snowflake</li>
                    </ul>
                </div>
            <div className="sub_containers" id="web">
                <p className="teckstackhead">WEB APPS</p>
                    <ul className="list">
                        <li style={{fontSize: '1.5em'}}>FARM stack</li>
                    <ul className="listinlist">
                    <p>
                        <li><FontAwesomeIcon icon={faPython} />Fast API</li>
                        <li><FontAwesomeIcon icon={faReact} />React</li>
                        <li>Mongodb</li>
                </p>
            </ul>
            <li style={{fontSize: '1.5em'}}>FLASK</li>
            </ul>
            </div>
    </div>
</div>
);
}

export default TechStack;