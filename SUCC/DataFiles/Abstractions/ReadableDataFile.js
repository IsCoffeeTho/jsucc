const DataConverter = require("../../ParsingLogic/DataConverter");
const FileStyle = require("./../../FileStyle");

class FileCache {
	constructor (RawFileText="")
	{
		this.RAW = RawFileText || "";
	}

	Get (key="", defaultValue=any)
	{
		return this.GetNonGeneric(typeof(key), key, defaultValue || null);
	}

	GetNonGeneric(type=any, key="", defaultValue=any)
	{
		if (!this.KeyExists(key))
			return defaultValue || null;
		
		var node = this.TopLevelNodes[key];
		return NodeManager.GetNoteData(node, type);
	}

	GetAtPath (path=[""], defaultValue=any)
	{

	}

	GetAtPathNonGeneric(key=[""], )
	{

	}

}

class ReadableDataFile extends FileCache
{
	#__TopLevelLines;
	#__TopLevelNodes;

	// DefaultFileCache is provided from the constructor

	constructor(defaultFileText="")
	{
		super(defaultFileText || null);
		this.#__TopLevelLines = []; // List
		this.#__TopLevelNodes = {}; // Dictionary
		
		this.__Identifier = "";

		this.DefaultFileCache = new FileCache(defaultFileText);
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
	/*=>*/ { return DataConverter.DataStructureFromSucc(this.TopLevelLines, this); }

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
			throw new RangeException(`Path must have a length greater than 0`);

		if (!this.KeyExists(path[0]))
			return false;
		
		var topNode = this.TopLevelNodes[path[0]];
		for (var i = 1; i < path.length; i++)
		{
			if (topNode.ContainsChildNode(path[i]))
				topNode = topNode.GetChildAddressedByName(path[i]);
			else
				return false;
		}

		return true;
	}

	Get (key="", defaultValue=any)
	{
		return this.GetNonGeneric();
	}

	GetNonGeneric(key="", )
	{

	}

	GetAtPath (path=[""], defaultValue=any)
	{

	}

	GetAtPathNonGeneric(key=[""], )
	{

	}

	TryGet (key="")
	/* => */ { return this.Get(key, null); }
}

module.exports = ReadableDataFile;