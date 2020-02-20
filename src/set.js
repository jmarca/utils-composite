// @flow

import {curry} from "flow-static-land/lib/Fun";

import shallowCopy from "./shallowCopy";

import type {Composite, Key} from "./types";

/**
 * Returns a new composite with the result of having updated the property with
 * the given key with the specified value.
 */
const set = (key: Key, value: mixed, composite: Composite): Composite => {
  const copy = shallowCopy(composite);

  copy[(key: any)] = value;

  return copy;
};

/* $FlowFixMe This comment suppresses an error found when upgrading Flow to
 * v0.xx.0. To view the error, delete this comment and run Flow. */
export default curry(set);
