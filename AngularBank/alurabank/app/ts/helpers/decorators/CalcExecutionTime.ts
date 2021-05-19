export function CalcExecutionTime() {

    // Decorator
    //  - deve retornar outra Funcao
    //  - recebe um TARGET (instancia de onde o DECORATOR foi colocado/chamado)
    //  - recebe um PROPERTY / KEY ( pega o nome do METODO ond eo descorator esta posto)
    //  - recebe um DESCRIPTOR (retorna todas informacoes sobre o METODO que contem o decorator)
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value; // Pega o METODO em que o Decorator esta posicionado

        descriptor.value = function (...args: any[]) {

            // this => Objeto no qual o METODO esta sendo passado
            const retorno = originalMethod.apply(this, args);
            return retorno;
        }

        return descriptor;
    }
}