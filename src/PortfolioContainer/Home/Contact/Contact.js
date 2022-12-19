import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import "./../Contact/Contact.css";
import { FaFacebookF, FaGooglePlusG, FaInstagramSquare, FaTwitter,FaEnvelope,FaTelegramPlane } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';

function Contact() {
  return (
    
      
      
       
     
      <Container>
      <div className='test1'>
      <h1 id="Contact">Contact Me</h1>
      <p>Lets keep in Touch</p>
     
      </div >
      <div className='test2'>
      <hr />
      </div>
      
       
     
      <Row className='jewel'>
        {/* <Col> <img src={require ("../../../assets/Home/jewel2.PNG")} alt="not a internet connection" /></Col> */}
        <Col>
        <h1 className='gmail'>Get In Touch <FaEnvelope /></h1>
                   <div className="colz">
                      <div className="colz-icon">
                        <a className='colz-a'  href="https://facebook.com/ProfileName"><FaFacebookF /></a>
                        <a className='colz-a' href="https://www.youtube.com/"><FaGooglePlusG /></a>
                        <a className='colz-a' href="https://www.youtube.com/"><FaYoutubeSquare /></a>
                        <a className='colz-a' href="https://www.youtube.com/"><FaInstagramSquare /></a>
                        <a className='colz-a' href="https://www.youtube.com/"><FaTwitter /></a>

                       </div>
                    </div>
        <p className='text'>Phone:+880 01905051688</p> <br />
        <p className='text'>Email: israkjewel68@gmail.com</p> <br />
        <p className='text'>Facebook: IshraqueHasanJewel</p>
        </Col>
        <Col>
        <div className='jewel-contact'>
        {/* <img src={require ("../../../assets/Home/jewel2.PNG")} alt="not a internet connection" /> */}
        <div className='input-label'>
        <label for="name">Enter your Name : </label><br></br>
         <input type="name" id="name" name="name"/>
         </div>
         <div className='input-label'>
        <label for="email">Enter your email : </label><br></br>
         <input type="email" id="email" name="email"/>
         </div>
         <div className='input-label'>
         <label for="name">Enter your Message: </label>
         <textarea rows="4" cols="50" name="comment" form="usrform">
            Enter text here...
         </textarea>
         </div>
         <div>
         <button className="highlighted-btn">Send <FaTelegramPlane /></button>
         </div>

        </div>
          </Col>
      </Row>
     
    </Container>

  );
}

export default Contact;