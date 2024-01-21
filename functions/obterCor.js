export function obterCor(cor) {
    let codigo =''

    switch(cor) {

        case 'branco': codigo = 'ffff'
        break;
        
        case 'azulClaro': codigo = '#bae2ff'
        break;

        case 'rosa': codigo = '#eca1ff'
        break;

        case 'aqua': codigo = '#b9ffdd'
        break;

        case 'verde': codigo = '#daff8b'
        break;

        case 'amarelo': codigo = '#ffe8ac'
        break;

        case 'laranja': codigo = '#ffa285'
        break;

        case 'salmaoClaro': codigo = '#ffcab9'
        break;

        case 'cinzaClaro': codigo = '#cdcdcd'
        break;

        case 'salmao': codigo = '#f99494'
        break;

        case 'cinza': codigo = '#979797'
        break;

        case 'azul': codigo = '#9dd5ff'
        break;

        case 'marrom': codigo = '#a99a7c'
        break;

        default : codigo = 'ffff'
        break;

    }

    return codigo
}