import {
    GET_SUMMARY, GET_SUMMARY_SUCCESS, GET_SUMMARY_FAILURE,
    GET_AUTO_COMPLETE, GET_AUTO_COMPLETE_SUCCESS, GET_AUTO_COMPLETE_FAILURE,
    GET_EARNINGS, GET_EARNINGS_SUCCESS, GET_EARNINGS_FAILURE,
    GET_MOVERS, GET_MOVERS_SUCCESS, GET_MOVERS_FAILURE,
    GET_POPULAR, GET_POPULAR_SUCCESS, GET_POPULAR_FAILURE,
    GET_QUOTES, GET_QUOTES_FAILURE, GET_QUOTES_SUCCESS,
    GET_SPARK, GET_SPARK_FAILURE, GET_SPARK_SUCCESS,
    GET_TRENDING, GET_TRENDING_FAILURE, GET_TRENDING_SUCCESS
} from '../types/markets'

const getSummary = () => {
    return dispatch => {

        fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_MARKET_KEY
            }
        })
        .then(response => {
            return response.json()
        })
        .then( data => {
            let formatedData = {...data}
            formatedData.type = GET_SUMMARY_SUCCESS
            dispatch(formatedData)  
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export default {
    getSummary
}