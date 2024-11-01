import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="logo" />
      <nav>
        <Links>
          <LinkItem>
            {' '}
            <a href="#">Categoria</a>
          </LinkItem>
          <LinkItem>
            {' '}
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            {' '}
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
      <LinkCart href="#">
        0 - produto(s)
        <img src={carrinho} alt="carrinho" />
      </LinkCart>
    </div>
  </HeaderBar>
)

export default Header
