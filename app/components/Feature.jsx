import React, { Component } from 'react';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import andrew from './../img/portfolio-andrew.png';
import plaid from './../img/am-logo-plaid.png';
import checker from './../img/am-logo-checker.png';

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    this.setState({ isVisible });
  }

  render() {
    const gitHubIconClass = classNames('devicon', 'devicon-github-plain', 'colored');

    const featureContainerClasses = classNames({
      'feature-container': true,
      'parallax': true
    });

    const featureClasses = classNames({
      'feature': true,
      'feature-transition': this.state.isVisible
    });

    return (
      <div className={featureContainerClasses}>
        <VisibilitySensor onChange={this.onChange} />

          <div className={featureClasses}>

            <h1>Andrew Merrell</h1>
            <h3>Software Developer</h3>
              <div className='contact-icons'>
                <a href='mailto:andrew.m.merrell@gmail.com'>
                  <i className='material-icons'>email</i>
                </a>
                <a href='https://github.com/amcmerrell' target='blank'>
                  <i className={gitHubIconClass} />
                </a>
              </div>
          </div>

      </div>
    );
  }
}

export default Feature;
