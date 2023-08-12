import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'
import { useState } from 'react';
const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem, 
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
                <CampoTexto  
                    labelNome="Nome" 
                    obrigatorio={true} 
                    placeHolder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    labelNome="Cargo"
                    placeHolder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} //faz o set da imagem com o valor que a gente recebeu no evento
                />
                <CampoTexto 
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
        </section>
    );
}

export default Formulario;