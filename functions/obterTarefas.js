import ProblemaService from "@/services/TarefaService";


export async function obterTarefas() {
    try {
        
        const problemaService = new ProblemaService()
    
        const listaDeTarefas = await problemaService.obterTarefas()
        
    
        return listaDeTarefas.data
    } catch(error) {
        console.log(error)
    }

}