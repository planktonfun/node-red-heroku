let events = msg.payload.values;

let globalData = {
	'firstTimeChange': false,
	'notificationCount': 0,
};

let functionList = {
	addNotificationCount: () => {
		globalData.notificationCount++;
	},
	resetNotificationCount: () => {
		globalData.notificationCount = 0;
	}
}

for (var i = 0; i < events.length; i++) {
	let functionName = events[i][0];
	let functionParameters = events[i][1];

	if(functionList[functionName] != undefined) {
		functionList[functionName](...functionParameters);
	} else {
		node.warn(functionName + ' does not exist!')
	}
	
}

return msg;