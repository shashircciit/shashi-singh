import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        <i class="fa fa-github" aria-hidden="true"></i>
        <i class="fa fa-angellist" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <Button  className="buttona" color="#52433a" size="lg"><i class="fa fa-telegram" aria-hidden="true"></i>DOWNLOAD MY RESUME</Button>{' '}
        <Button  className="button" color="#52433a" size="lg"><i class="fa fa-download" aria-hidden="true"></i>HIRE ME</Button>{' '}
        </header>
      
       <div className="bodypart">
         <div className="profile">
        <img className="image" alt="" src="IMG_20171125_120114.jpg"/>
        <h1> Shashi Singh </h1>
        <h2> Full Stack Developer </h2>
        </div>
           <p>With 1yr+ hands-on experience developing, releasing, and maintaining large-scale online web-based applications, 
             I have learned to own what I build as I create, test and refine the front end as well as web-services on the server side, 
             following the motto of Discover, design, develop, deploy, debug. Repeat!
          </p>
       </div>
        <div className="footer">
           <div className="footerdata">
        <i class="fa fa-envelope" aria-hidden="true"> shashircciit@gmail.com </i>
        <i class="fa fa-mobile" aria-hidden="true"> +91 8961478702 </i>
        <i class="fa fa-globe" aria-hidden="true"> website </i>
        </div>
        </div>
          <div className="menu">
             <Button className="buttona-menu"><a href="/experience">Experiences</a></Button>{' '}
             <Button className="buttona-menu"><a href="">Education</a></Button>{' '}
             <Button className="buttona-menu"><a href=" ">Skills</a></Button>{' '}
             <Button className="buttona-menu"><a href=" ">Testimonials</a></Button>{' '}
             <Button className="buttona-menu"><a href=" ">Portfolio</a></Button>{' '}
             <Button className="buttona-menu"><a href=" ">Contact</a></Button>{' '}
         </div>
              <div className="experience">
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
              <div className="Education">
             
              </div>
              <div className="Skills">
             
              </div>
              <div className="Testimonials">
             
              </div>
              <div className="Portfolio">
             
              </div>
              <div className="Contact">
             
              </div>






      </div>
    );
  }
}

export default App;
