# Nucleus Security Engineering Internship Assessment

This repository contains my submission for the technical assessment. It includes:

- A code review of a webhook implementation
- A simple calculator web application

---

## Coding Challenge

### How far were you able to get?

I was able to build a working calculator with a basic frontend using HTML, CSS, and JS. First I implemented the four basic operations (+, -, *, /), and then I added some extra ones like root and exponentiation.

---

### What challenges did you encounter?

One small challenge was handling invalid inputs (for example, incomplete expressions), since using `eval()` can throw errors. I added a try/catch block to prevent the app from crashing.

Another thing was that I didn't know how to implement typing directly with the keyboard instead of only clicking buttons. For that, I used Cursor to guide me and help me implement that functionality.

---

### If you were given unlimited time, what would you add?

If I had more time, I would:

- Add more complex operations
- Improve the UI/UX (better layout and responsiveness)
- Add a graphing feature, something similar to Desmos
- Add a backend to store user activity and give the calculator some memory

---

## AI Usage

### What did the AI do well?

The AI was helpful in explaining security concepts, especially around hash comparison and why `==` is not safe. It also helped me confirm best practices like using parameterized queries.

It also helped me speed up repetitive coding. For example, I wrote a couple of calculator operations, and then I used Cursor with a prompt like:

"Following my format and style, write the same for multiplication, division, log, and exponent. Keep it simple and don't change anything else."

This helped me stay consistent and move faster.

For the frontend, I wanted something simple but functional, so to save time with CSS I asked Cursor to generate a basic design. My prompt was something like:

"I'm working on a calculator project. I want a simple UI with buttons, muted/simple colors, and a display screen for results. Include the main calculator buttons and allow typing input. Keep the design minimal, use simple colors and a clean font, and add a thin black border around the calculator. Don't add anything extra."

This helped me get a clean UI quickly without overcomplicating things.

Another way I used AI was to refine my writing. At the end, I pasted both my README and my code review and asked:

"Keeping my writing style and ideas, suggest small improvements for clarity, grammar, and formatting. Do not change my content unless necessary."

This helped me fix small mistakes and organize everything better.

---

### What did the AI do poorly?

Sometimes the responses were too detailed or more complex than needed for this task. I had to simplify the suggestions to match the scope of the exercise.

---

### How did you improve your prompts?

I made my prompts more specific and focused. Instead of asking general questions, I asked directly about webhook security or specific issues like hash comparison.

For the coding part, I was also more explicit about what I wanted and what I didn't want. I told Cursor to follow my style and keep things simple, which made the outputs much closer to what I was looking for.

---

## Additional Notes

Overall, I liked the experience. It was interesting to review the code and notice some issues immediately and others after thinking a bit more.

I used AI to support my reasoning, creativity, and productivity. I don't see AI as a tool to replace thinking, but more as something that helps me move faster, solve doubts, and be more efficient.