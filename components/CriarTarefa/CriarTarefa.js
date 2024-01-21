import Image from 'next/image';
import estrelaColorida from '../../public/imagens/estrelaColorida.png';
import estrelaVazia from '../../public/imagens/estrelaVazia.png';
import { useState,useRef } from 'react';
import TarefaService from '../../services/TarefaService'

export function CriarTarefa({atualizarLista}) {
    const [favorito,setFavorito] = useState(false)
    const [titulo,setTitulo] = useState('')
    const [conteudo,setConteudo] = useState('')
    const [rows,setRows] = useState(3)
    const textareaRef = useRef(null);


    const tarefaService = new TarefaService()

    async function aoEnviar(e) {
        if (e.keyCode === 13 && !e.shiftKey) {

            const tarefa = {
                titulo: titulo,
                conteudo: conteudo,
                favorito: favorito
            }

                try {
                    await tarefaService.adicionarTarefa(tarefa)
                    atualizarLista()
                    setTitulo('')
                    setConteudo('')
                    setFavorito(false)
                    
                    if (textareaRef.current) {
                        textareaRef.current.blur();
                      }

                } catch(e) {
                    console.log(e)
                }
            
          }
    }


    return (
        <>
        <div className="criarTarefaContainer">
        <div className="titulo">
            <input placeholder='Titulo' maxLength={23} onChange={(e)=>setTitulo(e.target.value)} value={titulo}></input>
            <button onClick={()=> setFavorito(!favorito)} >

            <Image src={favorito ? estrelaColorida : estrelaVazia} width={25} alt="icone estrela"/>
            </button>
        </div>

        <div className="conteudo">
            <textarea placeholder='Criar Nota...' rows={rows} onSelect={()=>setRows(15)} onBlur={()=>setRows(3)} onKeyDown={aoEnviar} onChange={(e)=>setConteudo(e.target.value)} value={conteudo} ref={textareaRef}></textarea>
        </div>
        </div>
        </>

    )
}
