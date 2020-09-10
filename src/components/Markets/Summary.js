import React from 'react'
import { SummaryContainer, ExchangeContainer, ExchangeElement } from '../../styles/Markets'

const Summary = props => {
    const { summary } = props

    const renderSummary = () => {
        return summary.map( (exchangeObj, index) => {
            const { 
                exchange, regularMarketChange, regularMarketChangePercent,
                regularMarketPreviousClose, regularMarketPrice, regularMarketTime 
            } = exchangeObj

            const findIncrease = regularMarketPrice.raw > regularMarketPreviousClose.raw

            return (
                <ExchangeElement key={index}> 
                    {exchange}: {regularMarketPrice.fmt} <span {...findIncrease}> {regularMarketChangePercent.fmt} </span> {regularMarketTime.fmt}
                </ExchangeElement>
            )
        })
    }

    return (
        <SummaryContainer> <ExchangeContainer>{summary.length && renderSummary()} </ExchangeContainer></SummaryContainer>
    )
}

export default Summary