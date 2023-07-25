import { AiFillCloseCircle } from 'react-icons/ai';
import './Colaborador.css'
const Colaborador = ({imgUrl, nome, cargo, cor, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar} />
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