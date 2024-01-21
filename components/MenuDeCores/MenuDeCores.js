import { obterCor } from "@/functions/obterCor"
export function MenuDeCores({mudarCor}) {
    return (
        <div className="menuDeCoresContainer">
            <button style={{ backgroundColor: obterCor('azulClaro') }}onClick={()=>mudarCor('azulClaro')}></button>

            <button style={{ backgroundColor: obterCor('aqua') }} onClick={()=>mudarCor('aqua')}></button>

            <button style={{ backgroundColor: obterCor('amarelo') }} onClick={()=>mudarCor('amarelo')}></button>

            <button style={{ backgroundColor: obterCor('salmaoClaro') }} onClick={()=>mudarCor('salmaoClaro')}></button>

            <button style={{ backgroundColor: obterCor('salmao') }} onClick={()=>mudarCor('salmao')}></button>

            <button style={{ backgroundColor: obterCor('azul') }} onClick={()=>mudarCor('azul')}></button>

            <button style={{ backgroundColor: obterCor('rosa') }} onClick={()=>mudarCor('rosa')}></button>

            <button style={{ backgroundColor: obterCor('verde') }} onClick={()=>mudarCor('verde')}></button>

            <button style={{ backgroundColor: obterCor('laranja') }} onClick={()=>mudarCor('laranja')}></button>

            <button style={{ backgroundColor: obterCor('cinzaClaro') }} onClick={()=>mudarCor('cinzaClaro')}></button>

            <button style={{ backgroundColor: obterCor('cinza') }} onClick={()=>mudarCor('cinza')}></button>

            <button style={{ backgroundColor: obterCor('marrom') }} onClick={()=>mudarCor('marrom')}></button>
        </div>
    )
}