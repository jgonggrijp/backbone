// Backbone, in full
// -----------------

import extend from 'underscore/modules/extend.js';

import { Backbone } from './backbone.js';
import * as publicInterface from './index.js';
import { Events } from './index.js';

// Add all our public stuff to the `Backbone` object, partly for backwards
// compatibility with older "default only" module systems and partly to enable
// stateful customization, such as by overriding `Backbone.sync`.
// Also, allow the `Backbone` object to serve as a global event bus, for folks
// who want global "pubsub" in a convenient place.
export default extend(Backbone, publicInterface, Events);
