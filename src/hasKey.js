// @flow

import {curry} from "flow-static-land/lib/Fun";

import type {Composite, Key} from "./types";

/**
 * Returns true if key is included in composite's own enumerable ones,
 * or false otherwise.
 */
const hasKey = (key: Key, composite: Composite): boolean =>
  Object.prototype.hasOwnProperty.call(composite, key);

/* $FlowFixMe This comment suppresses an error found when upgrading Flow to
 * v0.xx.0. To view the error, delete this comment and run Flow. */
export default curry(hasKey);
