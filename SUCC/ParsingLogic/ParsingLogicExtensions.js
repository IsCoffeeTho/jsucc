class ParsingLogicExtensions
{
	static Quote(s="")
	/* => */ { return `"${s || ""}"`; }

	static IsQuoted(s="")
	/* => */ { return (s || "").length > 0 && s[0] == '"' && s[s.length-1] == '"'; }

	static UnQuote(s="")
	{
		if (!this.IsQuoted(s)) return (s || "");
		return s.slice(1, -1);
	}

	static GetIndentationLevel(s="")
	/* => */ { return ((s || "").match(/ /g).length); }

	static AddSpaces(s="", count=0)
	/* => */ { return `${s || ""}${' '.repeat(count || 0)}`; }

	static SplitIntoLines(s="")
	/* => */ { return (s || "").replace(/\r\n/g, `\n`).split('\n'); } // jimmy really dislikes windows line endings

	static ContainsNewLines(s="")
	/* => */ { return (s || "").match(/\n/g).length > 0; }

	static IsWhiteSpace(s="")
	/* => */ { return (s || "").trim().length == 0; }


	// rest of the functions in og repo are C# specific

	// here is a cookie instead 🍪
}

module.exports = ParsingLogicExtensions;