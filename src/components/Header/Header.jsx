import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandonValue(max){
  return Math.floor(Math.random() * max + 1);
}

export default function Header() {

    const selectDescription = reactDescriptions[getRandonValue(2)];
  
    //componente
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials Test</h1>
          <p>
            {selectDescription} o {reactDescriptions[getRandonValue(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    )
  }