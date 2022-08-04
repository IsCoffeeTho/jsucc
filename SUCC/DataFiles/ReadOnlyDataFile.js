const fs = require("fs");
const ReadableDataFile = require("./Abstractions/ReadableDataFile");
const Utilities = require("../Utilities");

class ReadOnlyDataFile extends ReadableDataFile
{
	constructor (path="", defaultFileText="")
	{
		super(defaultFileText);
		path = Utilities.MakeValidPath(path);
		this.FilePath = path;

		if (!fs.existsSync(this.FilePath))
		{
			try
			{
				fs.mkdirSync(this.FilePath.replace(/[^\/]+$/g, ``));
			}
			catch (err)
			{
				if (err.code != 'EEXIST')
					throw err;
			}
			fs.writeFileSync(this.FilePath, defaultFileText || "");
		}

		this.ReloadAllData();
		this.SetupWatcher();
	}

	GetSavedText()
	{
		if (fs.existsSync(this.FilePath))
			return fs.readFileSync(this.FilePath).toString();
		return '';
	}

	SetupWatcher()
	{
		var info = fs.statSync(this.FilePath);
		console.log(info);
	}
}