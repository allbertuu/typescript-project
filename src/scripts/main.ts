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

function saveSpaceship() {
  /*
  ** Name interactivity
  */ 
  let name = prompt('Como irá chamar essa nave 🚀, piloto?');

  while (name === null || name === '') {
    alert('Não entendi, piloto. Irei repetir. 👨🏼‍✈️');
    name = prompt('Como irá chamar essa nave 🚀, piloto?');
  }

  while (name.length < 3) {
    alert(`Mínimo de 3 caracteres, piloto. 👨🏼‍✈️\nSó sigo as regras... ⚠`);
    name = prompt('Como irá chamar essa nave 🚀, piloto?');
    while (name === null || name === '') {
      alert('Não entendi, piloto. Irei repetir. 👨🏼‍✈️');
      name = prompt('Como irá chamar essa nave 🚀, piloto?');
    }
  }
  /*
  ** Pilot interactivity
  */ 
  let pilot = prompt('Qual o seu nome, piloto? 👨🏼‍✈️');
  
  while (pilot === null || pilot === '') {
    alert('Não entendi, piloto. Irei repetir. 👨🏼‍✈️');
    pilot = prompt('De novo...\nQual o seu nome, piloto? 👨🏼‍✈️');
  }

  while (pilot.length < 3) {
    alert(`Mínimo de 3 caracteres para o nome, piloto. 👨🏼‍✈️\nSem brincadeiras, por favor. 👨🏼‍✈️`);
    pilot = prompt('Lembre: mais que 3, okay?\nPode dizer novamente seu nome. 👨🏼‍✈️');
    while (pilot === null || pilot === '') {
      alert('Não entendi, piloto. Irei repetir. 👨🏼‍✈️');
      pilot = prompt('De novo...\nQual o seu nome, piloto? 👨🏼‍✈️');
    }
  }
  /*
  ** Crew limit interactivity
  */ 
  let crewLimit = Number(prompt(`Insira o número máximo de tripulantes que podem embarcar nesta nave, ${pilot}. 👨🏼‍✈️\nDigite números 🔢`));

  while (crewLimit < 0) {
    alert(`Não brinque comigo, ${pilot}. Não estou de brincadeira aqui 👨🏼‍✈️`);
    crewLimit = Number(prompt(`Insira CORRETAMENTE o número máximo de tripulantes que podem embarcar nesta nave, ${pilot}. 👨🏼‍✈️`));
  } 
  if (crewLimit === 0) {
    alert('Irá sozinho? Interessante. Eu também me considero um lobo solitário hahaha, 👨🏼‍✈️');
  }
  // Declare spaceship
  const spaceship:Spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false
  }
  // Verify spaceship
  verifySpaceship(spaceship, false);
}

function getSpaceshipOccupation(spaceship: Spaceship) {
  const thirdPartOfCrewLimit = Math.round(spaceship.crewLimit / 3);
  if (spaceship.crew.length < thirdPartOfCrewLimit) {
    return 'Not Enough';
  } else if (spaceship.crew.length > thirdPartOfCrewLimit && spaceship.crew.length < spaceship.crewLimit) {
    return 'Free';
  } else if (spaceship.crew.length === spaceship.crewLimit) {
    return 'Full';
  }
  else {
    return "Overcrowded";
  }
}

