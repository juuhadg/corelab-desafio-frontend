import Image from "next/image";
import logo from '../../public/imagens/logo.png'
import lupa from '../../public/imagens/lupa.png'

export function Cabecalho() {
    return (
        <>
        <div className="cabecalhoContainer">

            <div className="logo">
            <Image src={logo} width={35}/>
            <p>CoreNotes</p>
            </div>

            <div className="inputContainer">
            <input type="text" placeholder="Pesquisar notas"/>
            <Image src={lupa} width={20} className="lupa"/>
            </div>

        </div>
        </>
    )
}