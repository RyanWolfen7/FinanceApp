import React from 'react'
import { withRouter } from 'react-router';
import Summary from './Summary/Summary';
import Movers from './Movers/Movers';
import { MarketContainer } from '../../styles/Markets'

const Markets = props => {
    
    return ( 
        <MarketContainer>
            <Summary />
            <Movers />
        </MarketContainer>
    )
}

export default withRouter(Markets)