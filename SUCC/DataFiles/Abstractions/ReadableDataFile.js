const ArgumentException = require("../../Exceptions");

class RawNodes {
	constructor ()
	{

	}
}

class ReadableDataFile
{
	#__TopLevelLines;
	#__TopLevelNodes;

	// DefaultFileCache is provided from the constructor

	constructor(defaultFileText="")
	{
		this.#__TopLevelLines = []; // List
		this.#__TopLevelNodes = {}; // Dictionary
		
		this.__Identifier = "";

		this.DefaultFileCache = new RawNodes(defaultFileText);
		// no need to check for recursion from original repo
	}

	get TopLevelLines() { return this.#__TopLevelLines; }
	get TopLevelNodes() { return this.#__TopLevelNodes; }

	get Identifier() { return this.__Identifier; }
	
	toString() { return this.__Identifier; }

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
		var count = 0;
		for (line in this.TopLevelLines)
		{
			var node = new Node(line);
			if (node)
				keys[count++] = node.Key;
		}

		return keys;
	}

	get TopLevelKeys()
	/* => */ { return this.TopLevelNodes.Keys; }

	KeyExists(key="")
	/* => */ { return (this.TopLevelNodes.indexOf(key) >= 0); }

	KeyExistsAtPath(path=[""])
	{
		if (path.length < 1)
			throw new ArgumentException(`Path must have a length greater than 0`);
	}

	
}

module.exports = ReadableDataFile;