Template.leaderbpard.helpers({
	'Player' :function(){
	return Playerlist.find();
	},
'selectedClass':function(){
var playerId=this._id;
	var selectedPlayer=Session.get('selectedPlayer');
	if(playerId == selectedPlayer){
	return "selected"
	}
}
});
/*
Template.leaderboard.events({
	'click .player':function(){
		session.setPLayer','session value test');
		var selectedPlayer =Session.get('selectedPlayer');
		console.log(selectedPlayer);
		console.log("You clicked a.player element");
	}
});
*/
Template.leaderboard.events({
	'click.player':function(){
		var palyerId=this._id;
		session.set('selectedPlayer',playerId);
		vrar selectedPlayer =session.get('selectedPlayer');
		console.log(selectedPlayer);
	}
});
   
