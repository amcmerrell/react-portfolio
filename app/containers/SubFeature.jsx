import React, { Component } from 'react';
import classNames from 'classnames';
import andrew from './../img/portfolio-andrew.png';

class SubFeature extends Component {

  renderDevIcons() {

  }


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
          <img alt='Andrew Merrell' src={andrew} />
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus nisi eu neque cursus rhoncus. Maecenas interdum ullamcorper accumsan. Duis sem orci, pretium pretium consectetur a, eleifend eu lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
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
              <h3>Backend</h3>
              <div className='skills-container'>
                <div className='skill-label'>
                  <i className={postgresIconClass} />
                  <p>Java</p>
                </div>
                <div className='skill-label'>
                  <i className={nodeIconClass} />
                  <p>JavaScript</p>
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
