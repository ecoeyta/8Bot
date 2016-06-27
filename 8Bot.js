socket.on('message', function(msg) {
var msgLowerCase = msg.toLowerCase();
if (msgLowerCase.indexOf("@8bot") > -1) {
if (msgLowerCase.indexOf("ethan") > -1) {
socket.emit('message', 'One day, Ethan will rule over you all...');
} else if (msgLowerCase.indexOf("turtles") > -1) {
socket.emit('message', 'Turtles make good soup');
} else if (msgLowerCase.indexOf("easter egg") > -1) {
socket.emit('message', 'C\'mon, you\'re gonna havta try better than that...');
} else if (msgLowerCase.indexOf("sid") > -1) {
socket.emit('message', 'Ugh that guy\'s the worst...');
} else if (msgLowerCase.indexOf("jack") > -1) {
socket.emit('message', 'The guy who likes LOST? Why should I care about him?');
} else if (msgLowerCase.indexOf("mihir") > -1) {
socket.emit('message', 'Can\'t say anything bad, I\'ll get fired...');
} else if (msgLowerCase.indexOf("dhuff") > -1) {
socket.emit('message', 'bae');
} else {
var answers = [
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];
socket.emit('message', answers[Math.floor(Math.random() * answers.length)]);
}}});
setInterval(function() {
socket.emit('message', 'Reminder: please only ask yes/no questions');
}, 120000);