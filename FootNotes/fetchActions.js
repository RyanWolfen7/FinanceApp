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