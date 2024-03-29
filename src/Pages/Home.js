import React from 'react'
import Header from '../compponens/Header'
import Footer from '../compponens/Footer'
import Slider from '../compponens/Slider'
// import Offercorner from '../compponens/Offercorner'
import Process from '../compponens/Process'
import ForHer from '../compponens/ForHer'
import V2KARTSPOTLIGHT from '../compponens/V2KART SPOTLIGHT'
import INTHESPOTLIGHTS from '../compponens/INTHESPOTLIGHTS'
import TopPicklisting from '../compponens/TopPicklisting'
import ForHim from '../compponens/ForHim'
import ForKids from '../compponens/ForKids'

const Home = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <TopPicklisting/>
    {/* <Offercorner/> */}
    <ForHer/>
    <ForHim/>
    <ForKids/>
    <V2KARTSPOTLIGHT/>
    <INTHESPOTLIGHTS/>
    <Process/>
    <Footer/>
    </>
  )
}

export default Home