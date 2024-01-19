import Image from "next/image";
import estrelaColorida from '../../public/imagens/estrelaColorida.png'
import estrelaVazia from '../../public/imagens/estrelaVazia.png'
import balde from '../../public/imagens/balde.svg'
import lapis from '../../public/imagens/lapis.svg'
import x from '../../public/imagens/x.svg'
import { obterCor } from "@/functions/obterCor";


export function Tarefa({titulo,conteudo,favorito,cor}) {

    function obterFavorito() {
        return favorito ? estrelaColorida : estrelaVazia
    }

    return(
        <>
        <div className="tarefaContainer" style={{ backgroundColor: obterCor(cor) }}>
            <div className="titulo">
                <h1>{titulo}</h1>
                <Image src={obterFavorito()} width={25} alt="icone estrela"/>
            </div>

            <div className="conteudo">
                <p>{conteudo}</p>
            </div>

            <div className="rodape">

            <section>
                
                <div> <Image src={lapis} width={15} alt="icone lapis"/> </div>
                
                
                <div> <Image src={balde} width={17} alt="icone balde de tinta"/> </div>
               
            </section>

            <Image src={x} width={13} alt="x de fechar"/>

            </div>

        </div>
        </>
    )
}