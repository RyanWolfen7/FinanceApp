import React, { useState, useEffect } from 'react'
import { SummaryContainer, ExchangeContainer, ExchangeElement } from '../../../styles/Markets'
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../actions'

// add second react component here that handles the fetch request and resends after the animation time has been completed 
// this way only the ticker divs will update and not rerender the ticker background
const Summary = props => {
    const { isLoading, summary = [], error } = useSelector( state => state.markets)
    const dispatch = useDispatch()
    const [ firstStart, setFirstStart] = useState(true)

    useEffect(() => {
        // dispatch(actions.markets.getSummary())
    },[])

    const renderSummary = () => {
        return summary.map( exchangeObj => {
            const { regularMarketChangePercent, regularMarketPrice, regularMarketTime, symbol } = exchangeObj
            const positive = regularMarketChangePercent.raw > 0
            
            return (
                <ExchangeElement key={symbol} positive={positive}> 
                    {symbol}: &nbsp; {regularMarketPrice.fmt} <span> {regularMarketChangePercent.fmt} </span> {regularMarketTime.fmt}
                </ExchangeElement>
            )
        })
    }

    return (
        <SummaryContainer> 
            <ExchangeContainer firstStart={firstStart} length={summary.length}>
                {summary.length && renderSummary()} 
            </ExchangeContainer>
        </SummaryContainer>
    )
}

export default Summary