import { Imagem, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>Marvel Spider Man: Miles Morales PS4 e PS5</Titulo>
      <Precos>
        <span>De R$ 250,00 </span>
        <br />
        por apenas R$ 99,90
      </Precos>
    </div>
  </Imagem>
)

export default Banner
