import Banner from "../../components/Banner"
import ProductList from "../../components/ProductList"
import Game from "../../Models/Game"

import resident from "../../assets/images/resident.png"
import diablo from "../../assets/images/diablo.png"
import zelda from "../../assets/images/zelda.png"
import starWars from "../../assets/images/star_wars.png"

const promocoes: Game[] = [
  {
    id: 1,
    category: "Ação",
    description: "Jogo bacana e legal",
    title: "Residente",
    system: "Linux",
    infos: ["10%", "R$ 200,00"],
    image: resident
  },
  {
    id: 2,
    category: "Aventura",
    description: "Jogo bacana e Massa",
    title: "Diablo",
    system: "Windows",
    infos: ["10%", "R$ 200,00"],
    image: diablo
  },
  {
    id: 1,
    category: "Exploração",
    description: "Jogo bacana e top",
    title: "Star Wars",
    system: "Linux",
    infos: ["10%", "R$ 250,00"],
    image: starWars
  },
  {
    id: 1,
    category: "Aventura",
    description: "Jogo bacana e diferente",
    title: "Zelta",
    system: "Linux",
    infos: ["10%", "R$ 200,00"],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: "RPG",
    description: "bom e barato",
    title: "Diablo 4",
    system: "windows",
    infos: ["17/05"],
    image: diablo
  },
  {
    id: 6,
    category: "RPG",
    description: "bom e barato",
    title: "Diablo 4",
    system: "windows",
    infos: ["17/05"],
    image: diablo
  },
  {
    id: 7,
    category: "RPG",
    description: "bom e barato",
    title: "Diablo 4",
    system: "windows",
    infos: ["17/05"],
    image: diablo
  },
  {
    id: 8,
    category: "RPG",
    description: "bom e barato",
    title: "Diablo 4",
    system: "windows",
    infos: ["17/05"],
    image: diablo
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
