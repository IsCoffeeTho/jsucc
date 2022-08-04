const ReadableDataFile = require("./ReadableDataFile");

class ReadableWritableDataFile extends ReadableDataFile
{
	constructor(defaultFileText="")
	{
		super(defaultFileText);
	}
}

module.exports = ReadableWritableDataFile;