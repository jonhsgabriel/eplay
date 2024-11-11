import Game from "../../Models/Game"
import Product from "../Product"
import { Container, List, Title } from "./styles"

export type Props = {
  title: string
  background: "gray" | "black"
  games: Game[]
}

const ProductList = ({ background, title, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
              title={game.title}
              key={game.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
