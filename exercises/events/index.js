// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = { handlers: [] };
    }

    this.events[eventName].handlers.push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events.hasOwnProperty(eventName)) {
      this.events[eventName].handlers.forEach(handler => handler());
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.events.hasOwnProperty(eventName)) {
      const index = this.events[eventName].handlers.length;
      this.events[eventName].handlers.splice(0, index);
    }
  }
}

module.exports = Events;
