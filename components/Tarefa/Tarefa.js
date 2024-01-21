import Image from "next/image";
import estrelaColorida from '../../public/imagens/estrelaColorida.png'
import estrelaVazia from '../../public/imagens/estrelaVazia.png'
import balde from '../../public/imagens/balde.svg'
import lapis from '../../public/imagens/lapis.svg'
import x from '../../public/imagens/x.svg'
import { obterCor } from "@/functions/obterCor";
import { useState } from "react";
import TarefaService from "@/services/TarefaService";
import { MenuDeCores } from "../MenuDeCores/MenuDeCores";



export function Tarefa({tituloInicial,conteudoInicial,favoritoInicial,corInicial,id,trocarDeCategoria,deletarTarefa}) {
    const [editavel, setEditavel] = useState(false);
    const [mudarCor, setMudarCor] = useState(false);
    const [conteudo,setConteudo] = useState(conteudoInicial)
    const [titulo,setTitulo] = useState(tituloInicial)
    const [favorito,setFavorito] = useState(favoritoInicial)
    const [cor,setCor] = useState(corInicial)

    const tarefaService = new TarefaService()

    function obterFavorito() {
        return favorito == true ? estrelaColorida : estrelaVazia
    }

   async function editarTarefa(e) {

    if (e.keyCode === 13 && !e.shiftKey) {

    const novaTarefa = {
        titulo : titulo,
        conteudo : conteudo
    }

        try{

            await tarefaService.editarTarefa(id,novaTarefa)
            setEditavel(false)
        } 
        catch(error) {
            console.log(error)
        }
    } }

    async function alterarFavorito() {
        setFavorito(!favorito)
        try {
            await tarefaService.favoritarTarefa(id)
            trocarDeCategoria(id)
        } catch(error) {
            console.log(error)
        }
    }

    async function trocarCor(cor) {
        setCor(cor)
        console.log(cor)
        try {
            await tarefaService.alterarCor(id,{cor:cor})
            setMudarCor(false)
        } catch(error) {
            console.log(error)
        }
    }

    async function deletar() {
        try {
            await tarefaService.deletarTarefa(id)
            deletarTarefa(id)

        } catch(error) {
            console.log(error)
        }
    }



    return(
        <>
        <div className="tarefaContainer" style={{ backgroundColor: obterCor(cor) }}>
            <div className="titulo">
            {editavel ? (
                    <input value={titulo} onChange={(e)=>setTitulo(e.target.value)} placeholder="Titulo..." onKeyDown={editarTarefa} style={{ backgroundColor: obterCor(cor) }}></input>
                ):
                <h1>{titulo}</h1>
                }
                
                <Image src={obterFavorito()} width={25} alt="icone estrela" onClick={alterarFavorito}/>
            </div>

            <div className="conteudo">
                {editavel ? (
                    <input value={conteudo} onChange={(e)=>setConteudo(e.target.value)} placeholder="Conteudo..." onKeyDown={editarTarefa} style={{ backgroundColor: obterCor(cor) }}></input>
                ):
                <p>{conteudo}</p>
                }
                
            </div>

            <div className="rodape">

            <section>
                
                <div> <Image src={lapis} width={15} alt="icone lapis" onClick={()=>setEditavel(!editavel)} style={editavel &&{ backgroundColor: "#ffe3b3"}}/> </div>
                
                
                <div> <Image src={balde} width={17} alt="icone balde de tinta" onClick={()=>setMudarCor(!mudarCor)} style={mudarCor &&{ backgroundColor: "#ffe3b3"}}/> </div>
               
            </section>

            <Image src={x} width={13} alt="x de fechar" onClick={deletar}/>

            </div>
            

            {mudarCor && (<MenuDeCores mudarCor={trocarCor}/>)}
        </div>
        </>
    )
}