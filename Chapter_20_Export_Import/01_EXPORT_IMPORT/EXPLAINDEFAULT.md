# Default vs Named Exports in JavaScript Modules

This file explains how `default` and non-default (named) exports work in ES modules.

## Default Export

A default export is a single value or function that a module exports as its main export.

Example:
```js
// logger.js
export default function log(pageName) {
  return `Logging ${pageName}`;
}
```

Importing a default export:
```js
import log from "../logger.js";
let r1 = log("loginPage");
```

Notes:
- The importing module can choose any name for the default export.
- There is only one default export per module.
- Default export is useful for the primary behavior of a module.

## Named Exports (Non-default Exports)

Named exports allow a module to export multiple values by their names.

Example:
```js
// logger.js
export function log2(pageName) {
  return `Secondary log for ${pageName}`;
}
```

Importing named exports:
```js
import { log2 } from "../logger.js";
let r2 = log2("HomePage");
```

Notes:
- Named exports must be imported with the same name inside curly braces.
- You can export multiple named values from a single module.
- Named exports are good for utility functions or multiple helpers in one file.

## Combining Default and Named Exports

A module can export one default and multiple named exports together.

Example:
```js
import log, { log2 } from "../logger.js";
```

In this import:
- `log` is the default export.
- `log2` is a named export.

## Aliasing Named Exports

You can rename named imports using `as` when importing.

Example:
```js
import { log2 as secondaryLog } from "../logger.js";
```

This makes `secondaryLog` available in the importing file.

## Aliasing Default Exports

Default exports can also be renamed on import, because the importing module decides the local name.

Example:
```js
import myLogger from "../logger.js";
```

Here `myLogger` refers to the default export from `logger.js`.

## Summary

- `export default` exports one default value/function per module.
- Named exports use `export { name }` or `export function name() {}`.
- Default imports use a local name without braces.
- Named imports require braces and the exported name.
- You can combine default and named exports in the same module.
- Aliasing helps avoid name conflicts and makes imports more readable.
