const MemoryReadOnlyDataFile = require("../MemoryFiles/MemoryReadOnlyDataFile");

class ReadableDataFile
{
	#__TopLevelLines; get TopLevelLines() { return this.#__TopLevelLines; }
	#__TopLevelNodes; get TopLevelNodes() { return this.#__TopLevelNodes; }

	get Identifier() { return this.__Identifier; }
	
	toString() { return this.__Identifier; }

	// DefaultFileCache is provided from the constructor

	constructor(defaultFileText="")
	{
		this.#__TopLevelLines = []; // List
		this.#__TopLevelNodes = {}; // Dictionary
		
		this.__Identifier = "";

		if (defaultFileText == null)
			this.DefaultFileCache = null;
		else
			this.DefaultFileCache = new MemoryReadOnlyDataFile(defaultFileText, null);
	}

	Style = FileStyle.Default();

	ReloadAllData()
	{
		var succ = this.GetSavedText();
		var data = DataConverter.DataStructureFromSucc(succ, this);

		this.#__TopLevelLines = data.topLevelLines;
		this.#__TopLevelNodes = data.topLevelNodes;
	}

	GetRawText()
	/*=>*/ { return DataConverter.DataStructureFromSucc(this.#__TopLevelLines, this); }

	GetRawLines()
	/*=>*/ { return this.GetRawText().split("\n"); }

	GetTopLevelKeysInOrder()
	{
		var keys = [];
		for (line in this.TopLevelLines)
		{
			console.log(line);
		}
	}
}

module.exports = ReadableDataFile;