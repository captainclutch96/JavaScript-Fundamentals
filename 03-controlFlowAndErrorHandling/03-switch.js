let officeCharacter = 'Pam';

switch(officeCharacter) {
    case 'Michael':
        console.log('My mind is going a mile an hour');
        break;
    case 'Dwight':
        console.log('Perfectenschlag');
        break;
    case 'Jim':
        console.log('Bears. Beets. Battlestar Galactica.');
        break;
    default:
        console.log(`I'm sorry, ${ officeCharacter }, but do I know you?
        `);
}

let temperature = 79;

// < 90, it's hot
// > 50, need jacket
// > 0, need coat

switch () {
    case (temperature >= 90):
        console.log(`it's hot`);
        break;
    case (temperature < 90 && temperature >= 50):
        console.log(`You need a jacket`);
        break;
    case (temperature < 50 && temperature >= 0):
        console.log(`You need a coat`);
        break;
    default:
        console.log(`STAY INSIDE, TEMPERATURE IS DANGEROUSLY LOW
        `);
}