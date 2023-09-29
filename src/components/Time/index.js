import './Time.css'
import Colaborador from '../Colaborador/'
import hexToRgba from 'hex-to-rgba';
// não tem nenhum comportamento, só recebe props e exibe na tela - DUMB COMPONENT (componente visual)
const Time = ({cor, nome, colaboradores, mudarCor,aoDeletar, id}) => {
    const handleDelete = (colaboradorId, indice) => {
        aoDeletar(colaboradorId, indice);
    };
    return (
        //renderização condicional
        colaboradores.length > 0 &&
        <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)',backgroundColor: hexToRgba(cor, '0.6')}}>
            {/*executando o mudar cor que foi recebido via props */}
            <input value={cor} type='color' className='input-cor' onChange={evento => mudarCor(evento.target.value, id)} />
            <h3 style={{borderBottom: '4px solid' + cor}}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador,indice) => {
                    return ( 
                    <Colaborador 
                        key={indice} 
                        colaborador={colaborador}
                        cor={cor} 
                        aoDeletar={() => handleDelete(colaborador.id, indice)}
                        />
                        )
                })}
            </div>
        </section>
    )
}

export default Time