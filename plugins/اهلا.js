
const foundKeywords = ['هلا', 'مرحبا'];

function autoReply(message) {
  const lowerCaseMessage = message.toLowerCase();
  
  for (let keyword of foundKeywords) {
    if (lowerCaseMessage.includes(keyword)) {
      return "اهلا";
    }
  }

  return "لا أفهم ما تقول!";
}

// Example usage:
const receivedMessage = "هلا";
const reply = autoReply(receivedMessage);
console.log(reply); // Output: "اهلا"
