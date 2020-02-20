// @flow

import {curry} from "flow-static-land/lib/Fun";

import type {Composite, Key} from "./types";

const mapObject = (mapper, object) =>
  Object.entries(object).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: mapper(value, key, object)
    }),
    {}
  );

/**
 * Maps values of the given composite using mapper
 */
const map = <C: Composite>(
  // flowlint-next-line deprecated-utility:off
  mapper: (value: any, key: Key, composite: $Supertype<C>) => any,
  composite: C
// flowlint-next-line deprecated-utility:off
): $Supertype<C> =>
  Array.isArray(composite)
    ? composite.map(mapper)
    : mapObject(mapper, composite);

/* $FlowFixMe This comment suppresses an error found when upgrading Flow to
 * v0.xx.0. To view the error, delete this comment and run Flow. */
export default curry(map);
