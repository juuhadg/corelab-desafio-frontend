import Image from "next/image";
import estrelaColorida from '../../public/imagens/estrelaColorida.png'
import estrelaVazia from '../../public/imagens/estrelaVazia.png'
import balde from '../../public/imagens/balde.svg'
import lapis from '../../public/imagens/lapis.svg'
import x from '../../public/imagens/x.svg'

const favorito = true
function obterFavorito() {
    return favorito ? estrelaColorida : estrelaVazia
}

export function Tarefa() {
    return(
        <>
        <div className="tarefaContainer">
            <div className="titulo">
                <h1>Titulo</h1>
                <Image src={obterFavorito()} width={25}/>
            </div>

            <div className="conteudo">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>

            <div className="rodape">

            <section>
                
                <div> <Image src={lapis} width={15}/> </div>
                
                
                <div> <Image src={balde} width={17}/> </div>
               
            </section>

            <Image src={x} width={13}/>

            </div>

        </div>
        </>
    )
}