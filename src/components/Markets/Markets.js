import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import actions from '../../actions'

const Markets = props => {
    const { isLoading, summary, error } = useSelector( state => state.markets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.markets.getSummary())
    },[])

    return (
        <h1> Works </h1>
    )
}

export default withRouter(Markets)