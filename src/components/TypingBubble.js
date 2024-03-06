export const TypingBubble = (name) => {
  const typingBubble = document.createElement("div");
  typingBubble.textContent = `${name} esta escribiendo...`;
  typingBubble.id = "typing-bubble";
  return typingBubble;
};
