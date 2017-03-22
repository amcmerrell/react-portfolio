import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <h1 style={styles.navContainer}>Navigation</h1>
    );
  }
}

const styles = {
  navContainer: {
    flex: 1,
    backgroundColor: 'grey'
  }
};

export default Nav;
