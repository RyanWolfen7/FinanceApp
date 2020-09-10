import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import actions from '../../actions'
import Summary from './Summary';

const Markets = props => {
    const { isLoading, summary = [], error } = useSelector( state => state.markets)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(actions.markets.getSummary())
    },[])

    return ( 
        <>
            <Summary summary={summary}/>
        </>
    )
}

export default withRouter(Markets)