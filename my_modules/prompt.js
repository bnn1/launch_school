import readline from 'readline-sync';

export default function prompt(message) {
  // if a message is provided, prompt that message,
  // ask for an input and return user input
  // otherwise, ask for an input and return user input
  return message
    ? readline.question(`${message}\n==> `)
    : readline.question('==> ');
}
