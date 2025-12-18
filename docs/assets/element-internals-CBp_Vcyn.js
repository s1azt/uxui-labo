/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const a=Symbol("internals"),t=Symbol("privateInternals");function i(e){var n;class s extends e{get[(n=a,n)](){return this[t]||(this[t]=this.attachInternals()),this[t]}}return s}export{a as i,i as m};
