import TarefaService from "@/services/TarefaService";

export async function obterTarefas() {
    try {
        
        const tarefaService = new TarefaService()
    
        const listaDeTarefas = await tarefaService.obterTarefas()
        
    
        return listaDeTarefas.data
    } catch(error) {
        console.log(error)
    }

}