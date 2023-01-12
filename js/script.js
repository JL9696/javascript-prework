

const playGame = function (playerInput){

	clearMessages();	
	
	const getMoveName = function (argMoveId){
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



	const displayResult = function (argComputerMove, argPlayerMove){

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


	const playerMove = getMoveName(playerInput);
	console.log('Ruch gracza: ' + playerInput);
	printMessage('Twój ruch to: ' + playerMove);

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);
	const computerMove = getMoveName(randomNumber);

	printMessage('Ruch komputera to: ' + computerMove);

	printMessage(displayResult(playerMove, computerMove));
}

	document.getElementById('play-rock').addEventListener('click', function(){
    (playGame(1)); });

 	document.getElementById('play-paper').addEventListener('click', function(){
    (playGame(2));});

  	document.getElementById('play-scissors').addEventListener('click', function(){
    (playGame(3));});

