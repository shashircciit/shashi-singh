import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
       <div className="App">
        <header className="App-header">
          <div className="links">
           <a  href="https://www.linkedin.com/in/shashi-shekhar-singh-86a814105">
           <i className="fa fa-linkedin" aria-hidden="true"></i></a>
           <a  href="https://github.com/shashircciit">
           <i className="fa fa-github" aria-hidden="true"> </i></a>
           <a  href="https://angel.co/shashi-singh-7">
           <i className="fa fa-angellist" aria-hidden="true"></i></a>
           <a  href="https://www.facebook.com/shashi.singh.581">
           <i className="fa fa-facebook" aria-hidden="true"></i></a>
           </div>
           <div className="buttons">
            <Button  className="button" color="#52433a" size="lg"><i className="fa fa-telegram" aria-hidden="true"></i>HIRE ME</Button>{' '}
            <Button  className="buttona" color="#52433a" size="lg"><i className="fa fa-download" aria-hidden="true"></i>DOWNLOAD MY RESUME</Button>{' '}
           </div>
          </header>
      
       <div className="bodypart">
         <div className="profile">
        <img className="image" alt="" src="IMG_20171125_120114.jpg"/>
        <h1> Shashi Singh </h1>
        <h2> Full Stack Developer </h2>
        </div>
           <p className="pes">With 1yr+ hands-on experience developing, releasing, and maintaining large-scale online web-based applications, I have learned to own what I build as I create, test and refine the front end as well as web-services on the server side, following the motto of Discover, design, develop, deploy, debug. Repeat!
          </p>
                
       </div>
        <div className="footer">
           <div className="footerdata">
        <i className="fa fa-envelope" aria-hidden="true"> shashircciit@gmail.com </i>
        <i className="fa fa-mobile" aria-hidden="true"> +91 8961478702 </i>
        <i className="fa fa-globe" aria-hidden="true"> <a className="meawwlinka" href="http://shashi-singh.herokuapp.com/"> shashi-singh </a> </i>  
        </div>
        </div>
          <div className="menu">
             <Button className="buttona-menu"><a href="#experience">Experiences</a></Button>
             <Button className="buttona-menu"><a href="#education">Education</a></Button>
             <Button className="buttona-menu"><a href="#skills">Skills</a></Button>
             <Button className="buttona-menu"><a href="#portfolio">Portfolio</a></Button>
             <Button className="buttona-menu"><a href="#contact">Contact</a></Button>
         </div>
              <div className="experience" id="experience">
                <div className="expsmall">
                <h1 className="exph"> Work Experiences </h1>
                <img className="imagemeaww" alt="Meaww.com" src="meaww.jpg"/>
                <h1 className="position"> Full Stack Developer</h1>
                <h1 className="namemeaww"><a className="meawwlink" href="https://meaww.com"> Meaww.com </a> </h1>
                <h1 className="workperiod"><i className="fa fa-calendar" aria-hidden="true"> Nov 2016 to Present </i> </h1>
                <i className="fa fa-map-marker" aria-hidden="true"> Bangalore </i>
                <p className="meawwp">Meaww is a fully integrated entertainment company and has forayed into all forms of media, from FB quizzes, videos to articles to art and opinion pieces; which cater to all kinds of content needs of our users.
                  </p>
                     <p className="meawwpme">However, graduating with a Btech degree and having some skill in web developing, I was able to join Meaww as a full stack developer and I started coding for their product Fb-quizzes. 
                    After one year later, I am working with development & Social media marketing team.
                    </p>
                  </div>
              </div>
              <div className="education" id="education">
                <h1 className="educationa">Education</h1>
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                <h1 className="dname">Bachelore of technology</h1>
                <h2 className="clgname">RCC Istitute of infromation technology</h2>
                <i className="fa fa-map-marker" aria-hidden="true"> West Bengal, India</i>
                <h3 className="clgnamea">(2012-2016) </h3>
                
                <p className="collegep">"A college degree is not a sign that one is a finished product but an indication a person is prepared for life." <br /> <br />
                Going to college Helped me, Because i had four years in the conservatory program, which is close as you can get to a professional environemnt. Its like all day.
                  </p>
              
                </div>
              <div className="skills" id="skills">
               <h1 className="skillsa">Skills</h1>
                 <div className="circle">
                 <img className="circlea" alt="" src="1.png"/>
                 <img className="circlea" alt="" src="7.png"/>
                 <img className="circlea" alt="" src="css.jpg"/>
                 <img className="circlea" alt="" src="2.png"/>
                 <img className="circlea" alt="" src="react.png"/>
                 <img className="circlea" alt="" src="nodejs.png"/>
                 <img className="circlea" alt="" src="4.png"/>
                 <img className="circlea" alt="" src="6.png"/>
                 <img className="circlea" alt="" src="5.png"/>
                 <img className="circlea" alt="" src="8.png"/>
                 <img className="circlea" alt="" src="9.png"/>
                 <img className="circlea" alt="" src="10.png"/>
                </div> 
               </div>
              
              <div className="portfolio" id="portfolio">
                 <h1 className="portname" id="portfolio">Portfolio</h1>
                 <i className="fa fa-product-hunt" aria-hidden="true"></i>
                 <a className="leopetra" href="https://leopetra.com/"> Leopetra.com </a>
                 <h1 className="porta">Worked on Leopetra website using react.js.</h1>
                 <h1 className="porta">Full​ ​Responsive​ ​Website​,​ ​with​ ​admins​ ​having​ ​ability​ ​to update​ ​content​ ​on​ ​server.</h1> 
                 <h1 className="porta">A fully functional website where one can avail any information about pets and also can book 
                 Vets, Trainers, Saloon, Restaurants and Event tickets for their pets.</h1> 
                 
                 <i className="fa fa-product-hunt" aria-hidden="true"></i>
                 <a className="leopetra" href="https://weberhead.herokuapp.com/"> WeberHead Design </a>
                 <h1 className="porta">This is my First website to show front-end work.</h1>
                 <h1 className="porta">Full​ ​Responsive​ ​Website​ which is coded in html5 and css3.</h1> 
                

              </div>
              <div className="contact" id="contact">
              <h1 className="contacts"> Get in Touch</h1>  
              <img className="imageaa" alt="" src="shashi2.jpg"/>
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
                <address>
                  <p className="contactno"> Drop a mail if i can help you 
                      <a className="maillinks" href="mailto:shashircciit@gmail.com"> shashircciit@gmail.com </a>
                  </p>
                </address>
              </div>






      </div>
    );
  }
}

export default App;
