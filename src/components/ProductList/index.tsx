import Product from "../Product"
import { Container, List, Title } from "./styles"

export type Props = {
  title: string
  background: "gray" | "black"
}

const ProductList = ({ background, title }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product
            category="Acão"
            description="teste"
            image="//placehold.it/222x258"
            infos={["-10 % R$ 250,00"]}
            system="Windows"
            title="FIFA"
          />
          <Product
            category="Acão"
            description="teste"
            image="//placehold.it/222x258"
            infos={["-10 % R$ 250,00"]}
            system="Windows"
            title="FIFA"
          />
          <Product
            category="Acão"
            description="teste"
            image="//placehold.it/222x258"
            infos={["-10 % R$ 250,00"]}
            system="Windows"
            title="FIFA"
          />
          <Product
            category="Acão"
            description="teste"
            image="//placehold.it/222x258"
            infos={["-10 % R$ 250,00"]}
            system="Windows"
            title="FIFA"
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductList
