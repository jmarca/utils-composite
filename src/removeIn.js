// @flow

import {curry} from "flow-static-land/lib/Fun";

import updateIn from "./updateIn";

import type {Composite, Path} from "./types";

/* $FlowFixMe This comment suppresses an error found when upgrading Flow to
 * v0.xx.0. To view the error, delete this comment and run Flow. */
const remove = () => updateIn.remove;

/**
 * Returns a new composite with the result of having removed the property
 * located at the given path.
 * 
 * (This does the same as calling **updateIn** with updater:
 * `() => updateIn.remove`)
 */
const removeIn = (path: Path, composite: Composite): Composite =>
  /* $FlowFixMe This comment suppresses an error found when upgrading Flow to
   * v0.xx.0. To view the error, delete this comment and run Flow. */
  updateIn(path, remove, composite);

/* $FlowFixMe This comment suppresses an error found when upgrading Flow to
 * v0.xx.0. To view the error, delete this comment and run Flow. */
export default curry(removeIn);
