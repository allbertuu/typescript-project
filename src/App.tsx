import './App.css';
import { start } from './scripts/main';

function App() {

  return (
    <div className='container'>
      <h1>Bem-vindo, piloto 👨🏼‍✈️</h1>
      <button onClick={start}>Iniciar!</button>
      <footer>
        <p>Para eventuais problemas, ou se quiser me conhecer :)</p>
        <a href="https://www.linkedin.com/albertov-albuquerque">LinkedIn do criador</a>
      </footer>
    </div>
  );
}

export default App;
