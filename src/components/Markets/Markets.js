import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import actions from '../../actions'
import Summary from './Summary';
// delete after testing
import mockSummary from '../../mocks/markets/marketSummary.json'

const Markets = props => {
    const { isLoading, summary = [], error } = useSelector( state => state.markets)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(actions.markets.getSummary())
    },[])
    
    return ( 
        <>
            <Summary 
                summary={mockSummary.marketSummaryResponse.result}
            />
        </>
    )
}

export default withRouter(Markets)