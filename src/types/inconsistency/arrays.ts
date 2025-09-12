class ExampleClass {
    private readonly id: string;
    constructor(id: string) {
        this.id = id;
    }
    public printMessage(): void {
        console.log(`ExampleClass(${this.id}) says hello!`);
    }
}

// Create sparse array
const arr: Array<ExampleClass> = new Array(5)
arr[0] = new ExampleClass("1");
console.log(arr);

// Access elements without directly using the index
for (const obj of arr) {
    obj.printMessage();
}