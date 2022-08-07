const ComplexType = require("./ComplexType");
const { MemoryDataFile, MemoryReadOnlyDataFile } = require("../index");

class ComplexTypeShortcutTests
{
	constructor ()
	{
		this.SAVED_VALUE_KEY = "test key";
	}

	ComplexTypeShortcut_Property_LoadedValueEqualsShortcutValue()
	{
		var SAVED_VALUE = ComplexType.PropertyShortcut;
		var file = new MemoryReadOnlyDataFile(`${this.SAVED_VALUE_KEY}:PropertyShortcut`);

		var loadedValue = file.Get(this.SAVED_VALUE_KEY, null);

		if (SAVED_VALUE == loadedValue)
			return "";
		else
			return `Value difference: "${loadedValue}" is not "${SAVED_VALUE}"`;
	}

	ComplexTypeShortcut_Constructor_LoadedValueEqualsShortcutValue()
	{
		var SAVED_VALUE = new ComplexType(0, "example", true);
		var file = new MemoryDataFile(`${this.SAVED_VALUE_KEY}:(0, "example", true)`);

		var loadedValue = file.Get(this.SAVED_VALUE_KEY);

		if (SAVED_VALUE == loadedValue)
			return "";
		else
			return `Value difference: "${loadedValue}" is not "${SAVED_VALUE}"`;
	}

	ComplexTypeShortcut_Method_LoadedValueEqualsShortcutValue()
	{
		var SAVED_VALUE = ComplexType.MethodShortcut(1, "test", false);
		var file = new MemoryDataFile(`${this.SAVED_VALUE_KEY}:MethodShortcut(1, "test", false)`);

		var loadedValue = file.Get(SAVED_VALUE_KEY);

		if (SAVED_VALUE == loadedValue)
			return "";
		else
			return `Value difference: "${loadedValue}" is not "${SAVED_VALUE}"`;
	}

	ComplexTypeShortcut_Custom_LoadedValueEqualsShortcutValue()
	{
		var SAVED_VALUE = ComplexType.Shortcut("shortcut1");
		var file = new MemoryDataFile(`${this.SAVED_VALUE_KEY}:shortcut1`);

		var loadedValue = file.Get(this.SAVED_VALUE_KEY);

		if (SAVED_VALUE == loadedValue)
			return "";
		else
			return `Value difference: "${loadedValue}" is not "${SAVED_VALUE}"`;
	}
}