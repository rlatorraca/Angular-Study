export function CalcExecutionTime() {

    // Decorator
    //  - deve retornar outra Funcao
    //  - recebe um TARGET (instancia de onde o DECORATOR foi colocado/chamado)
    //  - recebe um PROPERTY / KEY ( pega o nome do METODO ond eo descorator esta posto)
    //  - recebe um DESCRIPTOR (retorna todas informacoes sobre o METODO que contem o decorator)
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value; // Pega o METODO em que o Decorator esta posicionado

        descriptor.value = function (...args: any[]) {

            console.log('-----------------------')
            console.log(`Method Parameters ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();

            // this => Objeto no qual o METODO esta sendo passado
            const result = originalMethod.apply(this, args);

            console.log(`Method Result : ${JSON.stringify(result)}`)
            const t2 = performance.now();
            console.log(`${propertyKey} spent ${t2 - t1} ms`);
            console.log('-----------------------')

            return result;
        }

        return descriptor;
    }
}