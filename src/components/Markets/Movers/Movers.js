import React, { useEffect } from 'react'
import { MoversContainer, MoversHeader, MoversBody } from '../../../styles/Markets'
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../actions'
import { SpinnerDiamond  } from 'spinners-react'

const Movers = props => {
    const { isLoading, movers = [], error } = useSelector( state => state.markets)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(actions.markets.getMovers())
    }, [])

    return (
        <MoversContainer>
            <MoversHeader> Movers </MoversHeader>
            <MoversBody> 
                <SpinnerDiamond color={'#CFFEF8'} secondaryColor={'#C38D9E'} enabled={isLoading}/>
            </MoversBody>
        </MoversContainer>
    )
}

export default Movers