const fs = require("fs");
const ReadableWritableDataFile = require("./Abstractions/ReadableWritableDataFile");
const Utilities = require("../Utilities");

class DataFile extends ReadableWritableDataFile
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