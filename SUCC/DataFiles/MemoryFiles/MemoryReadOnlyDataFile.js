const ReadableDataFile = require("../Abstractions/ReadableDataFile");
const ReadOnlyDataFile = require("../ReadOnlyDataFile");
const { Guid } = require("../../../System");

class MemoryReadOnlyDataFile extends ReadableDataFile
{
	#__MemoryTextData;

	constructor(rawFileText="", Identifier="", defaultFileText="")
	{
		super(defaultFileText || null);
		this.#__MemoryTextData = rawFileText || "";
		this.__Identifier = Identifier || `MemoryReadOnlyDataFile_${Guid.NewGuid()}`;
	}

	get MemoryTextData() { return this.#__MemoryTextData; }
	GetSavedText() { return this.#__MemoryTextData; }

	ConvertToFileOnDisk(path="", overwrite=true)
	{
		path = Utilities.MakeValidPath(path);
		if (!overwrite && fs.existsSync(path))
			return null;
		
		fs.writeFileSync(path, defaultFileText || "");
		return new ReadOnlyDataFile(path);
	}
}

module.exports = MemoryReadOnlyDataFile;