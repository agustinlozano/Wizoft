import Link from 'next/link'
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
