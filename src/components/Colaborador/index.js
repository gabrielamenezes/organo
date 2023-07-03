import './Colaborador.css'
const Colaborador = ({imgUrl, nome, cargo, cor}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={imgUrl} alt={nome} />
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador