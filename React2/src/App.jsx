import Alert from "./components/Alert";
import Card from "./components/Card";
import LayOut from "./components/LayOut";
import RenderList from "./components/RenderList";
import Pokedex from "./components/Pokedex";

function App() {
  const data = {
    image: "../../.learn/assets/Dylan.png?raw=true",
    cardTitle: "Bob Dylan",
    cardDescription:
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
      url: "https://en.wikipedia.org/wiki/Bob_Dylan",
      label: "Go to wikipedia",
    },
  };
  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];
  const pokemon = {
    pokemon: [
      {
        id: 1,
        name: 'Charmander',
        type: 'fire',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      },
      {
        id: 2,
        name: 'Squirtle',
        type: 'water',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      },
      {
        id: 3,
        name: 'Butterfree',
        type: 'flying',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
      },
      {
        id: 4,
        name: 'Rattata',
        type: 'normal',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
      },
      {
        id: 5,
        name: 'Metapod',
        type: 'bug',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
      },
    ]
  }
  return (
    <>
      <Card />
      <Alert text="OMG! Something really bad has happened!" />
      <LayOut data={data} />
      <RenderList animals={animals} />
    </>
  );
}

export default App;
