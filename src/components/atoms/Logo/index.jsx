import { Link } from 'wouter'
import Logo from '../../ui/logo'
import { LinkTo } from './styles'

const LogoLink = () => {
  return (
    <Link href='/'>
      <LinkTo>
        <Logo />
      </LinkTo>
    </Link>
  )
}

export default LogoLink
