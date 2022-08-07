class ComplexType
{
	constructor (integer=0, text="string", boolean=false)
	{
		this.Integer = integer;
		this.String = text;
		this.Boolean = boolean;
	}

	Equals(obj=any)
	{
		if (obj == null)
			return false;
		
		if (typeof(obj) != typeof(this))
			return false;
		
		return (
			this.Integer == obj.Integer
			&& this.String == obj.String
			&& this.Boolean == obj.Boolean
		);
	}

	GetHashCode()
	/* => */ { return this.Integer; }

	ToString()
	/* => */ { return `${this.Integer} | ${this.String} | ${this.Boolean}`; }

	static PropertyShortcut()
	{
		return new ComplexType(0, "string", false);
	}

	static MethodShortcut(integer=0, text="string", boolean=false)
	{
		return new ComplexType(integer, text, boolean);
	}

	static Shortcut(shortcut="")
	{
		if (shortcut == "shortcut1")
			return new ComplexType(0, "you sly dog, you've got me monologuing!", false);

		throw new SyntaxError("invalid shortcut");
	}
}

module.exports = ComplexType;