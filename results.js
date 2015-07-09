var myRef = new Firebase('https://resistancewithjustin.firebaseio.com/');
var missionRef = myRef.child('mission');

missionRef.on("value", function(snapshot) {
	$('#passCount').html(snapshot.val().pass);
	$('#failCount').html(snapshot.val().fail);
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});

function reset() {
	$('#container').css({'display': 'none'});
	missionRef.set({pass: 0, fail: 0});
	location.href = "index.html";
}
