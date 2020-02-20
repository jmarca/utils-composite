// @flow

import {curry} from "flow-static-land/lib/Fun";

import get from "./get";
import getKeys from "./getKeys";
import hasKey from "./hasKey";

import type {Composite} from "./types";

/**
 * Returns true if both composites have the same props or false otherwise.
 */
const haveSameProps = (c1: Composite, c2: Composite): boolean => {
  const keys1 = getKeys(c1);

  return (
    keys1.length === getKeys(c2).length &&
    keys1.every(k1 => hasKey(k1, c2) && get(k1, c1) === get(k1, c2))
  );
};

/* $FlowFixMe This comment suppresses an error found when upgrading Flow to
 * v0.xx.0. To view the error, delete this comment and run Flow. */
export default curry(haveSameProps);
