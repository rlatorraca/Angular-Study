export function throttle(miliseconds = 1000) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        let timer = 0;

        descriptor.value = function(...args: any[]) {
            
            if(window.event){
                window.event.preventDefault();
            }
            clearInterval(timer);
            timer = setTimeout(() => originalMethod.apply(this, args), miliseconds);
        }

        return descriptor;
    }
}