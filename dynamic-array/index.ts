interface DA {
    readonly data: string[],
    size: number,
    initialCapacity: number,
    set(index: number, value: string): string,
    get(index: number): string
}
export class DynamicArray implements DA{
    public readonly data: string[];
    public size = 0;
    public initialCapacity: number;

    constructor(initialCapacity: number) {
        this.initialCapacity = initialCapacity;
        this.data = new Array(initialCapacity);
    }

    set(index: number, value: string): string {
        return this.data[index] = value;
    }

    get(index: number): string {
        return this.data[index];
    }
}

const da = new DynamicArray(2);
console.log(da);
