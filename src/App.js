import { useState } from 'react';
import Banner from './components/Banner'
import Time from './components/Time'
import Formulario from './components/Formulario'
import Rodape from './components/Rodape'

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
      
    },
    {
      nome:'Front-End',
      cor: '#82CFFA',
      
    },
    {
      nome:'Data Science',
      cor: '#A6D157',
      
    },
    {
      nome:'Devops',
      cor: '#E06B69',
      
    },
    {
      nome:'UX e Design',
      cor: '#DB6EBF',
      
    },
    {
      nome:'Mobile',
      cor: '#FFBA05',
      
    },
    {
      nome:'Inovação e Gestão',
      cor: '#FF8A29',
      
    },
  ])

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
      setColaboradores([...colaboradores, colaborador]) // cria um novo array e coloca todos os colaboradores anteriores e adiciona o novo no final
  }

  function deletarColaborador() {
    console.log('colaborador deletado')
  }

  function mudarCorDoTime(cor,nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor
      }
      return time;
    }))
  }
  return (
    <div className="App">
      <Banner />
      {/* transforma o array de objetos time, em um array de strings para passar para o formulário através das props*/}
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => 
        <Time 
          key={time.nome} 
          nome={time.nome} 
          cor={time.cor}
          aoDeletar={deletarColaborador}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          mudarCor={mudarCorDoTime}
        />
      )}
      <Rodape/>
    </div>
  );
}

export default App;
