const { StringBuilder } = require("../../System")

class DataConverter {
	static GetLineTextIncludingChildLines(line="")
	/* => */ { return DataConverter.SuccFromDataStructure([line]); }

	static SuccFromDataStructure(lines=[Line])
	{
		var RecursivelyBuildLines = (lines=[""], builder=StringBuilder) => {
			lines.forEach(line => {
				builder.Append(line + "\n");
				if (line)
					RecursivelyBuildLines();
			});
		};

		var FinishSuccBuilder = (builder=StringBuilder) => {
			builder.toString().trimEnd()
		};
	}

	static DataStructureFromSucc(lines=[""], dataFile=ReadableDataFile)
	{
		
	}
}

module.exports = DataConverter;