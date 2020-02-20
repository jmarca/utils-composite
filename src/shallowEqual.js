// @flow

import {curry} from "flow-static-land/lib/Fun";

import haveSameProps from "./haveSameProps";

import type {Composite} from "./types";

// eslint-disable-next-line no-bitwise
const xor = (cond1, cond2) => Boolean(Number(cond1) ^ Number(cond2));

/**
 * Returns true if both composites are of the same type (Array or Object) and
 * their properties are strictly equal.
 */
const shallowEqual = (c1: Composite, c2: Composite): boolean =>
  c1 === c2 ||
  /* $FlowFixMe This comment suppresses an error found when upgrading Flow to
   * v0.xx.0. To view the error, delete this comment and run Flow. */
  (!xor(Array.isArray(c1), Array.isArray(c2)) && haveSameProps(c1, c2));

/* $FlowFixMe This comment suppresses an error found when upgrading Flow to
 * v0.xx.0. To view the error, delete this comment and run Flow. */
export default curry(shallowEqual);
