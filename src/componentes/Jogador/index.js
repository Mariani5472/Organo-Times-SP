import './Jogador.css'

const Jogador = ({ nome, imagem, posicao, corDeFundo }) => {
    return (
        <div className='jogador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{posicao}</h5>
            </div>
        </div>
    )
}

export default Jogador