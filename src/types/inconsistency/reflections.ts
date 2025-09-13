class Retriever {
    public retrieveRandomNumber(): number {
        return Math.random();
    }
}

class ReflectionExampleClass {
    public retrieveValuesFromClass(clazz: object): void {
        const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(clazz));

        for (const key of keys) {
            const property = Object.getPrototypeOf(clazz)[key];
            if (typeof property === 'function') {
                property.call(clazz);
                console.log(`Called function "${key}"`);
            }
        }
    }
}

const myObj = new ReflectionExampleClass();
const myRetriever = new Retriever();

myObj.retrieveValuesFromClass(myRetriever);
