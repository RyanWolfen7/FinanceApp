import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import Routes from './Routes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #CFFFF8;
        background: #CFFFF8 -webkit-gradient(linear, left top, left bottom, from(#1E8D7D, 10%), to(#CFFFF8, 100%)) no-repeat;
        background: #CFFFF8 -moz-linear-gradient(top, #1E8D7D, #CFFFF8) no-repeat;
        filter: progid:DXImageTransforme.Microsoft.gradient(startColorstr=#1E8D7D, endColorstr=#CFFFF8) no-repeat;
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#B34151, endColorstr=#B34151)" no-repeat;
    }
`

const routes = (
    <Provider store={store}>
        <Router>
            <GlobalStyle/>
            <App>
                <Routes />
            </App>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));