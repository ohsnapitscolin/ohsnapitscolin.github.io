var myRef = new Firebase('https://resistancewithjustin.firebaseio.com/');
var missionRef = myRef.child('mission');

function submitVote() {	 
	if ($('#pass').is(':checked')) {
		missionRef.child('pass').transaction(function (current_value) {
			return (current_value || 0) + 1;
		});
		$('#pass').attr('checked', false);		
	}
	if ($('#fail').is(':checked')) {
		missionRef.child('fail').transaction(function (current_value) {
			return (current_value || 0) + 1;
		});
		$('#fail').attr('checked', false);	
	}
}

function clearVotes() {
	missionRef.set({pass: 0, fail: 0});
}

function updateStyle() {
	if ($('#pass').is(':checked')) {
		$('#passText').css({
			'color': 'green',
			'font-weight': 'bold'
		});
	} else {
		$('#passText').css({
			'color': 'inherit',
			'font-weight': 'inherit'
		});	
	}

	if ($('#fail').is(':checked')) {
		$('#failText').css({
			'color': 'red',
			'font-weight': 'bold'
		});
	}else {
		$('#failText').css({
			'color': 'inherit',
			'font-weight': 'inherit'
		});	
	}
}