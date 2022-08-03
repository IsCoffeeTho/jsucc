
class MemoryDataFile extends ReadableWritableDataFile
{
	#__MemoryTextData;

	constructor(rawFileText="", Identifier="", defaultFileText="")
	{
		super(defaultFileText || null);
		this.#__MemoryTextData = rawFileText || "";
		this.__Identifier = Identifier || `MemoryReadOnlyDataFile_${NewGuid()}`;
		this.ReloadAllData();
	}

	GetSavedText() { return this.#__MemoryTextData; }
	SetSavedText(text) { this.#__MemoryTextData = text; }

	ConvertToFileOnDisk(path="", overwrite=true)
	{
		path = Utilities.MakeValidPath(path);
		if (!overwrite && fs.existsSync(path))
			return null;
		
		fs.writeFileSync(path, defaultFileText || "");
		return new DataFile(path);
	}
}