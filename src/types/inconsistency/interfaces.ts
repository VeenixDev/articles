interface ExampleInterface {
    hello?: () => void;
}

function runAll(obj: ExampleInterface) {
    for (const key in obj) {
        if (!Object.hasOwn(obj, key)) continue;
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);

        if (!descriptor) continue;
        const value = descriptor?.value;

        if (value && typeof value === 'function') {
            value();
        }
    }
}

const options: { [key: string]: any } = {};
options['a'] = () => process.exit(1);
options['hello'] = () => console.log('Hello World!');

runAll(options);
