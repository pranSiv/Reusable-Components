({
	handleUploadFinished : function(component, event, helper) {
		
		// Get the list of uploaded files
        var uploadedFiles = event.getParam('files');
        
        //objectName
        var objectName = 'Account';

		//set action to call updatePicturePath method from Server-side controller
		var action = component.get('c.uploadPicture');
        console.log(objectName);

		//set parametrs
		action.setParams({
            recId : component.get('v.recordId'),
            objectName : objectName
		});
        console.log('QQQQQQQQ');
		action.setCallback(this, function(response){
            
            var state = response.getState();
            console.log(response.getReturnValue());
			if(response.getReturnValue() == 'success') {
                var resultToast = $A.get("e.force:showToast");
                
				resultToast.setParams({
					title: 'Success!',
                    message: 'file uploaded successfully!',
                    type: 'success'
				});
                resultToast.fire();
                console.log('HAHAHAHAHAH');
			}
		});
		$A.enqueueAction(action);
	}
})