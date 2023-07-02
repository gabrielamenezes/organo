import './Time.css'
// não tem nenhum comportamento, só recebe props e exibe na tela - DUMB COMPONENT (componente visual)
const Time = (props) => {
    return (
        <section className='time' style={{backgroundColor: props.background}}>
            <h3 style={{borderBottom: '4px solid' + props.corCard}}>{props.nome}</h3>
        </section>
    )
}

export default Time