const fs = require('fs');

let email;

try {
  const data = fs.readFileSync('./email.json', 'utf8');
  email = JSON.parse(data);
} catch (err) {
  console.error(err);
}

console.log(email)
let { subject, text } = email;
text = "Once more with feeling";
console.log(text)
console.log(subject)
let revisedEmail = { "subject": subject, "text": text}

try {
  fs.writeFileSync('./email.json', JSON.stringify(revisedEmail));
  console.log("It worked")
} catch (err) {
  console.error(err);
}