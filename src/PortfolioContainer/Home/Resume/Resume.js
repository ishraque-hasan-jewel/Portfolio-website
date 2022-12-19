import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from "@ramonak/react-progress-bar";

// import "react-tabs/style/react-tabs.css";

  import "./../Resume/Resume.css";


export default function Resume() {
  return (
    <Container>
      <div className='test1'>
      <h1 id="Resume">Resume</h1>
      <p>My formal Bio Details</p>
     
      </div >
      <div className='test2'>
      <hr />
      </div>
      
    <Row >
      
    <div className="car">
  
      <Tabs>
        <Col>
        <TabList>
          <Tab>
            <p>Education</p>
          </Tab>
          <Tab>
            <p>Work History</p>
          </Tab>
          <Tab>
            <p>Programminh Skill</p>
          </Tab>
          <Tab>
            <p>Project</p>
          </Tab>
          <Tab>
            <p>Interests</p>
          </Tab>
        </TabList>

        </Col>
      
        
      <Col>
        <TabPanel>
          <div className="panel-content">
          <ul>
                <li>Southeast University </li><button className='yers-btn'>2015-2019</button>
                <p>Bachelor of Science</p>
              </ul>
              <ul>
                <li>Advanced Residential Model College</li><button className='yers-btn'>2012-2014</button>
                <p>Higher Secondary Certificate. </p>
              </ul>
              <ul>
                <li>Purbo Amirabari High School</li><button className='yers-btn'>2010-2012</button>
                <p>Secondary School Certificate.

                </p>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <ul>
                <li>Business-Novelty. </li><button className='yers-btn'>Feb.2021 -Mar. 2022</button>
                 <h6>FRONTEND DEVELOPER </h6>
                  <p>• Worked with a team for analyzing, estimating, and developing new features for an existing web application
                     (in production) using the React framework.</p>
                  <p>• Completed one pilot project using the React framework.</p>
                  <p>• Completed two mobile application projects using the Android framework.</p>
                  <p>• Analyzed and estimated various client requirements. </p>
                  <p>• Worked on various prospect mobile application projects.</p>
                  

              </ul>
              <ul>
                <li>That-Quick Limited. </li><button className='yers-btn'>Jan. 2020 -Dec. 2020</button>
                <h6>FRONT END DEVELOPER </h6>
                <p> • Implemented some features of Android apps. </p>
                <p> • Worked on the web version of an app.</p>
              </ul>
            
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Col>
          <ul>
                <li>HTML </li>
                <div className='ProgressBar'>
                <ProgressBar completed={90} /> 
                </div>
              
              </ul>
              <ul>
                <li>CSS</li>
                <ProgressBar completed={90} /> 
                
              </ul>
              <ul>
                <li>JavaScript</li>
                <ProgressBar completed={80} /> 
            </ul>
           
            <ul>
                <li>React JS </li>
                <ProgressBar completed={80} /> 
                
              </ul>
              <ul>
                <li>Node JS</li>
                <ProgressBar completed={50} /> 
                
              </ul>
              <ul>
                <li>Mongo DB</li>
                <ProgressBar completed={60} /> 
              </ul>
              <ul>
                <li>React Native</li>
                <ProgressBar completed={50} /> 
              </ul>
              <ul>
                <li>Express JS</li>
                <ProgressBar completed={40} /> 
              </ul>
              <ul>
                <li>Core Java</li>
                <ProgressBar completed={70} /> 
              </ul>
              
            </Col>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <ul>
                <li>Country Apps  </li><button className='yers-btn'>JavaScript, Less Bootstrap</button>
                <h6>FRONT-END</h6>
                <p>I developed the Frontend of a survey web app using the React framework.
                   The front end will use the REST API provided to perform different actions.
                </p>
                <p>Live-link- https://timely-sprinkles-ed2f71.netlify.app</p>
              </ul>

              <ul>
                <li>Quiz-React-App </li><button className='yers-btn'>JavaScript[React]</button>
                <h6>FRONT-END</h6>
                <p>We analyzed the interactions among students, teachers, and the authority and found that it is important to have and 
                 common online platform to facilitate communication. So, we designed a soft-bd considering the possibilities, important 
                  features, and other stuff.  </p>
                <p>Live-link-https://polite-tarsier-fade93.netlify.app</p>
              </ul>

              <ul>
                <li>PERSONAL WEBSITE </li><button className='yers-btn'>JavaScript, Less Bootstrap</button>
                <h6>FRONT-END</h6>
                <p>I have developed this static website using HTML, CSS, and JavaScript libraries. 
                  I used the CSS preprocessor tool ’less’ and the automation tool ’gulp’. 
                </p>
                <p>Live-link- https://ishraque-hasan-jewel.github.io/</p>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <div>
              <ul>
                <li>Teaching</li>
                <p>Apart from being a teach enthusiast and a code writer, i also love to teach people what i know 
                  simply because in sharing.
                </p>
              </ul>
              <ul>
                <li>Music</li>
                <p>Listening to something music is something i can never compromise with, skimming through Spotify's 
                  pop songs charts is at times the best stress reliever that i can get my hands on. </p>
              </ul>
              <ul>
                <li>Competitive-Gaming</li>
                <p>I like to challenge my reflexes a lot while competing in football games, pushing the rank and having
                  interactive gaming session excites me the most.

                </p>
            </ul>
            </div>
          </div>
        </TabPanel>
        </Col>
      </Tabs>
    </div>
    </Row>
    </Container>
  );
  
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Resume />, rootElement);
