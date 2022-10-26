import React from 'react'
import WelcomeComp from './WelcomeComp';
import MonthlyEarning from './MonthlyEarnings';
import SocialSource from './SocialSource';
import StackedColumnChart from './StackedColumnChart';
import TopCities from './TopCities';
import LatestTranaction from './LatestTranaction';

function Dashboard() {
  return (
    <div >
    <WelcomeComp />
    
    <LatestTranaction/>
    <MonthlyEarning/>
    <SocialSource/>
   <TopCities/>

    </div>
  )
}

export default Dashboard
