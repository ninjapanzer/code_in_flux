define(function(require){
  var AppDispatcher = require('scripts/dispatcher');
  var EventEmitter = require('scripts/events').EventEmitter;
  var assign = require('scripts/object-assign');

  var _store = {};

  var Store = assign({}, EventEmitter.prototype, {/* Store Methods */}

  // Register to handle all updates
  AppDispatcher.register(function(payload) {
    var action = payload.action;
    /* Methods to call Store Methods */
  }
  Store.emitChange();
});