function continueMission(spaceship: Spaceship) {

  const spaceshipOccupation = getSpaceshipOccupation(spaceship);

  if (spaceshipOccupation === "Not Enough") {
    alert('A espaçonave precisa estar com um 1/3 do limite preenchido, piloto.\nPor favor adicione os novos tripulantes à na lista. 👨🏼‍✈️');
    const crewMember = prompt('Certo. Mas quem será? 👨🏼‍✈️', 4);
    spaceship.crew.push(crewMember);
    const missingCrew = spaceship.crewLimit - spaceship.crew.length;
    while (missingCrew !== 0) {
      alert(`Ainda faltam ${missingCrew} tripulante(s) para o limite mínimo de tripulantes na nave, piloto. 👨🏼‍✈️`);
      const crewMember = prompt('Mais quem? 👨🏼‍✈️', 4);
      spaceship.crew.push(crewMember);
    }
    continueMission(spaceship);

  } else if (spaceshipOccupation === "Free") {
    const answer = Number(prompt('A espaçonave alcançou o limite mínimo, e portanto há espaço livre, piloto.\nDeseja ir logo ou irá levar mais alguém? 👨🏼‍✈️\n\n1 - Vamos! Estou com pressa.\n2 - Oops! Esqueci de uma pessoa!'));
    // adicionar mais tripulantes OU iniciar missão
    if (answer === 1) {
      startMission(spaceship);
    }
    else if (answer === 2) {

    }
    else {
      alert('Não entendi, piloto. Irei repetir. 👨🏼‍✈️');
      continueMission(spaceship);
    }

  } else if (spaceshipOccupation === "Full") {
    alert('A espaçonave já está lotada, piloto. Vamos logo. 👨🏼‍✈️');
    startMission(spaceship);
  }

  else {
    alert('Isso não deveria acontecer... Reporte isso ao criador do game. 👨🏼‍✈️\n\nO LinkedIn dele está na página inicial! ❤');
    return;
  }

  const isAlone = Number(prompt('Tudo certo, piloto. Você deseja levar mais alguém com você? 👨🏼‍✈️\n\n1 - Sim ✅\n2 - Não ❌'));

  // Verificar se o piloto irá acompanhado
  // if (isAlone === 1) {  // Sim
  //   else { // pode entrar na tripulação
  //     const crewMember = String(prompt('Certo. Quem? 👨🏼‍✈️')).trim();
  //     spaceship.crew.push(crewMember);
  //     while (spaceship.crew.length < spaceship.crewLimit) { // enquanto ainda há espaço na tripulação, adiciona-o
  //       const answer = Number(prompt('Mais alguém? 👨🏼‍✈️\n\n1 - Sim ✅\n2 - Não ❌'));
  //       if (answer === 1) {
  //         const crewMember = String(prompt('Certo. Mais quem? 👨🏼‍✈️')).trim();
  //         spaceship.crew.push(crewMember);
  //       }
  //       else if (answer === 2) {
  //         break;
  //       }
  //       else {
  //         alert('Não entendi, piloto. Irei repetir. 👨🏼‍✈️');
  //       }
  //     }

  //   }
  //   startMission(spaceship);
  // }

  // else { // Não, irá sozinho
  //   startMission(spaceship);
  // }
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

function findSpaceship(targetSpaceship: Spaceship): boolean {
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

function verifySpaceship(spaceship: Spaceship, isUserChoseAnExistingSpaceship: boolean) {
  if (isUserChoseAnExistingSpaceship) {
    alert(`Um momento, ${spaceship.pilot}. Iremos verificar a disponibilidade da nave. 👨🏼‍✈️`);
    verifySpaceshipIsInMission(spaceship);
  }
  else {
    alert(`Um momento, ${spaceship.pilot}. Vou verificar os dados...`);
    verifySpaceshipIsAlreadyInDeltaStation(spaceship);
  }
}

function startMission(spaceship: Spaceship) {
  spaceship.inMission = true;
  alert(`Tudo certo, ${spaceship.pilot} 👨🏼‍✈️. \nPreparando a decolagem da ${spaceship.name}, ajustando os sistemas...\n\n3...\n2...\n1...`);
  alert('Decolagem efetuada com sucesso! 🚀\nMeus parabéns, piloto! 👨🏼‍✈️🎉');
}

function newMission() {
  const isReady = Number(prompt('Você deseja uma nova nave espacial? 👨🏼‍✈️\n\n1 - Sim ✅\n2 - Não ❌'));

  if (isReady === 1) {
    saveSpaceship();

  } else if (isReady === 2) {
    const answer = Number(prompt('Então você deseja uma nave existente aqui na estação. Correto, piloto? 👨🏼‍✈️\n\n1 - Sim ✅\n2 - Não ❌'));
    if (answer === 1) {
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
        verifySpaceship(spaceship, true);
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

export function start() {
  alert('Olá! Bom te ver aqui, piloto. 👨🏼‍✈️');
  newMission();
}