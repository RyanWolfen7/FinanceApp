import {
    GET_SUMMARY, GET_SUMMARY_SUCCESS, GET_SUMMARY_FAILURE,
    GET_MOVERS, GET_MOVERS_SUCCESS, GET_MOVERS_FAILURE
} from '../types/markets'

const getSummary = () => {
    return ({
        types: [GET_SUMMARY, GET_SUMMARY_SUCCESS, GET_SUMMARY_FAILURE],
        payload: {
            request: {
                url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary?region=US",
                method: 'GET',
                headers: {
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_MARKET_KEY
                }
            }
        }
    })
}

const getMovers = () => {
    return ({
        types: [GET_MOVERS, GET_MOVERS_SUCCESS, GET_MOVERS_FAILURE],
        payload: {
            request: {
                url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=US&start=0&lang=en-US&count=6",
                method: 'GET',
                headers: {
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_MARKET_KEY
                }
            }
        }
    })
}

export default {
    getSummary,
    getMovers
}

// GET_AUTO_COMPLETE, GET_AUTO_COMPLETE_SUCCESS, GET_AUTO_COMPLETE_FAILURE,
// GET_EARNINGS, GET_EARNINGS_SUCCESS, GET_EARNINGS_FAILURE,
// GET_MOVERS, GET_MOVERS_SUCCESS, GET_MOVERS_FAILURE,
// GET_POPULAR, GET_POPULAR_SUCCESS, GET_POPULAR_FAILURE,
// GET_QUOTES, GET_QUOTES_FAILURE, GET_QUOTES_SUCCESS,
// GET_SPARK, GET_SPARK_FAILURE, GET_SPARK_SUCCESS,
// GET_TRENDING, GET_TRENDING_FAILURE, GET_TRENDING_SUCCESS