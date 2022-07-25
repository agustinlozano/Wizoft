import { Redirect, Route, Switch } from 'wouter'
import Home from '../pages/Home/index'

const PageRouters = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  )
}

export default PageRouters
