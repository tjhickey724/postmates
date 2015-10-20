Meteor.methods({
	grabit: function(requestID){
		console.dir(requestID);
		var request = RequestLines.findOne(requestID);
		request.crewId = Meteor.userId();
		var user = Meteor.user();
		request.crew = user.profile.firstName + " "+user.profile.lastName;
		console.dir(Meteor.user());
		console.dir(request);
		RequestLines.update(requestID,request);
	},
	setTime: function(requestID,time){
		request = RequestLines.findOne(requestID);
		
		console.log("request before="+JSON.stringify(request));
		request.timeNeeded = time;
		RequestLines.update(requestID,request);
		console.log("request after="+JSON.stringify(request));
		
	}
})