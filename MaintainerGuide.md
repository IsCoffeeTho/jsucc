# jSUCC - Maintainer Guide
## Contents
- [**Discrepencies**](#discrepencies)
    - [**Index**](#index)
- [**Makefile**](#makefile)
    - [**Rules**](#rules)

## Discrepencies
This section describes the specific differences from C# to JS used in this repositiory:
### Index
- [System.IO file functins &rightarrow; fs functions](#systemio-file-functions-%E2%86%92-fs-functions)
- []()
 
___
### System.IO file functions &rightarrow; fs functions
**Issue:**
> **C# (C-Sharp)**
> ```cs
> using System.IO;
> ...
> File.WriteAllText(filepath, text);
> // 
> // 
> ```
`System.IO` is a C# based system namespace to suply functions such as file manipulation

**Solution:**
> **JS (JavaScript)**
> ```js
> const fs = require("fs");
> ...
> fs.writeFileSync(filepath, text);
> // fs.writeFile(filepath, text, callback) is safer 
> // not used as it requires a callback function 
> ```
`fs` is a node-module giving the file

___

### ReadableDataFile & MemoryReadOnlyDataFile _Recursive Depencies_
The class `MemoryReadOnlyDataFile` extends `ReadableDataFile`  
This alone is not an issue, but the constructor for `ReadableDataFile` in the original repository has a line that calls for the constructor of `MemoryReadOnlyDataFile`.
```cs
/*28*/    public ReadableDataFile(string defaultFileText = null)
/*29*/    {
/*30*/        if (defaultFileText == null)
/*31*/            DefaultFileCache = null; // prevent infinte recursion lol
/*32*/        else
/*33*/            DefaultFileCache = new MemoryReadOnlyDataFile(default, null);
/*34*/    }
```
This issue causes problems in js such as refusal of execution.


___

&nbsp;

## Makefile
### Rules
* `all` - Runs `test`.
* `test` - Runs the unit tests adapted from the original repo to fit JavaScript.
