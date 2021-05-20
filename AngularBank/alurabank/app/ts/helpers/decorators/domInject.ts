export function domInject(selector: string) {

    //  Criando nosso próprio DOM Injector e Lazy loading
    return function (target: any, key: string) {

        let element: JQuery;

        const getter = function () {

            // cHeca se ja pegou o elemento do DOM
            if (!element) {
                console.log(`Searching  ${selector} to inject in ${key}`);
                element = $(selector);
            }

            return element;
        }

        // Cria a funcao GETTER para recupersr os dados
        Object.defineProperty(target, key, {
            get: getter
        });
    }
}