import React from 'react'
import HomeBanner from '../../components/homeBanner/HomeBanner'
import HomeCard from '../../components/homeCard/HomeCard'
import HomeCard2  from '../../components/homeCard2/HomeCard2'
import HomeCard3 from '../../components/homeCard3/HomeCard3'
import OurappBoost from '../../components/ourApp/OurappBoost'
import Modelshome from '../../components/models/Modelshome'
import WatchHome from '../../components/watchome/WatchHome'
import BussinessHome from '../../components/bussinesshome/BussinessHome'

const HomePage = () => {
  return (
    <>
        <HomeBanner/>
        <HomeCard/>
        <HomeCard2/>
        <HomeCard3/>
        <OurappBoost/>
        <Modelshome/>
        <WatchHome/>
        <BussinessHome/>
    </>
  )
}

export default HomePage;