/**
 * A `BoundedJoinSemilattice` must satisfy the following laws in addition to `JoinSemilattice` laws:
 *
 * - `a ∨ 0 <-> a`
 *
 * @since 2.0.0
 */
import { JoinSemilattice } from './JoinSemilattice.ts'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category type classes
 * @since 2.0.0
 */
export interface BoundedJoinSemilattice<A> extends JoinSemilattice<A> {
  readonly zero: A
}
