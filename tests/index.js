const { DataFile, MemoryDataFile } = require("../index");
const tUtil = require("./TestUtilities");

function traceTitle(title) {
	console.log(`= ${title} ${'='.repeat(80-(title.length+3))}\n`);
}

function traceClean() {
	console.log(``);
}

function traceEnd() {
	console.log(`${'='.repeat(80)}`);
}

function diagnose(title, testFunc, expected)
{
	var res = testFunc();
	if (res != expected)
	{
		if (expected == "")
			console.log(`${title.replace(/ /g, ``)}: FAIL KO :(\n>> Found: ${res}\n`);
		else
			console.log(`${title.replace(/ /g, ``)}: FAIL KO :(\n>> Expected: ${expected}\n>> Found: ${res}\n`);
	}
	else
		console.log(`${title}: PASS OK :)`);
}

function beginTest()
{
	traceTitle("Invalid Syntax");

	diagnose("InvalidKey", () => {
		return tUtil.PerformSyntaxCheck("this line doesn't have a colon to indicate key/value");
	}, "");

	diagnose("DuplicateKeys", () => {
		return tUtil.PerformSyntaxCheck("key: value\nkey: value2");
	}, "");

	traceClean();

	traceEnd();
}

beginTest();