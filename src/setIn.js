// @flow

import {curry} from "flow-static-land/lib/Fun";

import updateIn from "./updateIn";

import type {Composite, Path} from "./types";

/**
 * Returns a new composite with the result of having updated the property
 * located at the given path with the specified value.
 * 
 * (This does the same as calling **updateIn** with updater: `() => value`)
 */
const setIn = (path: Path, value: mixed, composite: Composite): Composite =>
  /* $FlowFixMe This comment suppresses an error found when upgrading Flow to
   * v0.xx.0. To view the error, delete this comment and run Flow. */
  updateIn(path, () => value, composite);

/* $FlowFixMe This comment suppresses an error found when upgrading Flow to
 * v0.xx.0. To view the error, delete this comment and run Flow. */
export default curry(setIn);
