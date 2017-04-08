import React, { Component } from 'react';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import andrew from './../img/portfolio-andrew.png';

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
            <img alt='Andrew Merrell' src={andrew} />
            <h3>Andrew Merrell</h3>
            <h4>Jr. Software Developer</h4>
          </div>

      </div>
    );
  }
}

export default Feature;
