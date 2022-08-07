const { DataFile, MemoryDataFile } = require("../index");
const tUtil = require("./TestUtilities");

function traceTitle(title) {
	console.log(`= ${title} ${'='.repeat(80-(title.length+3))}\n`);
}

function traceClean() {
	console.log(``);
}

function diagnose(title, testFunc, expected)
{
	var res = testFunc();
	if (res != expected)
	{
		if (expected == "")
			console.log(`${title.replace(/ /g, ``)}: FAIL KO :(\n>> Found: ${res}\n` + (res.stack ? `\n${res.stack}\n` : ''));
		else
			console.log(`${title.replace(/ /g, ``)}: FAIL KO :(\n>> Expected: ${expected}\n>> Found: ${res}\n` + (res.stack ? `\n${res.stack}\n` : ''));
		return false;
	}
	console.log(`${title}: PASS OK :)`);
	return true;
}

function beginTest()
{
	var pass = true;
	traceTitle("Testing Module");
	
	pass &&= diagnose("", () => {
		return ``;
	}, "");

	traceClean();
	traceTitle((pass ? `PASS OK :)`: `FAIL KO :(`));
}

beginTest();