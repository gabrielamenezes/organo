import './CampoTexto.css'
const CampoTexto = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);  //recebe o set do campo
    }
    return (
        <div className="campo-texto">
            <label>{props.labelNome}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeHolder}/>
        </div>
    )
}

export default CampoTexto