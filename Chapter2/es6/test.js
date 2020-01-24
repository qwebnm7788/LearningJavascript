'use strict';

const sentences = [
    { subject: 'Javascript', verb: 'is', object: 'great'},
    { subject: 'Elephant', verb: 'are', object: 'large'},
];

function say({ subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
    say(s);
}