import React, { Component } from 'react';
import duospell from './../img/duospell.png';

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h2>Projects</h2>
        <div className='projects-main'>
          <div className='project-section'>
            <img alt='Duo Spell' src={duospell} />
            <h4>Duo Spell</h4>
            <p>Duo Spell is a multiplayer application developed with React Native for both iOS and Android. In addition, Duo Spell leverages Node.JS/Express for both user authentication and real-time communication API.</p>
          </div>
          <div className='project-section'>
            <img alt='Duospell' src={duospell} />
          </div>
          <div className='project-section'>
            <img alt='Duospell' src={duospell} />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
