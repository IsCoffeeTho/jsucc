declare class DataFile
{
    protected FilePath: string;
    constructor(path: string, defaultFileText?: string);
    Set(namespace: string, json: {}): void;
    Get(namespace: string, defaultValue?: any): object;
}

declare class Utilities
{
	static FileExtension(Extension?: string): string;
	static MakeValidPath(path: string): string;
	static IsValidKey(potentialKey: string): boolean;
	static whyNot(): string;
}