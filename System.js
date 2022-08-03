const Guid = {
	NewGuid : () =>
	{
		var hex = () => {"0123456789abcdef"[Math.floor(Math.random()*16)]};

		var loop = (iter, func) => {for (var i = 0; i < iter; i++) {func(i)} };

		var string = "";
		loop(8, () => { string += hex(); });
		string += "-";
		loop(4, () => { string += hex(); });
		string += "-";
		loop(4, () => { string += hex(); });
		string += "-";
		loop(4, () => { string += hex(); });
		string += "-";
		loop(12, () => { string += hex(); });
	}
};

class StringBuilder {
	constructor()
	{
		this._str = "";
	}

	Append(value="")
	{
		this._str += value || "";
	}

	ToString()
	{
		return this._str;
	}
}

module.exports = {
	Guid,
	Text: {
		StringBuilder
	}
};