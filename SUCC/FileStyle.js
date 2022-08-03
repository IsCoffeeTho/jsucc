const { ArgumentOutOfRangeException } = require("./Exception");

class FileStyle {
	constructor() {
		this.AlwaysQuotedString = false;
		this.AlwaysArrayDictionaries = false;
		this.BoolStyle = FileStyle.BoolStyle.true_false;
		this.EnumStyle = FileStyle.EnumStyle.name;
		this._IndentationInterval = 4;
		this._SpacesAfterColon = 1;
		this._SpacesAfterDash = 1;
	}

	static Default()
	{
		return new FileStyle();
	}

	get IndentationInterval () { return this._IndentationInterval; }
	set IndentationInterval (value=4)
	{
		if (value < 1)
			throw new ArgumentOutOfRangeException(`IndentationInterval must be at least 1. You tried to set it to ${value}`)
		else
			this._IndentationInterval = value;
	}

	get SpacesAfterColon () { return this._SpacesAfterColon; }
	set SpacesAfterColon (value=1)
	{
		if (value < 0)
			throw new ArgumentOutOfRangeException(`SpacesAfterColon must be at least 0. You tried to set it to ${value}`)
		else
			this._SpacesAfterColon = value;
	}

	get SpacesAfterDash () { return this._SpacesAfterDash; }
	set SpacesAfterDash (value=1)
	{
		if (value < 0)
			throw new ArgumentOutOfRangeException(`SpacesAfterDash must be at least 0. You tried to set it to ${value}`)
		else
			this._SpacesAfterDash = value;
	}

	static BoolStyle ={
		true_false: 0,
		on_off: 1,
		yes_no: 2,
		y_n: 3
	};

	static EnumStyle ={
		name: 0,
		number: 1,
	};
}

module.exports = FileStyle;