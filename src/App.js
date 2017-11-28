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
        <img className="image" alt="" src="IMG_20171125_120114.jpg"/>
        <h1> Shashi Singh </h1>
        <h2> Full Stack Developer </h2>
           <p>With 1yr+ hands-on experience developing, releasing, and maintaining large-scale online web-based applications, 
             I have learned to own what I build as I create, test and refine the front end as well as web-services on the server side, 
             following the motto of Discover, design, develop, deploy, debug. Repeat!
          </p>
       </div>
        <div className="footer">
        <i class="fa fa-envelope" aria-hidden="true"> shashircciit@gmail.com </i>
        <i class="fa fa-mobile" aria-hidden="true"> +91 8961478702 </i>
        <i class="fa fa-globe" aria-hidden="true"> website </i>
        </div>
        <div className="menu">
        <Button className="buttona-menu">Experiences</Button>{' '}
        <Button className="buttona-menu">Education</Button>{' '}
        <Button className="buttona-menu">Skills</Button>{' '}
        <Button className="buttona-menu">Testimonials</Button>{' '}
        <Button className="buttona-menu">Portfolio</Button>{' '}
        <Button className="buttona-menu">Contact</Button>{' '}
        



        </div>





      </div>
    );
  }
}

export default App;
