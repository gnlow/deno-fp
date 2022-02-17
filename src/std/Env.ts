/**
 * Helpers for working with the environment in Node.js (located at
 * `process.env`).
 *
 * @since 0.9.0
 */

import { pipe, flow } from "../function.ts"
import { not } from "../Predicate.ts"
import * as IO from "../IO.ts"
type IO<A> = IO.IO<A>
import { Option } from "../Option.ts"
import * as O from "../Option.ts"
import * as S from "../string.ts"

/**
 * Attempt to get an environment parameter.
 *
 * @example
 * import { getParam } from 'fp-ts-std/Env';
 * import * as O from 'fp-ts/Option';
 *
 * assert.deepStrictEqual(getParam('example')(), O.none);
 * process.env['example'] = 'ciao';
 * assert.deepStrictEqual(getParam('example')(), O.some('ciao'));
 *
 * @since 0.9.0
 */
export const getParam =
  (k: string): IO<Option<string>> =>
  () =>
    pipe(process.env[k], O.fromNullable)

/**
 * Attempt to get an environment parameter, filtering out empty strings.
 *
 * @example
 * import { getParamNonEmpty } from 'fp-ts-std/Env';
 * import * as O from 'fp-ts/Option';
 *
 * assert.deepStrictEqual(getParamNonEmpty('missing')(), O.none);
 *
 * process.env['non-empty'] = 'ciao';
 * assert.deepStrictEqual(getParamNonEmpty('non-empty')(), O.some('ciao'));
 *
 * process.env['empty'] = '';
 * assert.deepStrictEqual(getParamNonEmpty('empty')(), O.none);
 *
 * @since 0.9.0
 */
export const getParamNonEmpty: (k: string) => IO<Option<string>> = flow(
  getParam,
  IO.map(O.filter(not(S.isEmpty))),
)
