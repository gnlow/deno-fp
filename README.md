# deno-fp-ts
Deno port of [fp-ts](https://github.com/gcanti/fp-ts)

## Usage
```ts
import { flow } from "https://denopkg.com/gnlow/deno-fp-ts/src/function.ts"
import { map, filter } from "https://denopkg.com/gnlow/deno-fp-ts/src/Array.ts"

const f = flow(
    filter((x: number) => x < 10),
    map((x: number) => x * 2),
)

console.log(f([3, 6, 7, 11, 25]))
```

## What's Difference?
1. I added extension(`.ts`) on filenames in `import` and `declare module`.
2. I added `import {} from '.HKT.ts'` on files where error occurs. (I don't know why it works..)
