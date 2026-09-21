import './App.css';
import Logo from './componentes/logo';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';


const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS', 'NOVIDADES'];

const iconesOpcoes = [sacola, perfil];


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>
      <ul className='icones'>
        {iconesOpcoes.map((icone) => (
          <li><img src={icone} alt="icone" /></li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;
