import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i class="fa fa-linkedin" aria-hidden="true"><a className="meawwlinka" href="https://www.linkedin.com/in/shashi-shekhar-singh-86a814105"></a></i>
          <i class="fa fa-github" aria-hidden="true"><a className="meawwlinka" href=""></a></i>
           <i class="fa fa-angellist" aria-hidden="true"><a className="meawwlinka" href=""></a></i>
          <i class="fa fa-facebook" aria-hidden="true"><a className="meawwlinka" href=""></a></i>
          <Button  className="buttona" color="#52433a" size="lg"><i class="fa fa-download" aria-hidden="true"></i>DOWNLOAD MY RESUME</Button>{' '}
           <Button  className="button" color="#52433a" size="lg"><i class="fa fa-telegram" aria-hidden="true"></i>HIRE ME</Button>{' '}
          </header>
      
       <div className="bodypart">
         <div className="profile">
        <img className="image" alt="" src="IMG_20171125_120114.jpg"/>
        <h1> Shashi Singh </h1>
        <h2> Full Stack Developer </h2>
        </div>
           <p className="pes">With 1yr+ hands-on experience developing, releasing, and maintaining large-scale online web-based applications, 
             I have learned to own what I build as I create, test and refine the front end as well as web-services on the server side, 
             following the motto of Discover, design, develop, deploy, debug. Repeat!
          </p>
                
       </div>
        <div className="footer">
           <div className="footerdata">
        <i class="fa fa-envelope" aria-hidden="true"> shashircciit@gmail.com </i>
        <i class="fa fa-mobile" aria-hidden="true"> +91 8961478702 </i>
        <i class="fa fa-globe" aria-hidden="true"> <a className="meawwlinka" href="http://shashi-singh.herokuapp.com/"> shashi-singh </a> </i>  
        </div>
        </div>
          <div className="menu">
             <Button className="buttona-menu"><a href="#experience">Experiences</a></Button>{' '}
             <Button className="buttona-menu"><a href="#education">Education</a></Button>{' '}
             <Button className="buttona-menu"><a href="#skills">Skills</a></Button>{' '}
             <Button className="buttona-menu"><a href="#portfolio">Portfolio</a></Button>{' '}
             <Button className="buttona-menu"><a href="#contact">Contact</a></Button>{' '}
         </div>
              <div className="experience" id="experience">
                <div className="expsmall">
                <h1 className="exph"> Work Experiences </h1>
                <img className="imagemeaww" alt="Meaww.com" src="meaww.jpg"/>
                <h1 className="namemeaww"><a className="meawwlink" href="https://meaww.com"> Meaww.com </a> </h1>
                <h1 className="workperiod"><i class="fa fa-calendar" aria-hidden="true"> Nov 2016 to Present </i> </h1>
                <i class="fa fa-map-marker" aria-hidden="true"> Bangalore </i>
                <h1 className="position"> Full Stack Developer</h1>
                  <p className="meawwp">Meaww is a fully integrated entertainment company and has forayed into all forms of media, from FB quizzes, videos to articles to art and opinion pieces; which cater to all kinds of content needs of our users.
                  </p>
                     <p className="meawwpme">However, graduating with a Btech degree and having some skill in web developing, I was able to join Meaww as a full stack developer and I started coding for their product Fb-quizzes. 
                    After one year later, I am working with development & Social media marketing team.
                    </p>
                  </div>
              </div>
              <div className="education" id="education">
                <h1 className="educationa">Education</h1>
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                <h1 className="dname">Bachelore of technology</h1>
                <h2 className="clgname">RCC Istitute of infromation technology</h2>
                <h3 className="clgname">(2012-2016) </h3>
                <i class="fa fa-map-marker" aria-hidden="true"> West Bengal, India</i>
                <p className="collegep">"A college degree is not a sign that one is a finished product but an indication a person is prepared for life." <br /> <br />
                Going to college Helped me, Because i had four years in the conservatory program, which is close as you can get to a professional environemnt. Its like all day.
                  </p>
              
                </div>
              <div className="skills" id="skills">
               <h1 className="educationa">Skills</h1>
                 <div className="circle">
                 <img className="circlea" alt="" src="html.png"/>
                 <img className="circlea" alt="" src="bootstrap.jpg"/>
                 <img className="circlea" alt="" src="css.jpg"/>
                 <img className="circlea" alt="" src="sass.png"/>
                 <img className="circlea" alt="" src="react.png"/>
                 <img className="circlea" alt="" src="nodejs.png"/>
                 <img className="circlea" alt="" src="express.png"/>
                 <img className="circlea" alt="" src="mongodb.png"/>
                 <img className="circlea" alt="" src="mysql.png"/>
                 <img className="circlea" alt="" src="fbad.jpg"/>
                 <img className="circlea" alt="" src="fbad.jpg"/>
                 <img className="circlea" alt="" src="fbad.jpg"/>
                </div> 
             
              </div>
              
              <div className="portfolio">
             
              </div>
              <div className="contact" id="contact">
              <h1 className="contacts"> Get in Touch</h1>  
              <img className="imageaa" alt="" src="IMG_20171125_120114.jpg"/>
              <p className="contactp">
                </p>
                <p className="contactppe">
                 I can help with the following:
                </p>
                <h1 className="contactppp"><i className="fa fa-check-circle-o fa-2X"></i>   App development with ReactJS </h1>
                <h1 className="contactppp"> <i className="fa fa-check-circle-o fa-2X"></i>  Front-end development with RecatJS, Express, Html, css</h1>
                <h1 className="contactppp"> <i className="fa fa-check-circle-o fa-2X"></i>  Back-end development with  nodejs </h1><br />
                <h1 className="contactppp"> <i className="fa fa-check-circle-o fa-2X"></i>  UI development </h1><br />
                <h1 className="contactppp"> <i className="fa fa-check-circle-o fa-2X"></i>  UX prototyping  </h1>
                <p className="contactno"> Drop a mail for a good conversation and work on 
                   <address>
                      <a className="maillinks" href="mailto:shashircciit@gmail.com"> shashircciit@gmail.com </a>
                   </address>
                </p>
              </div>






      </div>
    );
  }
}

export default App;
