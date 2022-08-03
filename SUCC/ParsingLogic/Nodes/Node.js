const Line = require("./Line");

const NodeChildType = { none:0, list:1, key:2, multiLineString:3 };

class Node extends Line
{
	constructor (rawText="", file=ReadableDatafile)
	{
		super(rawText);
	}

	constructor (indentation=0, file=ReadableDatafile)
	{
		super();
	}
}

module.exports = Node;