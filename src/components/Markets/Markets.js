import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import actions from '../../actions'

const Markets = props => {
    const { isLoading, summary, error } = useSelector( state => state.markets)
    const dispatch = useDispatch()

    console.log(summary)

    useEffect(() => {
        dispatch(actions.markets.getSummary())
    },[])

    return ( 
        <h1> Works   { console.log(summary) } </h1>
    )
}

export default withRouter(Markets)