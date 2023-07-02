import './CampoTexto.css'
const CampoTexto = (props) => {

    //let valor = 'Gabriela Menezes'
    // Hook (gancho)-> manter o estado dentro de uma função

    //retorna o valor (leitura) e o setter
    //desestruturação do array

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    return (
        <div className="campo-texto">
            <label>{props.labelNome}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeHolder}/>
        </div>
    )
}

export default CampoTexto