import { Redirect, Route, Switch } from 'wouter'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'

const PageRouters = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Redirect to='/' />
    </Switch>
  )
}

export default PageRouters
