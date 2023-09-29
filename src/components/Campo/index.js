import './Campo.css'
const Campo = ({labelNome, placeHolder, valor, aoAlterado, obrigatorio = false, type='text'}) => {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);  //recebe o set do campo
    }
    return (
        <div className={`campo campo-${type}`}>
            <label>{labelNome}</label>
            <input type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeHolder}/>
        </div>
    )
}

export default Campo