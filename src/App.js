import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome: 'Palmeiras',
      corPrimaria: '#FFF',
      corSecundaria: '#006437'
    },
    {
      nome: 'Corinthians',
      corPrimaria: '#F9F9F9',
      corSecundaria: '#232b2b'
    },
    {
      nome: 'São Paulo',
      corPrimaria: '#000',
      corSecundaria: '#FE0000'
    },
    {
      nome: 'Santos',
      corPrimaria: '#232b2b',
      corSecundaria: '#F9F9F9'
    },
    {
      nome: 'Novorizontino',
      corPrimaria: '#000000',
      corSecundaria: '#F6E32F'
    },
    {
      nome: 'RB Bragantino',
      corPrimaria: '#D2003C',
      corSecundaria: '#001D46'
    },
  ];

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)} />
      {times.map(time =>
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
        />)}
      <Rodape />
    </div>
  );
}

export default App;
