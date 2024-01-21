import Image from "next/image";
import logo from '../../public/imagens/logo.png'
import lupa from '../../public/imagens/lupa.png'

export function Cabecalho({pesquisarTarefas}) {


    return (
        <>
        <div className="cabecalhoContainer">

            <div className="logo">
            <Image src={logo} width={35} alt="logo"/>
            <p>CoreNotes</p>
            </div>

            <div className="inputContainer">
            <input type="text" placeholder="Pesquisar notas" onChange={pesquisarTarefas}/>
            <Image src={lupa} width={20} className="lupa" alt="icone lupa"/>
            </div>

        </div>
        </>
    )
}