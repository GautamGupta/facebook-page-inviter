var invites = [];
var inputs = document.getElementsByTagName('a');

for (var i= 0; i < inputs.length; i++) {
	if(inputs[i].innerText == "Invite") {
		invites.push(inputs[i]);
	}
}

function invite_that(some) {
	if (some.length == 0) {
		return;
	}
	some[0].click();

	window.setTimeout(function() {
		invite_that(some.splice(1));
	}, 100);
}

invite_that(invites);
