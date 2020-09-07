import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainView from './components/MainView/MainView'
import Markets from './components/Markets/Markets'

export default () => {
    return (
        <Switch>
            <Route
                component={MainView}
                exact
                path={'/'}
            />
            <Route
                component={Markets}
                exact
                path={'/markets'}
            />
        </Switch>
    )
}