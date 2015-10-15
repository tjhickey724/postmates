Template.requests.events({
	"submit #requestform": function(event){
		
		event.preventDefault();
		
		var x = $("#requestinput").val()
		
		$("#requestinput").val("");

		var profile = Meteor.user().profile;
		
		var requestline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				what:x,
				when: new Date(),
				crew:'none',
				timeNeeded:'none'
			};
			
		console.dir(requestline);
		
		RequestLines.insert(requestline);
	},
	
	"click button.request": function(event){
		this.crew = Meteor.userId();
		console.log("clicked on the button");
		console.dir(this);
		
	}
});

Template.requests.helpers({
	myRequestLines: function(){
		return RequestLines.find({uid:Meteor.userId()},{limit:10, sort:{when:-1}});
	},
	requestLines: function(){
		return RequestLines.find({crew:'none'},{limit:10, sort:{when:-1}});
	},
	numrequests: function(){
		return RequestLines.find().count();
	},
	guest:function(){return Meteor.user().profile.status == 'guest'}
});