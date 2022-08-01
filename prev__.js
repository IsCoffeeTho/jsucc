const DEPTH_LIMIT = 10;
const TAB_SIZE = 4;

class SUCC
{
	constructor (json)
	{
		this.succ = SUCC.toSUCC(json);
	}

	static toSUCC(json={}, depth=DEPTH_LIMIT)
	{
		if (depth == 0)
			return ` 0 # depth exceeded\n`;
		var str = "";
		var keys = Object.keys(json);

		for (var i = 0; i < keys.length; i++)
		{
			var key = keys[i];
			var value = json[keys[i]];
			var asArray = Array.isArray(json);
			if (asArray)
				str += "-"
			else
				str += key + ":"
			if (typeof value == "object")
			{
				if (Array.isArray(value) && value.length == 3
					&& (typeof value[0] == "number")
					&& (typeof value[1] == "number")
					&& (typeof value[2] == "number"))
				str += ` (${value[0]}, ${value[1]}, ${value[2]})\n`;
				else
					str += `\n\t${SUCC.toSUCC(value, depth-1).slice(0,-1).replace(/\n/g, `\n\t`)}\n`;
			}
			else if (typeof value == "string")
			{
				if (value.match(/[ ]/g))
					str += ` "${value}"\n`;
				else
					str += ` ${value}\n`;
			}
			else
				str += ` ${value}\n`;
		}
		return (str.replace(/\t/g, `${' '.repeat(TAB_SIZE)}`));
	}

	static toJSON(SUCCs="", depth=DEPTH_LIMIT)
	{
		if (depth == 0)
			return `"Depth Reached"`;

		var obj = {};

		SUCCs = SUCCs.replace(/#[^\n]*\n/g, `\n`).replace(/(\s)+\n/g, `\n`);

		SUCCs = SUCCs.replace(/(^|\n)(\w+):(((\n {4}-)+ {0,}(\n {8}[^\n]+)+)+)/g, (m, n0, g1, g2) => {

			// List of Objects

			var key = g1;
			var value = g2;

			var nvalue = [];
			
			
			value.match(/(^|\n) {4}-((\n {8}[^\n]+)+)/g).forEach((v) => {
				nvalue.push(SUCC.toJSON(v.slice(6).replace(/\n {8}/g, "\n"), depth-1));
			});

			obj[key] = nvalue;
			
			return "";
		});
		SUCCs = SUCCs.replace(/(^|\n)(\w+): {0,}([^\n]+)/g, (m, n0, g1, g2) => {

			// Standalone Values

			var key = g1;
			var value = g2;
			var vint = parseInt(value);
			if (vint == value)
				obj[key] = vint;
			// else if (value.)
			// {

			// }
			else
				obj[key] = `${value.replace(/(^\"|\"$)/g, "")}`;
			return "";

		});
		SUCCs = SUCCs.replace(/((^|\n)(\w+):((\n{1,} {4}[^\n]*)+))/g, (m, n0, n1, g1, g2, n2) => {

			// Nested Objects

			var key = g1;
			var value = g2.slice(5).replace(/\n {4}/g, "\n");
			value = SUCC.toJSON(value, depth-1);
			obj[key] = value;
			return "";
		});

		if (SUCCs)
		{
			console.error(`Couldn't complete formatting of SUCC\nFound: "${SUCCs}"`);
		}

		return obj;
	}

	updateSUCC()
	{

	}

	updateJSON()
	{
		
	}
}