import * as React from 'react'
import *  as ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'
import { Router } from 'react-router-dom'
import { Header } from '../view/molecules/header'
import { Home, Lyric } from '../view/pages'

export interface AppRouteProps {
  history: any
}

export class AppRoute extends React.Component<AppRouteProps, any> {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <Router history={this.props.history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/lyric" component={Lyric} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}
