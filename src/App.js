import { useState } from 'react';
import Banner from './components/Banner'
import Time from './components/Time'
import Formulario from './components/Formulario'
import Rodape from './components/Rodape'
import {v4 as uuidv4} from 'uuid'

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
      
    },
    {
      id: uuidv4(),
      nome:'Front-End',
      cor: '#82CFFA',
      
    },
    {
      id: uuidv4(),
      nome:'Data Science',
      cor: '#A6D157',
      
    },
    {
      id: uuidv4(),
      nome:'Devops',
      cor: '#E06B69',
      
    },
    {
      id: uuidv4(),
      nome:'UX e Design',
      cor: '#DB6EBF',
      
    },
    {
      id: uuidv4(),
      nome:'Mobile',
      cor: '#FFBA05',
      
    },
    {
      id: uuidv4(),
      nome:'Inovação e Gestão',
      cor: '#FF8A29',
      
    },
  ])
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = {...colaborador, id: uuidv4()}
      setColaboradores([...colaboradores, novoColaborador]) // cria um novo array e coloca todos os colaboradores anteriores e adiciona o novo no final

  }

  function deletarColaborador(id) {
      console.log(colaboradores)
      setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
      
  }

  function mudarCorDoTime(cor,id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}] )
  }
  return (
    <div className="App">
      <Banner />
      {/* transforma o array de objetos time, em um array de strings para passar para o formulário através das props*/}
      <Formulario 
      cadastrarTime={cadastrarTime}
      times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => 
        <Time
          id = {time.id}
          key={time.id} 
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
