class ExceptionalSUCC {
	constructor(file, line, col)
	{
		this.file = file;
		this.line = line;
		this.col = col;
		
		this.format = "Exception at __FILE__";
	}

	toString()
	{
		return format.replace("__FILE__", `${this.file}: line:${this.line} col:${this.col}`);
	}
}

var _utilConst = {
	fileExtension : ".succ",
	whyNot: ""
};

class Utilities
{
	static FileExtension(Extension=_utilConst.fileExtension)
	{
		_utilConst.fileExtension = Extension;
		return _utilConst.fileExtension;
	}

	static MakeValidPath(path="")
	{
		if (!path.startsWith("/") || !path.match(/^[A-Z]:/g))
			path = `./${path}`;
		if (!path.endsWith(Utilities.FileExtension()))
			path = `${path}${Utilities.FileExtension()}`;
		return path;
	}

	static IsValidKey(potentialKey="")
	{
		_utilConst.whyNot = "";
		if (potentialKey == "")
			_utilConst.whyNot = "SUCC keys must contain at least one character";
		else if (potentialKey[0] == '-')
			_utilConst.whyNot = "SUCC keys may not begin with the character '-'";
		else if (potentialKey.match(/:/g))
			_utilConst.whyNot = "SUCC keys may not contain the character ':'";
		else if (potentialKey.match(/#/g))
			_utilConst.whyNot = "SUCC keys may not contain the character '#'";
		else if (potentialKey.match(/\n/g))
			_utilConst.whyNot = "SUCC keys cannot contain a newline";
		else if (potentialKey[0] == ' ' || potentialKey[potentialKey.length - 1] == ' ')
			_utilConst.whyNot = "SUCC keys may not start or end with a space";
		return (_utilConst.whyNot == "");
	}

	static whyNot()
	{
		return _utilConst.whyNot || "SUCCessful";
	}
}

class DataFile
{
	constructor (path="", defaultFileText="")
	{
		path = Utilities.MakeValidPath(path);
		this.FilePath = path;
		this.data = "";
		this.asJSON = {};
	}

	Set(namespace="", json={})
	{

	}

	Get(namespace="", defaultValue=null)
	{

	}
}

const ParsingLogic = {
	Node: class Node {

		constructor (rawText="", file)
		{
			if (!file)
				throw new ArgumentNullException("Nodes must belong to a file");
			this.File = file;
			this.FileStyleRef = file;
		}
	},
	DataConverter: class DataConverter {
		static CheckNewSiblingForErrors(child, newParent, dataFile, lineNumber)
		{
			var sibling = newParent.ChildNodes[0];

			// if there is a mismatch between the new node's indentation and its sibling's
			if (child.IndentationLevel != sibling.IndentationLevel)
				throw new InvalidFileStructureException(dataFile, lineNumber, "Line did not have the same indentation as its assumed sibling");


			// if there is a mismatch between the new node's type and its sibling's
			if (newParent.ChildNodeType == NodeChildrenType.key && !(typeof child == KeyNode)
				|| newParent.ChildNodeType == NodeChildrenType.list && !(typeof child == ListNode)
				|| newParent.ChildNodeType == NodeChildrenType.multiLineString
				|| newParent.ChildNodeType == NodeChildrenType.none)
				throw new InvalidFileStructureException(dataFile, lineNumber, `Line did not match the child type of its parent`);
		}

		static DataLineType = { none: 0, key: 1, list: 2 };
		static GetDataLineType(line="")
		{
			var trimmed = line.trim();
			if (trimmed.length == 0) return this.DataLineType.none;
			if (trimmed[0] == '#') return this.DataLineType.none;
			if (trimmed[0] == '-') return this.DataLineType.list;
			if (trimmed.match(/:/g)) return this.DataLineType.key;

			return this.DataLineType.none;
		}
	}
}

module.export = {
	DataFile,
	Utilities,
	ParsingLogic
}