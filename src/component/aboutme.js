import React from 'react';
import 'bulma/css/bulma.css'; // Import the Bulma CSS file
import '../App.css';
import me from '../uploads/me.png';
import wm from '../uploads/wm.png';

function AboutMe() {
  return (
    <div>
      <div className="main_container mt-5" style={{ margin: '1em 1em 0 1em', padding: '3% 0 10% 0' }}>
        <div className="sub_containers" id="text">
          <p style={{ paddingTop: '15%', fontSize: '170%' }}>
            Hi There!
          </p>
          <p style={{ fontSize: '420%' }}>
            I'm Anuda
          </p>
          <p style={{ fontSize: '170%' }}>
            Data Scientist & Full Stack developer
          </p>
        </div>
        <div className="sub_containers" id="image" style={{ backgroundImage: `url(${me})`, backgroundRepeat: 'no-repeat', backgroundPositionX: 'center', height: '300px', marginTop: '8%' }}>
        </div>
      </div>

      <div id="aboutme" className="my-3" style={{ color: 'rgb(31, 72, 255)', textAlign: 'center', fontSize: '220%' }}>ABOUT ME</div>
      <div className="main_container" style={{ margin: '1em 1em 1em 1em' }}>
        <div className="sub_containers" id="text">
          <p className="pr-6" style={{ textAlign: 'center', fontSize: '150%', marginBottom: '2%', marginTop: '1%' }}>
                  Hi ! I am a full stack developer and data scientist with a passion for leveraging technology to solve business problems. My expertise in programming languages such as Python, JavaScript, and SQL, and my experience with web development frameworks such as React and Flask, enable me to build and deploy robust web applications. I also have a strong background in data science, with experience in using tools such as Pandas, Numpy, and Scikit-learn to manipulate and analyze large datasets, and machine learning libraries such as TensorFlow, Keras, and Scikit-learn to build predictive models. I am a strategic thinker with strong problem-solving skills and an ability to communicate technical concepts to non-technical audiences. I am constantly seeking new challenges and opportunities to further develop my skills in the field of data science and full-stack development
              </p>
            </div>
            <div className="sub_containers" id="image-1" style={{backgroundImage: `url(${wm})` ,backgroundRepeat: 'no-repeat'}} alt="My Image">
                
            </div>
        </div>
    </div>
  );
}

export default AboutMe;