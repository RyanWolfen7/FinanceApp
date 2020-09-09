import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import actions from '../../actions'
import { MarketContainer } from '../../styles/Markets'
import Summary from './Summary';

const Markets = props => {
    const { isLoading, summary, error } = useSelector( state => state.markets)
    const dispatch = useDispatch()

    console.log(summary)

    useEffect(() => {
        dispatch(actions.markets.getSummary())
    },[])

    return ( 
        <>
            <Summary {...summary}/>
        </>
    )
}

export default withRouter(Markets)