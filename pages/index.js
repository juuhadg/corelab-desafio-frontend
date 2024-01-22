import { Cabecalho } from '@/components/Cabecalho/Cabecalho'
import { Tarefa } from '@/components/Tarefa/Tarefa'
import { useState,useEffect } from 'react'
import { obterTarefas } from '@/functions/obterTarefas'
import { CriarTarefa } from '@/components/CriarTarefa/CriarTarefa'

export default function Home() {

const [listaDeTarefas,setListaDeTarefas] = useState([])
const [tarefasFiltradas,setTarefasFiltradas] = useState([])

async function carregarTarefas() {
  const tarefas = await obterTarefas()

  setListaDeTarefas(tarefas);
  setTarefasFiltradas(tarefas)

}

  useEffect(()=>{
    carregarTarefas()
  },[])

  function pesquisarTarefas(e) {
    setTarefasFiltradas(listaDeTarefas.filter(tarefa=> tarefa.titulo.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  function trocarDeCategoria(id) {
    let copiaDasTarefas = [...tarefasFiltradas]
      const tarefaATrocar = copiaDasTarefas.find(tarefa=> tarefa._id == id)
      tarefaATrocar.favorito = !tarefaATrocar.favorito
      setTarefasFiltradas(copiaDasTarefas)
  }

  function deletarTarefa(id) {
    let copiaDasTarefas = [...tarefasFiltradas]
    copiaDasTarefas = copiaDasTarefas.filter(tarefa => tarefa._id !== id);
    setTarefasFiltradas(copiaDasTarefas)
  }

  return (
    <>
    <Cabecalho pesquisarTarefas={pesquisarTarefas}/>
    <CriarTarefa atualizarLista={carregarTarefas}/>
    <div className='favoritasContainer'>
      <h2 className='subtitulo'>Favoritas</h2>
     <div>
     {tarefasFiltradas.filter(tarefa=>tarefa.favorito == true).map(tarefa => (
          <Tarefa tituloInicial={tarefa.titulo} conteudoInicial={tarefa.conteudo} favoritoInicial={tarefa.favorito} corInicial={tarefa.cor} key={tarefa._id} id={tarefa._id} trocarDeCategoria={trocarDeCategoria} deletarTarefa={deletarTarefa}/>
      ))}
     </div>

    </div>

    <div className='tarefasContainer'>
      <h2 className='subtitulo'>Outras</h2>
     <div>
     {tarefasFiltradas.filter(tarefa=> tarefa.favorito == false).map(tarefa => (
          <Tarefa tituloInicial={tarefa.titulo} conteudoInicial={tarefa.conteudo} favoritoInicial={tarefa.favorito} corInicial={tarefa.cor} key={tarefa._id} id={tarefa._id} trocarDeCategoria={trocarDeCategoria} deletarTarefa={deletarTarefa}/>
      ))}
     </div>
    </div>
    </>
  )
}
