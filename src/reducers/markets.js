import {
    GET_SUMMARY, GET_SUMMARY_SUCCESS, GET_SUMMARY_FAILURE,
    GET_MOVERS, GET_MOVERS_SUCCESS, GET_MOVERS_FAILURE
} from '../types/markets'
import mocks from '../mocks/markets/index'

export const initialState = {
    isLoading: false,
    summary: mocks.summaryMock,
    movers: mocks.moversMock,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_SUMMARY:
            return {
                ...state,
                isLoading: true,
            }
        case GET_SUMMARY_SUCCESS:
            return {
                ...state,
                summary: action.payload.data.marketSummaryResponse.result,
                isLoading: false
            }
        case GET_SUMMARY_FAILURE:
            return {
                ...state,
                error: action.error.response.data,
                isLoading: false,
            }
        case GET_MOVERS:
            return {
                ...state,
                isLoading: true
            }
        case GET_MOVERS_SUCCESS:
            return {
                ...state,
                movers: action.payload.data.finance.result,
                isLoading: false
            }
        case GET_MOVERS_FAILURE:
            return {
                ...state,
                error: action.error.response.data,
                isLoading: false,
            }
        default:
            return state
    }
}

// GET_AUTO_COMPLETE, GET_AUTO_COMPLETE_SUCCESS, GET_AUTO_COMPLETE_FAILURE,
//     GET_EARNINGS, GET_EARNINGS_SUCCESS, GET_EARNINGS_FAILURE,
//     GET_MOVERS, GET_MOVERS_SUCCESS, GET_MOVERS_FAILURE,
//     GET_POPULAR, GET_POPULAR_SUCCESS, GET_POPULAR_FAILURE,
//     GET_QUOTES, GET_QUOTES_FAILURE, GET_QUOTES_SUCCESS,
//     GET_SPARK, GET_SPARK_FAILURE, GET_SPARK_SUCCESS,
//     GET_TRENDING, GET_TRENDING_FAILURE, GET_TRENDING_SUCCESS