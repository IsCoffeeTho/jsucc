const { MemoryDataFile } = require("../index");

class TestUtilities
{
	static PerformSaveLoadCheck(SAVED_VALUE)
	{
		const SAVED_VALUE_KEY = "test key";
		var file = new MemoryDataFile();

		file.Set(SAVED_VALUE_KEY, SAVED_VALUE);
		var loadedValue = file.Get(SAVED_VALUE_KEY);

		return `${loadedValue}`;
	}
}

module.exports = TestUtilities;