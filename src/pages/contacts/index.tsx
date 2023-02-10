import React from 'react'

import StartScreen from './components/StartScreen'
import ThreeScreen from './components/ThreeScreen'
import TwoScreen from './components/TwoScreen'
import { CaruselUsefulLinks, FormFeedBack } from '../../constructor'
import { MyContainer } from '../../components'

const Contacts = () => {
    return (
        <div>
            <StartScreen />
            <TwoScreen />
            <ThreeScreen/>
            <MyContainer wrapper={false} sx={{ mt: 5 }}>
                <CaruselUsefulLinks />
                <FormFeedBack />
            </MyContainer>
        </div>
    )
}

export default Contacts