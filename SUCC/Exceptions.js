const Utilities = require("./Utilities");

class InvalidFileStructure extends Error
{
	constructor(dataFile=ReadableDataFile, lineIndex=0, details="")
	{
		super (`Invalid file structure on line ${lineIndex + 1} of ${dataFile}: ${details}`);
		this.DataFile = dataFile;
		this.LineIndex = lineIndex;
		this.Details = details;
	}
}

class CannotRetrieveDataFromNodeException extends Error
{
	constructor(erroneousNode="", expectedDataType="")
	{
		super (
			`Invalid file data on line ${erroneousNode.GetLineNumber() || 1} of ${erroneousNode.File || `file${Utilities.FileExtension}`}. `
			+ `Expected data of type ${expectedDataType}, but couldn't interpret data as that type`
			+ (erroneousNode.ChildNodes.length > 0 ? ` (node has ${erroneousNode.ChildNodes.length} children)` : "")
			+ (!erroneousNode.Value == null ? `: ${erroneousNode.Value}` : "")
			+ `.`
		);

		this.ErroneousNode = erroneousNode;
		this.ExpectedDataType = expectedDataType;
	}
}

class ArgumentOutOfRangeException extends Error
{
	constructor(paramter="", details="")
	{
		super(`${parameter || "Index"} ${details || "was out of range. Must be non-negative and less than the size of the collection."}`);
	}
}

class ArgumentException extends Error
{
	constructor(details="")
	{
		super(details);
	}
}

module.exports = {
	InvalidFileStructure,
	ArgumentOutOfRangeException
};