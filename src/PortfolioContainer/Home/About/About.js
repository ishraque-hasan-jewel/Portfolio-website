import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import "../About/About.css";

function About() {
  return (
    <Container>
      <div className='test1'>
      <h1 id="About">About Me</h1>
      <p>Why Choose Me ?</p>
     
      </div >
      <div className='test2'>
      <hr />
      </div>
      
       
     
      <Row className='jewel'>
        <Col> <img src={require ("../../../assets/Home/jewel2.PNG")} alt="not a internet connection" /></Col>
        <Col><p>I want to be a good developer and acquire all kind of experience on react,
          After doing the work on react. I want to start backend, on this way I want to be a full stack developer.
          After gaining the experience of 3 years on react. Any kind of project or Apps of clients. I want to design the Frontend. <br />
          Most of the time of my job life, I want to keep myself with developer.Now my hobby is to develops website 
          like the hobby of my childhod was playing and.......... <br/>
          Now, I can't find any guideline for that reason, I want to join in a company. So I can find the guideline from company. As a result,
          I can use my ........ and talent and I will find a best environment for learning.</p>
          <div>
            <h2>Here are a Few Highlights:</h2>

              <ul>
                <li>Full Stack web and mobile development</li>
                <li>Interactive Front End as per the design</li>
                <li> React and React Native</li>
                <li>Redux for State Management</li>
                <li>Building REST API </li>
                <li>Managing database</li>
              </ul>
              {/* <button>jewel</button> */}
              <div className="profile-options">
                    <button className="primary-btn">
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="Jewel[Original].pdf" download="Jewel[Original].pdf">
                        <button className="highlighted-btn">Get Resume</button>
                    </a>
                    
                </div>

          </div>
          </Col>
      </Row>
     
    </Container>
  );
}

export default About;