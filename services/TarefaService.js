import HttpRequest from "./HttpRequest";

export default class TarefaService extends HttpRequest{
    
    async adicionarTarefa(dados) {
        return this.post('/tarefas', dados)
    }

    async obterTarefas() {
        return this.get('/tarefas')
    }

    async editarTarefa(id,dados) {
        return this.put(`/tarefas?id=${id}`, dados)
    }

    async deletarTarefa(id) {
        return this.delete(`/tarefas?id=${id}`)
    }

    async favoritarTarefa(id) {
        return this.put(`/tarefas/favoritar?id=${id}`)
    }

    async alterarCor(id,cor){
        return this.put(`/tarefas/cor?id=${id}`, cor)
    }

}