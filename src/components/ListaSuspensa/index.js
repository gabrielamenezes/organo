import './ListaSuspensa.css';
const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.labelNome}</label>
            <select required={props.required} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa