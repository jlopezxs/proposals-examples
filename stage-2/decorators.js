function log(level = 'info') {
    return function decorator(target, key, descriptor) {
       // target => MyClass
       // key => method
       // descriptor => function itself
       return {
           ...descriptor,
           value: (...args) => {
            console[level](target, key, '=>', ...args);
            return descriptor.value(...args);
           }
       };
    }
 }

class MyClass {
    @log()
    method(value) {
        return value * value;
    }
}

const myClass = new MyClass;
myClass.method(1);
