const { MemoryDataFile } = require("../index");

class TestUtilities
{
	static PerformSaveLoadCheck(SAVED_VALUE)
	{
		const SAVED_VALUE_KEY = "test key";
		var file = new MemoryDataFile();

		file.Set(SAVED_VALUE_KEY, SAVED_VALUE);
		var loadedValue = file.Get(SAVED_VALUE_KEY);

		if (SAVED_VALUE == loadedValue)
			console.log(`Successfully saved and loaded ${SAVED_VALUE}`);
	}

	static PerformDataAccessCheck(validFileStructure_invalidData)
	{
		// Validate Data Access
		var file = new MemoryDataFile(validFileStructure_invalidData);
		
		var data = file.Get("data");
		if (data == null)
			return "";
		else
			return data;
	}


	static PerformSyntaxCheck(invalidFileStructure)
	{
		// Validate Syntax Checking
		try
		{
			var file = new MemoryDataFile(invalidFileStructure);
			return "";
		}
		catch (expectedException)
		{
			return expectedException;
		}
	}
}

module.exports = TestUtilities;