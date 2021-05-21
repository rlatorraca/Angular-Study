export function myClassDecorator() {

    return function (constructor: any) {

        // guarda o constructor original, pois iremos definir um novo
        const original = constructor;

        // cria um novo constructor. Como ele pode receber nenhum ou mais parâmetros, usamos ...args: any[]
        const novo: any = function (...args: any[]): {} {
            console.log("Building a instance with NEW: " + original.name);
            // cria a instância da classe quando for chamado 
            return <any>new original(...args);
        }

        // importante! O prototype do novo constructor deve ser o mesmo do original
        novo.prototype = original.prototype;

        // retorna o novo constructor
        return novo;
    }
}