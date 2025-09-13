class ArraysExampleClass {
    public printMessage(): void {
        console.log("ExampleClass says hello!");
    }
}

// Create sparse array
const arr: Array<ArraysExampleClass> = new Array(5)
arr[0] = new ArraysExampleClass();

// Access elements without directly using the index
for (const obj of arr) {
    obj.printMessage();
}
