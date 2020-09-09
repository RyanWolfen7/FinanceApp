import React from 'react'
import { SummaryContainer, ExchangeContainer } from '../../styles/Markets'

const Summary = props => {
    const { summary = []} = props

    const renderSummary = () => {
        return summary.map( exchangeObj => {
            const { 
                exchange, regularMarketChange, regularMarketChangePercent,
                regularMarketPreviousClose, regularMarketPrice, regularMarketTime 
            } = exchangeObj

            const findIncrease = regularMarketPrice.raw > regularMarketPreviousClose.raw

            return (
                <ExchangeContainer key={exchange} id={exchange}> 
                    {exchange}: {regularMarketPrice.fmt} <span {...findIncrease}> {regularMarketChangePercent.fmt} </span> {regularMarketTime.fmt}
                </ExchangeContainer>
            )
        })
    }

    return (
        <SummaryContainer>
            {summary && renderSummary()}
        </SummaryContainer>
    )
}

export default Summary