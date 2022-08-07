const Node = require("./Nodes/Node");
const FileStyle = require("../FileStyle");
const Utilities = require("../Utilities");

class NodeManager
{
	static SetNodeData(node=Node, data=any, style=FileStyle)
	{
		if (data == null)
		{
			node.ClearChildren();
			node.Value = Utilities.NullIndicator;
			return ;
		}
		else if (node.Value == null)
		{
			node.Value = "";
		}

		// Skip constructor check
		//     This implementation will distill all constructed data to their JSON representation
		//     then to SUCC

		// comment from original repo
		// If we try to save a single-line string and find it currently saved as a multi-line string, we do NOT remove the multi-line formatting.
		// The reason for this is that there might be comments on the """s, and we want to preserver those comments
		// Also, this happens in only two cases:
		//     1. A string that is usually single-line is manually switched to a multi-line formatting by a user
		//     2. A string is saved as a multi-line, then later saved a single-line
		// In case 1, we don't want to 'annoy' the user; keep it how they like it.
		// In case 2, the string is probably going to be saved again later with multiple lines. It doesn't seem necessary to disrupt the structure
		// of the file for something temporary.
		dataAsString = String(data);
		if (dataAsString.match(/\n/g) || node.ChildNodes.length > 0)
			MultiLineStringSpecialCaseHandler.SetStringSpecialCase(node, dataAsString, style);

		else if (BaseTypeManager.IsBaseType(typeof(data)))
			this.SetBaseTypeNode(node, data, typeof(data), style);

		else if (CollectionTypeManager.IsSupportedType(typeof(data)))
			CollectionTypeManager.SetBaseTypeNode(node, data, typeof(data), style);

		else
			ComplexTypes.SetComplexNode(node, data, style);
	}

	static GetNodeData(node=Node, type="")
	{
		if (node.Value == Utilities.NullIndicator)
			return null;
		
		// Skip constructor check:
		//     Same reason as line 21
		
		if (node.Value == MultiLineStringNode.Terminator && node.ChildNodeType == NodeChildrenType.multiLineString && node.ChildLines.length > 0)
			return MultiLineStringSpecialCaseHandler.ParseSpecialStringCase(node);
		
		if (BaseTypeManager.IsBaseType(type))
			return this.RetrieveDataWithErrorChecking(() => {return this.RetrieveDataBaseTypeNode(node,)});
	}

	
}