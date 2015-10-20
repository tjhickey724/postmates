Template.crewJobs.helpers({
	job: function() {var z =  RequestLines.find({crewId:Meteor.userId()});
		console.dir(z);
		return z;}
})

Template.crewJobs.events({
	"submit #crewJob": function(event){
		event.preventDefault();
		console.log("this is "+event.target.time.value);
		console.dir(this);
		console.log("time="+event.target.time.value);
		Meteor.call("setTime",this._id,event.target.time.value);
		Router.go("allRequests");
	}
})