const inquirer = require('inquirer');
const chalk = require('chalk');

/*---constants---*/
const player = {
	name: '',
	score: 0,
	stage: 0
};

const c = {
	red: chalk.red,
	boldred: chalk.bold.red,
	green: chalk.green,
	bgWhite: chalk.black.bgWhite,
	white: chalk.white,
	blue: chalk.blue,
	magenta: chalk.magenta,
	cyan: chalk.cyan
};

const endGameMessage = () => {
	console.log('\n');
	console.log(c.white('Game has ended.'));
	console.log(`Your score is ${player.score}`);
}

const logName = () => {
	console.log(player.name);
}

const logScore = () => {
	console.log(player.score);
}

// 1. start the game
const startGame = () => {
	console.log(c.green('Welcome to the text adventure game!'));
	saveName();
}

// 2. Get player's name
const saveName = () => {
	let question = {
		type: 'input',
		name: 'name',
		message: 'what is your name?'
	};
	inquirer.prompt([question]).then(res => {
		// console.log(res);
		player.name = res.name;
		// console.log(player.name);
		chooseYear();
	});
	// chooseYear();
}

// 3. Choose the year option
const chooseYear = () => {
	let question = {
		type: 'list',
		name: 'year',
		message: `So ${player.name}, Which year would you like to go to?`,
		choices: [
			{
				name: '>= 2015',
				value: 'future'
			},
			{
				name: '1985-2014',
				value: 'present'
			},
			{
				name: '1955-1984',
				value: 'past'
			},
			{
				name: '< 1955',
				value: 'paster'
			}
		]
	};
	inquirer.prompt([question]).then(res => {
		// console.log(res);
		if(res.year === 'future') {
			goToFuture();
		}
		else if(res.year === 'present') {
			goToPresent();
		}
		else if(res.year === 'past') {
			goToPast();
		}
		else {
			goToPaster();
		}
	});
}

// 3a
const goToFuture = () => {
	console.log(c.white('i see you are a fan of Back to the Future 2.'));
	let question = {
		type: 'list',
		name: 'char',
		message: 'Would you rather deal with Biff, or Griff?',
		choices: [
			{
				name: 'Biff',
				value: 'b'
			},
			{
				name: 'Griff',
				value: 'g'
			},
		]
	};
	inquirer.prompt([question]).then(res => {
		if(res.char === 'b') {
			selectBiff();
		}
		else {
			selectGriff();
		}
	});
}


const selectBiff = () => {
	console.log(c.white('Biff selected.'));
	let question = {
		type: 'list',
		name: 'action',
		message: 'Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward?',
		choices: [
			{
				name: 'Stand and fight!',
				value: 's'
			},
			{
				name: 'Run like a coward...',
				value: 'r'
			}
		]
	};
	inquirer.prompt([question]).then(res => {
		if (res.action === 's') {
			player.score++;
			console.log(c.white('Good choice. Biff is old and feeble at this point'));
			endGameMessage();
		}
		else {
			player.score--;
			console.log(c.white('You get away,but your future son Martyr Jr is heckled for the rest of his days.'));
			endGameMessage();
		}
	});
}


const selectGriff = () => {
	console.log(c.white('Griff selected.'));
	let question = {
		type: 'list',
		name: 'action',
		message: 'Griff is asking you if you are in, or out. What do you say?',
		choices: [
			{
				name: `i'm in!`,
				values: 'in'
			},
			{
				name: `i'm out`,
				values: 'out'
			}
		]
	};
	inquirer.prompt([question]).then(res => {
		if (res.actiom === 'in') {
			player.score--;
			console.log(c.white('Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you'));
			endGameMessage();
		}
		else {
			player.score++;
			console.log(c.white('Good call! You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.'));
			endGameMessage();
		}
	});
}


// 3b
const goToPresent = () => {
	console.log(c.white('Doc has alreadt destroyed the Time Machine at this point. I guess you will have to wait around until 2015'));
	let questions = {
		type: 'input',
		name: 'name',
		message: 'What name would you like to go by until then?',
	};
	inquirer.prompt([question]).then(res => {
		player.name = res.name;
		console.log(`Welcome to the future, ${player.name}`);
	});
}

// 3c
const goToPast = () => {
	console.log(c.white('i See you are a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance.'));
	let question = {
		type: 'list',
		name: 'action',
		message: 'What do you do?',
		choices: [
			{
				name: 'Yes',
				value: 'y'
			},
			{
				name: 'No',
				value: 'n'
			},
			{
				name: 'Set her up with George',
				value: 's'
			},
		]
	};
	inquirer.prompt([question]).then(res => {
		if (res.value === 'y') {
			console.log('Creepy. I hope you have some backup plan in place to get out of this. Until then, you are stuck in 1995');
			endGameMessage();
		}
		else if (res.value === 'n') {
			console.log('Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.');
			endGameMessage();
		}
		else {
			console.log('Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awray, the plan untilmately works. You may go back to your own time.');
			endGameMessage();
		}
	});
}


const goToPaster = () => {
	console.log(c.white('I see you are a fan of Back to the Future 3. You have ran out of gas and cant get back to your own time!'));
	let question = {
		type: 'list',
		name: 'action',
		message: 'How do you power the Time Machine?',
		choices: [
			{
				name: 'Horses',
				value: 'h'
			},
			{
				name: 'Moonshine',
				value: 'm'
			},
			{
				name: 'Train',
				value: 't'
			}
		]
	};
	inquirer.prompt([question]).then(res => {
		if (res.action === 'h') {
			console.log('Good idea, but no. The time machine needs to get to 88mph. 12 horsepower aint gonna cut it');
			endGameMessage();
		}
		else if (res.action === 'm') {
			console.log('You would be better off drinking the Moonshine. Do not pass Go, do not collect $200. Stuck in 1855.');
			endGameMessage();
		}
		else {
			takeTheTrain();
		}
	});
}


const takeTheTrain = () => {
	console.log('Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment.');
	let question = {
		type: 'list',
		name: 'action',
		message: 'What do you do?',
		choices: [
			{
				name: 'Take her',
				value: 't'
			},
			{
				name: 'Leave her',
				value: 'l'
			}
		]
	};
	inquirer.prompt([question]).then(res => {
		if (res.action === 't') {
			console.log('Interesting choice. Unfortunately the Doc cant grab Clara and get back to the car in tim. He ends up staying in 1855 with her');
			endGameMessage();
		}
		else {
			console.log('Smart choice. Unfortunately the Doc was deepyly in love with Clara and became depressed when he got back.');
			endGameMessage();
		}
	});
}


startGame();