
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [
		{
        fieldName: 'firstName',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'lastName',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'status',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'status',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Crew',          // label for the radio element
            value: 'crew'              // value of the radio element, this will be saved.
          	}, {
            id: 2,
            label: 'Guest',
            value: 'guest'
        	}
		],
        visible: true
   		}, 
		{
        fieldName: 'username',
        fieldLabel: 'UserName',
        inputType: 'text',
        visible: true
    }]
});

