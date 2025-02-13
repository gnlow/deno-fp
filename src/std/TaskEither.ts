/**
 * Utility functions to accommodate `fp-ts/TaskEither`.
 *
 * @since 0.12.0
 */

import { TaskEither } from "../TaskEither.ts"
import * as T from "../Task.ts"
import { execute as executeT } from "./Task.ts"
import {
  unsafeUnwrap as unsafeUnwrapE,
  unsafeUnwrapLeft as unsafeUnwrapLeftE,
} from "./Either.ts"
import { flow } from "../function.ts"

/**
 * Unwrap the promise from within a `TaskEither`, rejecting with the inner
 * value of `Left` if `Left`.
 *
 * @example
 * import { unsafeUnwrap } from 'fp-ts-std/TaskEither';
 * import * as TE from 'fp-ts/TaskEither';
 *
 * unsafeUnwrap(TE.right(5)).then((x) => {
 *   assert.strictEqual(x, 5);
 * });
 *
 * @since 0.12.0
 */
export const unsafeUnwrap: <A>(x: TaskEither<unknown, A>) => Promise<A> = flow(
  T.map(unsafeUnwrapE),
  executeT,
)

/**
 * Unwrap the promise from within a `TaskEither`, throwing the inner value of
 * `Right` if `Right`.
 *
 * @example
 * import { unsafeUnwrapLeft } from 'fp-ts-std/TaskEither';
 * import * as TE from 'fp-ts/TaskEither';
 *
 * unsafeUnwrapLeft(TE.left(5)).then((x) => {
 *   assert.strictEqual(x, 5);
 * });
 *
 * @since 0.12.0
 */

export const unsafeUnwrapLeft: <E>(x: TaskEither<E, unknown>) => Promise<E> =
  flow(T.map(unsafeUnwrapLeftE), executeT)
