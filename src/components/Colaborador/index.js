import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css'
const Colaborador = ({cor, colaborador, aoDeletar, aoFavoritar}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(colaborador.id)} />
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>

            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito ? <AiFillHeart color='red' onClick={() => aoFavoritar(colaborador.id)}/> : <AiOutlineHeart onClick={() => aoFavoritar(colaborador.id)}/>}
                </div>
            </div>
        </div>
    )
}

export default Colaborador