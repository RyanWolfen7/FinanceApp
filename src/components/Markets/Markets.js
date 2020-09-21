import React from 'react'
import { withRouter } from 'react-router';
import Summary from './Summary/Summary';
import Movers from './Movers/Movers';
import { MarketBody, MarketContainer } from '../../styles/Markets'

const Markets = props => {
    
    return ( 
        <MarketContainer>
            <Summary />
            <MarketBody>
                <div> <h1>test</h1></div>
                <Movers />
            </MarketBody>
        </MarketContainer>
    )
}

export default withRouter(Markets)