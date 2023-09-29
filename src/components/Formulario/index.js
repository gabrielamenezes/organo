import './Formulario.css'
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'
import { useState } from 'react';
const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [favorito, setFavorito] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem,
            favorito, 
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    // A responsabilidade do formulário é de conter os campos do formulário
    return (
        <section className='formulario'>
            {/*ouvir o clique do botao não tem validação do form html, por isso ouvir o submit */}
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo  
                    labelNome="Nome" 
                    obrigatorio={true} 
                    placeHolder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    labelNome="Cargo"
                    placeHolder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} //faz o set da imagem com o valor que a gente recebeu no evento
                />
                <Campo 
                    labelNome="Imagem" 
                    placeHolder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor=>setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    labelNome="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor=>setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault();
                props.cadastrarTime({nome: nomeTime, cor: corTime})
                setNomeTime('')
                setCorTime('')
                }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo  
                    labelNome="Nome" 
                    obrigatorio 
                    placeHolder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo 
                    obrigatorio
                    type='color'
                    labelNome="Cor"
                    placeHolder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)} //faz o set da imagem com o valor que a gente recebeu no evento
                />
                <Botao>Criar um novo time</Botao>
            </form>
        </section>
    );
}

export default Formulario;