/**
 * Rec model events
 */

'use strict';

import {EventEmitter} from 'events';
import Rec from './rec.model';
var RecEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RecEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Rec.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RecEvents.emit(event + ':' + doc._id, doc);
    RecEvents.emit(event, doc);
  }
}

export default RecEvents;
