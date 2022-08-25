// import
import { foo, kode, bar } from "foo";

// rename
import { foo as theFooFunc } from "foo";

theFooFunc();

export function bar() {..}
export bar = 42;
export function baz() {..}

import * as foo from "foo";

foo.bar();
foo.x;
foo.baz();
