class Line
{
	constructor (rawText="")
	{
		this.RawText = rawText || "";
	}

	get IndentationLevel() { return this.RawText.match(/^ {0,}/g)[0].length; }
	set IndentationLevel(value)
	{
		if (value < 0) throw new RangeError(`Node indents must be at least 0. You tried to set it to ${value}`);

		var indent = this.IndentationLevel;
		if (value == indent) return;

		var diff = value - indent;
		if (diff > 0)
			this.RawText = `${' '.repeat(diff)}${this.RawText}`;
		else
			this.RawText = this.RawText.slice(diff);
	}
}

module.exports = Line;