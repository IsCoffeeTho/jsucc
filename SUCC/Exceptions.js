

class InvalidFileStructure extends Error
{
	constructor(dataFile=ReadableDataFile, lineIndex=0, details="")
	{
		super (details, dataFile, lineIndex);
	}
}

module.exports = {

};