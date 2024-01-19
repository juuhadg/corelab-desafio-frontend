import { Cabecalho } from '@/components/Cabecalho/Cabecalho'
import { Tarefa } from '@/components/Tarefa/Tarefa'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Cabecalho/>
    <div className='favoritasContainer'>
      <h2 className='subtitulo'>Favoritas</h2>
     <div>
       <Tarefa/>
       <Tarefa/>
       <Tarefa/>
     </div>

    </div>

    <div className='tarefasContainer'>
      <h2 className='subtitulo'>Outras</h2>
     <div>
       <Tarefa/>
       <Tarefa/>
       <Tarefa/>
     </div>
    </div>
    </>
  )
}
