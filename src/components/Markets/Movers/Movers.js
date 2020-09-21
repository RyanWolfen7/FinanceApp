import React, { useEffect } from 'react'
import { MoversContainer, MoversHeader, MoversBody } from '../../../styles/Markets'
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../actions'
import { SpinnerDiamond  } from 'spinners-react'
import Mover from './MoverModal'

const Movers = props => {
    const { isLoading, movers = [], error } = useSelector( state => state.markets)

    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(actions.markets.getMovers())
    }, [])

    const renderMovers = () => {
        return movers.map( mover => {
            return <Mover {...mover} key={mover.id}/>
        })
    }

    return (
        <MoversContainer>
            <MoversHeader> Movers </MoversHeader>
            <MoversBody> 
                <SpinnerDiamond color={'#CFFEF8'} secondaryColor={'#C38D9E'} enabled={isLoading}/>
                { !isLoading && movers.length && renderMovers()}
            </MoversBody>
        </MoversContainer>
    )
}

export default Movers