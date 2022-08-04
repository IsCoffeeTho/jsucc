const Line = require("./Line");

class Extensions {
	static GetLineNumber(targetNode=Node)
	{
		var lineCount = 0;
		var lineNumberOfTarget = -1;

		function recursivelyCount(lines=[""])
		{
			lines.forEach(line => {
				lineCount++;
	
				if (line == targetNode)
				{
					lineNumberOfTarget = lineCount;
					return ;
				}
	
				if (node = Node(line) && node.ChildLines.length > 0)
				{
					recursivelyCount(node.ChildLines)
					if (lineNumberOfTarget != -1)
						return ;
				}
			});
		}

		recursivelyCount(targetNode.File.TopLevelLines);

		return lineNumberOfTarget;
	}
}

module.exports = Extensions;