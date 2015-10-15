Template.welcome.helpers({
	guest:function(){return Meteor.user().profile.status == 'guest'}
})
Template.welcome.events({
	"submit": function(event){
		event.preventDefault();
		console.log("you pushed the button");
	}
})