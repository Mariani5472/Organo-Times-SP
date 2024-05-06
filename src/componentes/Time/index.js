import Jogador from '../Jogador'
import './Time.css'

const Time = (props) => {
    const corSecundaria = { backgroundColor: props.corSecundaria }
    const corPrimaria = { color: props.corPrimaria }
    return (

        (props.jogadores.length > 0) ? <section className='time' style={corSecundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador =>
                    <Jogador
                        nome={jogador.nome}
                        posicao={jogador.posicao}
                        imagem={jogador.imagem}
                    />)}
            </div>
        </section>
            : ''
    )
}

export default Time