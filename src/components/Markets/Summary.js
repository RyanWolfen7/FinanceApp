import React, { useState, useEffect } from 'react'
import { SummaryContainer, ExchangeContainer, ExchangeElement } from '../../styles/Markets'

// add second react component here that handles the fetch request and resends after the animation time has been completed 
// this way only the ticker divs will update and not rerender the ticker background
const Summary = props => {
    const { summary } = props
    const [ firstStart, setFirstStart] = useState(true)

    useEffect(() => {

    }, [summary])

    const renderSummary = () => {
        return summary.map( (exchangeObj, index) => {
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