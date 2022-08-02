export class MemoryDataFile {
    constructor(defaultFileText?: string);
    data: string;
    asJSON: {};
    Set(namespace?: string, json?: {}): void;
    Get(namespace?: string, defaultValue?: any): void;
}
export class DataFile {
    constructor(path?: string, defaultFileText?: string);
    FilePath: string;
    data: string;
    asJSON: {};
    Set(namespace?: string, json?: {}): void;
    Get(namespace?: string, defaultValue?: any): void;
}