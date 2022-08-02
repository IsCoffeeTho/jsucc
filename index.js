class ExceptionalSUCC {
	constructor (reason=``) {
		if (reason)
			this.message = `SUCCException: ${reason}`
		else
			this.message = `SUCCException`
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

	static get whyNot()
	{
		return _utilConst.whyNot || "SUCCessful";
	}
}

class MemoryDataFile
{
	constructor (defaultFileText="")
	{
		this.data = defaultFileText;
		this.asJSON = {};
	}

	Set(namespace="", json={})
	{

	}

	Get(namespace="", defaultValue=null)
	{

	}
}

class DataFile
{
	constructor (path="", defaultFileText="")
	{
		path = Utilities.MakeValidPath(path);
		this.FilePath = path;
		this.data = defaultFileText;
		this.asJSON = {};
	}

	Set(namespace="", json={})
	{

	}

	Get(namespace="", defaultValue=null)
	{

	}
}

class Node {

	constructor (rawText="", file)
	{
		if (!file)
			throw new ExceptionalSUCC("Nodes must belong to a file.");
		this.File = file;
		this.FileStyleRef = file;
	}
}

module.exports = {
	MemoryDataFile,
	DataFile
}