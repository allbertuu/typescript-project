import './App.css';

function App() {

  type Spaceship = {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  }

  const deltaStation: Spaceship[] = [{
    name: 'The First One',
    pilot: 'Alberto, The Creator',
    crewLimit: 0,
    crew: [],
    inMission: true
  }];

  function checkInputs(name: string, pilot: string) {
    if (name === '' || pilot === '') {
      alert('Não entendi alguma das informações que você me deu, piloto. Irei repetir. 👨🏼‍✈️');
      saveSpaceship();
    }
  }

  function crewLimitInteractivity(spaceship: Spaceship) {
    if (spaceship.crewLimit < 0) {
      alert(`Não brinque comigo, ${spaceship.pilot}. Não estou de brincadeira aqui 👨🏼‍✈️`);
      spaceship.crewLimit = Number(prompt(`Insira CORRETAMENTE o número máximo de tripulantes que podem embarcar nesta nave, ${spaceship.pilot}. 👨🏼‍✈️`));
    } else if (spaceship.crewLimit === 0) {
      alert('Irá sozinho? Interessante. Eu também me considero um lobo solitário hahaha, 👨🏼‍✈️');
    }
  }

  function saveSpaceship() {
    const name = String(prompt('Como irá chamar essa nave 🚀, piloto?')).trim();
    const pilot = String(prompt('Qual o seu nome? 👨🏼‍✈️')).trim();
    let crewLimit = Number(prompt(`Insira o número máximo de tripulantes que podem embarcar nesta nave, ${pilot}. 👨🏼‍✈️`));

    checkInputs(name, pilot);

    const spaceship = {
      name,
      pilot,
      crewLimit,
      crew: [],
      inMission: false
    }

    crewLimitInteractivity(spaceship);

    verifySpaceship(spaceship, 'no');
  }

  function continueMission(spaceship: Spaceship) {
    const isAlone = Number(prompt('Tudo certo, piloto. Você deseja levar mais alguém com você? 👨🏼‍✈️\n\n1 - Sim ✅\n2 - Não ❌'));

    // Verificar se o piloto irá acompanhado
    if (isAlone === 1) {  // Sim
      if (spaceship.crew.length === spaceship.crewLimit) { // limite da tripulação alcançado
        alert('Lamento, piloto. Mas a tripulação já está cheia. 👨🏼‍✈️');
      }
      else { // pode entrar na tripulação
        const crewMember = String(prompt('Certo. Quem? 👨🏼‍✈️')).trim();
        spaceship.crew.push(crewMember);
        while (spaceship.crew.length < spaceship.crewLimit) { // enquanto ainda há espaço na tripulação, adiciona-o
          const input = Number(prompt('Mais alguém? 👨🏼‍✈️\n\n1 - Sim ✅\n2 - Não ❌'));
          if (input === 1) {
            const crewMember = String(prompt('Certo. Mais quem? 👨🏼‍✈️')).trim();
            spaceship.crew.push(crewMember);
          }
          else {
            break;
          }
        }
        alert('A espaçonave já está lotada, piloto. Vamos logo. 👨🏼‍✈️');
      }
      startMission(spaceship);
    }

    else { // Não, irá sozinho
      startMission(spaceship);
    }
    spaceship.inMission = true;
  }

  function verifySpaceshipIsInMission(spaceship: Spaceship) {
    if (spaceship.inMission) { // Sim
      alert('Lamento, piloto. Esta nave já está em missão. ⚠');
      newMission();
    }
    else { // Não
      alert('Excelente! Esta nave está totalmente livre, piloto. 👨🏼‍✈️✅');
      continueMission(spaceship);
    }
  }

  function findSpaceship(targetSpaceship: Spaceship):boolean {
    // recebe um objeto
    // loop por cada objeto do deltaStation (array de objetos), verificando cada nome de cada um se é igual ao objeto recebido
    // retorna sim ou não se achou um match
    let found = false;

    deltaStation.forEach((spaceship) => {
      spaceship.name === targetSpaceship.name ? found = true : found = false;
    })

    return found;
  }

  function verifySpaceshipIsAlreadyInDeltaStation(spaceship: Spaceship) {
    if (findSpaceship(spaceship)) { // Sim
      alert('Essa nave já existe, piloto. Mas, vou ser bonzinho.\nIrei verificar se ela está livre para você. 👨🏼‍✈️')
      verifySpaceshipIsInMission(spaceship);
    } else { // Não
      deltaStation.push(spaceship);
      continueMission(spaceship);
    }
  }

  function verifySpaceship(spaceship: Spaceship, isUserChoseAnExistingSpaceship: 'yes' | 'no' | 'maybe') {
    if (isUserChoseAnExistingSpaceship === 'yes') {
      alert(`Um momento, ${spaceship.pilot}. Iremos verificar a disponibilidade da nave. 👨🏼‍✈️`);
      verifySpaceshipIsInMission(spaceship);
    } 
    else {
      alert(`Um momento, ${spaceship.pilot}. Vou verificar os dados...`);
      verifySpaceshipIsAlreadyInDeltaStation(spaceship);
    }
  }

  function startMission(spaceship: Spaceship) {
    alert(`Tudo certo, ${spaceship.pilot} 👨🏼‍✈️. \nPreparando a decolagem da ${spaceship.name}, ajustando os sistemas...\n\n3...\n2...\n1...`);
    alert('Decolagem efetuada com sucesso! 🚀\nMeus parabéns, piloto! 👨🏼‍✈️🎉');
  }

  function newMission() {
    const isReady = Number(prompt('Você deseja uma nova nave espacial? 👨🏼‍✈️\n\n1 - Sim ✅\n2 - Não ❌'));

    if (isReady === 1) {
      saveSpaceship();

    } else if (isReady === 2) {
      const input = Number(prompt('Então você deseja uma nave existente aqui na estação. Correto, piloto? 👨🏼‍✈️\n\n1 - Sim ✅\n2 - Não ❌'));
      if (input === 1) {
        if (deltaStation.length === 0) { // estação de naves vazia
          alert('Opa, lamento mas não há naves na estação, piloto. 👨🏼‍✈️');
          newMission();
        }
        else { // estação com naves
          const chosenSpaceship = Number(prompt(`Aqui estão todas as naves da estação, piloto. Escolha uma (digite o número) 🔢:\n${deltaStation.map((spaceship, index) => (
            `\n${index + 1} - ${spaceship.name}`
          ))
            }`));
          const spaceship = deltaStation[chosenSpaceship - 1];
          verifySpaceship(spaceship, 'yes');
        }
      } else { // rejeitou todas as opções para iniciar uma missão
        alert('É difícil achar seu caminho, é verdade. Mas espero que o encontre, piloto. 👨🏼‍✈️')
      }
    }

    else { // outro valor além de Sim ou Não na pergunta inicial
      alert('Não entendi, piloto. Irei repetir. 👨🏼‍✈️');
      newMission();
    }
  }

  function start() {
    alert('Olá! Bom te ver aqui, piloto. 👨🏼‍✈️');
    newMission();
  }

  return (
    <div className='container'>
      <h1>Bem-vindo, piloto 👨🏼‍✈️</h1>
      <button onClick={start}>Iniciar!</button>
    </div>
  );
}

export default App;
