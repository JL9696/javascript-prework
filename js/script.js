

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

		else{
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';}
	}



	const displayResult = function (argComputerMove, argPlayerMove){

		console.log('moves:', argComputerMove, argPlayerMove);

		if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){ return 'Ty wygrywasz!';}
		else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){ return 'Ty przegrywasz!';}
		else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){ return 'Remis!';}
		else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){ return 'Remis!';}
		else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){ return 'Ty przegrywasz!';}
		else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){ return 'Ty wygrywasz!';}
		else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){ return 'Ty przegrywasz!';}
		else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){ return 'Ty wygrywasz!';}
		else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){ return 'Remis!';}
		else if ( argComputerMove == 'nieznany ruch'){ return 'Nieznany ruch!';}
		else if ( argPlayerMove == 'nieznany ruch'){ return 'Nieznany ruch!';}
		
	}

	/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

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

