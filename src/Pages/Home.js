import React from 'react';
import Hero from '../components/Hero/Hero'
import Vision from '../components/Vision/Vision'
import RoadMap from '../components/RoadMap/RoadMap'
import Subscribe from '../components/Subscribe/Subscribe'
import PS from '../components/Partners/PartnersSection'

class Home extends React.Component {

  render() {
    return <>
      <Hero />
      <Vision />
      <RoadMap />
      <Subscribe  />
      <PS />
    </>
  }
}; export default Home;