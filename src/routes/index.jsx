import { Route, Switch } from 'wouter'
import Home from '../pages/home'
import AboutMe from '../pages/AboutMe'
import Projects from '../pages/Projects'

const PageRouters = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/about-me' component={AboutMe} />
      <Route path='/projects' component={Projects} />
    </Switch>
  )
}

export default PageRouters
