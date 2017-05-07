import React, { Component } from 'react';
import duospell from './../img/duospell.png';
import neighborly from './../img/neighborly.png';

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h2>Projects</h2>
        <div className='projects-main'>
          <div className='project-section'>
            <div className='project-image'>
              <img alt='Duo Spell' src={duospell} />
                <a href='http://www.duospell.com/' target='blank'>
                  <div className='project-img-overlay'>
                    <i className='material-icons'>visibility</i>
                    <span>View project</span>
                  </div>
                </a>
            </div>
            <h4>Duo Spell</h4>
            <p>Duo Spell is a multiplayer application developed with React Native for both iOS and Android. In addition, Duo Spell leverages Node.JS/Express for both user authentication and real-time communication API.</p>
          </div>
          <div className='project-section'>
            <div className='project-image'>
              <img alt='Neighborly PDX' src={neighborly} />
              <a href='http://www.duospell.com/' target='blank'>
                <div className='project-img-overlay'>
                  <i className='material-icons'>visibility</i>
                  <span>View on GitHub</span>
                </div>
              </a>
            </div>
            <h4>Neighborly PDX</h4>
            <p>Neighborly PDX is a web application that allows users to easily find reviews and other info on Portland neighborhoods. It uses the Ember front-end framework, as well as several Web API's and Firebase to handle data persistance.</p>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Projects;
