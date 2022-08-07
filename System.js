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

class StringBuilder { // Equivelant to a char** in C, allows the ability to pass a string by reference instead of value
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

function constructor(type="")
{
	if (type.replace(/[A-Z][a-z]_/g, "").length > 0)
		throw new Error(`System.constructor(type): type has to be a contructor a valid name.`);

	return eval(`new ${type}()`);
}

module.exports = {
	Guid,
	Text: {
		StringBuilder
	},
	constructor
};