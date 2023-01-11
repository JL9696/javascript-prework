function getMoveName(argMoveId){
	if(argMoveId == 1){
	  	return 'kamień';
	}

	if(argMoveId == 2){
	  	return 'papier';
	}

	if(argMoveId == 3){
		return 'nożyce';
	  }

	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
}



function displayResult(argComputerMove, argPlayerMove){

	console.log('moves:', argComputerMove, argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){ printMessage('Ty wygrywasz!');}
    else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){ printMessage('Ty przegrywasz');}
    else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){ printMessage('Remis!');}
    else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){ printMessage('Remis!');}
    else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){ printMessage('Ty przegrywasz');}
    else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){ printMessage('Ty wygrywasz!');}
    else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){ printMessage('Ty przegrywasz');}
    else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){ printMessage('Ty wygrywasz!');}
    else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){ printMessage('Remis!');}
    else if ( argComputerMove == 'nieznany ruch'){ printMessage('nieznany ruch');}
    else if ( argPlayerMove == 'nieznany ruch'){ printMessage('nieznany ruch');}
	
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);

console.log('Ruch gracza to: ' + playerInput);

if(playerInput == '1'){playerMove = 'kamień';} 
else if(playerInput == '2'){playerMove = 'papier';}
else if(playerInput == '3'){playerMove = 'nożyce';}

printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Ruch komputera to: ' + computerMove);

displayResult(playerMove, computerMove);

