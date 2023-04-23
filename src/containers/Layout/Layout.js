import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Copyright from '../../components/Copyright/Copyright';

import Home from '../../Pages/Home';
class Layout extends React.Component {

  render() {
    return <>
      <Navbar />
      <Home />
      <Footer addName />
      <Copyright />
    </>
  }
};

export default Layout;