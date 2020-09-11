import React, { useEffect } from 'react'
import { MoversContainer } from '../../styles/Markets'
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions'
// delete after testing
import mockMovers from '../../mocks/markets/marketMovers.json'

const Movers = props => {
    const { isLoading, movers = [], error } = useSelector( state => state.markets)
    const dispatch = useDispatch()
    
    useEffect(() => {
        // dispatch(actions.markets.getMovers())
    }, [])

    return (
        <MoversContainer>
            <h1>here</h1>
        </MoversContainer>
    )
}

export default Movers