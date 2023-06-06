interface DA {
    readonly data: string[],
    size: number,
    initialCapacity: number,
    set(index: number, value: string): string,
    get(index: number): string,
    insert(index: number, value: string): string,
    delete(index: number): string[],
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
        this.size++;
        return this.data[index] = value;
    }

    get(index: number): string {
        return this.data[index];
    }

    insert(index: number, value: string): string {
        if (!this.data[index]) return this.set(index, value);

        for (let i = this.size - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i];
        }

        return this.set(index, value);
    }

    delete(index: number): string[] {
        if (!this.data[index]) return this.data;

        for (let i = index; i < this.size; i++) {
            this.data[i] = this.data[i + 1];
        }

        this.size--;
        this.data.length = this.data.length -1;

        return this.data;
    }
}

const da = new DynamicArray(2);
da.set(0, 'a');
da.set(1, 'c');
da.set(2, 'd');
da.insert(1, 'b');
da.delete(1);
console.log(da);

