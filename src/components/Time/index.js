import './Time.css'
import Colaborador from '../Colaborador/'
// não tem nenhum comportamento, só recebe props e exibe na tela - DUMB COMPONENT (componente visual)
const Time = (props) => {
    return (
        //renderização condicional
        props.colaboradores.length > 0 &&
        <section className='time' style={{backgroundColor: props.background}}>
            <input  type='color' className='input-cor' onChange={evento => props.mudarCor(evento.target.value, props.nome)} />
            <h3 style={{borderBottom: '4px solid' + props.corCard}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imgUrl={colaborador.imagem} time={colaborador.time} cor={props.corCard} aoDeletar={props.aoDeletar}/>
                })}
            </div>
        </section>
    )
}

export default Time