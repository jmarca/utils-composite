// @flow

import {curry} from "flow-static-land/lib/Fun";

import type {Composite, Key} from "./types";

/**
 * Get property value of given key.
 */
const get = (key: Key, composite: Composite): any => composite[(key: any)];

/* $FlowFixMe This comment suppresses an error found when upgrading Flow to
 * v0.xx.0. To view the error, delete this comment and run Flow. */
export default curry(get);
