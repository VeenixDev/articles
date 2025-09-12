interface BaseInterface {
    // ...code here...
}

class InterfaceImpl implements BaseInterface {
    // ...code here...
}

class MyGenericExampleClass<T extends BaseInterface> {
    private readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    public runFunctions(): string {
        const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(this.value))

        for (const key of keys) {
            Object.getPrototypeOf(this.value)[key].call(this, key);
        }

        return `Successfully ran ${keys.length} functions.`
    }
}

const myObj = new MyGenericExampleClass(new InterfaceImpl());

console.log(myObj.runFunctions());

class TempClass {
    public fun(): void {
        const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(this))

        for (const key of keys) {
            Object.getPrototypeOf(this)[key].call(this, key);
        }

        console.log(`Successfully ran ${keys.length} functions.`)
    }
}