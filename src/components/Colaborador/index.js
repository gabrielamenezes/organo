import { AiFillCloseCircle } from 'react-icons/ai';
import './Colaborador.css'
const Colaborador = ({cor, colaborador, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(colaborador.id)} />
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>

            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador