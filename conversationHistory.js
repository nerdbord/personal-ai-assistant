// This module will manage the conversation history

class ConversationHistory {
  constructor() {
    this.history = {};
  }

  addMessage(userId, message) {
    if (!this.history[userId]) {
      this.history[userId] = [];
    }
    this.history[userId].push(message);
  }

  getHistory(userId) {
    return this.history[userId] || [];
  }
}

module.exports = new ConversationHistory();
