import React, { Component } from 'react';
import classNames from 'classnames';
import andrew from './../img/am_landscape.jpg';

class SubFeature extends Component {

  render() {
    const javaIconClass = classNames('devicon', 'devicon-java-plain', 'colored');
    const javaScriptIconClass = classNames('devicon', 'devicon-javascript-plain', 'colored');
    const htmlIconClass = classNames('devicon', 'devicon-html5-plain', 'colored');
    const cssIconClass = classNames('devicon', 'devicon-css3-plain', 'colored');

    const androidIconClass = classNames('devicon', 'devicon-android-plain', 'colored');
    const reactIconClass = classNames('devicon', 'devicon-react-plain', 'colored');
    const angularIconClass = classNames('devicon', 'devicon-angularjs-plain', 'colored');

    const nodeIconClass = classNames('devicon', 'devicon-nodejs-plain', 'colored');
    const postgresIconClass = classNames('devicon', 'devicon-postgresql-plain', 'colored');


    return (
      <div className='subfeature-container'>
        <div className='subfeature-section'>
          <h2>About Me</h2>
          <img alt='Andrew Merrell' src={andrew} />
          <p>I&#39;m Digital Producer turned Software Developer, with 6 years of experience in the digital space. In my previous roles, I&#39;ve developed digital strategy for clients at a music business start-up in Nashville, managed content production for Nike.com, and led a team of 10 at a digital agency in Portland. Now, I'm pursuing my passion for building great products as a Mobile & Front-end Developer.</p>
          <p>Want to learn more? Check out my work or feel free to reach out.</p>
          <a href='mailto:andrew.m.merrell@gmail.com'>
            <div className='contact-icons'>
              <i className='material-icons'>email</i>
              <span>andrew.m.merrell@gmail.com</span>
            </div>
          </a>
        </div>

        <div className='subfeature-section'>
          <h2>Skills</h2>
          <div className='skills-main'>

            <div className='skill-type'>
              <h3>Languages</h3>
              <div className='skills-container'>
                <div className='skill-label'>
                  <i className={javaIconClass} />
                  <p>Java</p>
                </div>
                <div className='skill-label'>
                  <i className={javaScriptIconClass} />
                  <p>JavaScript</p>
                </div>
                <div className='skill-label'>
                  <i className={htmlIconClass} />
                  <p>HTML5</p>
                </div>
                <div className='skill-label'>
                  <i className={cssIconClass} />
                  <p>CSS3</p>
                </div>
              </div>
            </div>

            <div className='skill-type'>
              <h3>Mobile</h3>
              <div className='skills-container'>
                <div className='skill-label'>
                  <i className={androidIconClass} />
                  <p>Android</p>
                </div>
                <div className='skill-label'>
                  <i className={reactIconClass} />
                  <p>React Native</p>
                </div>
              </div>
            </div>

            <div className='skill-type'>
              <h3>Front-end</h3>
              <div className='skills-container'>
                <div className='skill-label'>
                  <i className={reactIconClass} />
                  <p>React</p>
                </div>
                <div className='skill-label'>
                  <i className={angularIconClass} />
                  <p>AngularJS</p>
                </div>
              </div>
            </div>

            <div className='skill-type'>
              <h3>Back-end</h3>
              <div className='skills-container'>
                <div className='skill-label'>
                  <i className={postgresIconClass} />
                  <p>PostgreSQL</p>
                </div>
                <div className='skill-label'>
                  <i className={nodeIconClass} />
                  <p>NodeJS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubFeature;
