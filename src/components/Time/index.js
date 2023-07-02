import './Time.css'
// não tem nenhum comportamento, só recebe props e exibe na tela - DUMB COMPONENT (componente visual)
const Time = (props) => {
    return (
        <section className='time'>
            <h3>{props.nome}</h3>
        </section>
    )
}

export default Time