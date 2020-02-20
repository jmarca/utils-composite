// @flow

import {curry} from "flow-static-land/lib/Fun";

import type {Composite, Key} from "./types";

// $FlowFixMe: flow does not understand the following construction
const objectRemove = (key, {[key]: removed, ...rest}) => rest;

/**
 * Returns a new Array with the result of having removed the specified amount
 * (count) of elements at the given index.
 */
const arrayRemove = <Element>(
  index: number,
  count: number,
  array: Array<Element>
): Array<Element> => [...array.slice(0, index), ...array.slice(index + count)];


/**
 * Returns a new composite with the result of having removed the property with
 * the given key.
 */
const remove = (key: Key, composite: Composite): Composite =>
  Array.isArray(composite)
    ? arrayRemove((key: any), 1, composite)
    : objectRemove(key, composite);

/* $FlowFixMe This comment suppresses an error found when upgrading Flow to
 * v0.xx.0. To view the error, delete this comment and run Flow. */
export default curry(remove);
