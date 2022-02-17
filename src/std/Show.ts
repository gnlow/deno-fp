/**
 * Utilities to accommodate `fp-ts/Show`.
 *
 * @since 0.12.0
 */

import { Show } from "../Show.ts"
import { flow, pipe } from "../function.ts"
import { Contravariant1 } from "../Contravariant.ts"

/**
 * Typeclass machinery.
 *
 * @since 0.12.0
 */
export const URI = "Show"

/**
 * Typeclass machinery.
 *
 * @since 0.12.0
 */
export type URI = typeof URI

declare module "../HKT.ts" {
  interface URItoKind<A> {
    readonly [URI]: Show<A>
  }
}

/**
 * Derive an instance for `Show<B>` by providing a function from `B` to `A` and
 * a `Show<A>` instance.
 *
 * @since 0.12.0
 */
export const contramap =
  <B, A>(f: (b: B) => A) =>
  (m: Show<A>): Show<B> => ({ show: flow(f, m.show) })

/**
 * Formal `Contravariant` instance for `Show` to be provided to higher-kinded
 * functions that require it.
 *
 * @since 0.12.0
 */
export const Contravariant: Contravariant1<URI> = {
  URI,
  contramap: (m, f) => pipe(m, contramap(f)),
}
