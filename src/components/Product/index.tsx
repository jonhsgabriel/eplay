import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="http://via.placeholder.com/222x258" alt="" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit iusto ea
        esse perspiciatis distinctio labore illo itaque odio, atque laborum
        tempora molestias, deserunt voluptas, quos blanditiis inventore iste.
        Error, aliquam.
      </Descricao>
    </Card>
  )
}

export default Product
