import { Cabecalho } from '@/components/Cabecalho/Cabecalho'
import { Tarefa } from '@/components/Tarefa/Tarefa'
import { useState,useEffect } from 'react'
import { obterTarefas } from '@/functions/obterTarefas'

export default function Home() {

const [listaDeTarefas,setListaDeTarefas] = useState([])
const [listaDeFavoritos,setListaDeFavoritos] = useState([])

  useEffect(()=>{
  
    async function carregarTarefas() {
      const tarefas = await obterTarefas()

      const favoritos = tarefas.filter(tarefa => tarefa.favorito === true);
      const outrasTarefas = tarefas.filter(tarefa => tarefa.favorito === false);

      setListaDeTarefas(outrasTarefas);
      setListaDeFavoritos(favoritos);
    }

    carregarTarefas()
    console.log(listaDeFavoritos)
    console.log(listaDeTarefas)

  },[])


  return (
    <>
    <Cabecalho/>
    <div className='favoritasContainer'>
      <h2 className='subtitulo'>Favoritas</h2>
     <div>
     {listaDeFavoritos.map(tarefa => (
          <Tarefa titulo={tarefa.titulo} conteudo={tarefa.conteudo} favorito={tarefa.favorito} cor={tarefa.cor} key={tarefa._id}/>
      ))}
     </div>

    </div>

    <div className='tarefasContainer'>
      <h2 className='subtitulo'>Outras</h2>
     <div>
     {listaDeTarefas.map(tarefa => (
          <Tarefa titulo={tarefa.titulo} conteudo={tarefa.conteudo} favorito={tarefa.favorito} cor={tarefa.cor} key={tarefa._id}/>
      ))}
     </div>
    </div>
    </>
  )
}
