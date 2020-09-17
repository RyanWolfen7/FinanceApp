import React from 'react'
import { withRouter } from 'react-router';
import Summary from './Summary/Summary';
import Movers from './Movers/Movers';

const Markets = props => {
    
    return ( 
        <>
            <Summary />
            <Movers />
        </>
    )
}

export default withRouter(Markets)