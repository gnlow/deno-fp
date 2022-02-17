/**
 * Utilities to accommodate `fp-ts/Random`.
 *
 * @since 0.12.0
 */

import * as IO from "../IO.ts"
type IO<A> = IO.IO<A>
import { flow, pipe } from "../function.ts"
import { NonEmptyArray } from "../NonEmptyArray.ts"
import * as RA from "../ReadonlyArray.ts"
import { extractAt } from "./Array.ts"
import * as Rand from "../Random.ts"
import { decrement } from "./Number.ts"
import { unsafeUnwrap } from "./Option.ts"

/**
 * Like `fp-ts/Array::randomElem`, but returns the remainder of the array as
 * well.
 *
 * @example
 * import { randomExtract } from 'fp-ts-std/Random';
 *
 * assert.deepStrictEqual(randomExtract(['x'])(), ['x', []]);
 *
 * @since 0.12.0
 */
export const randomExtract = <A>(xs: NonEmptyArray<A>): IO<[A, Array<A>]> =>
  pipe(
    Rand.randomInt(0, pipe(xs, RA.size, decrement)),
    IO.map(flow(i => extractAt(i)(xs), unsafeUnwrap)),
  )
