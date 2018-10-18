class Section {
	constructor(name, startTime, endTime, courseNum, days, seats) {
		this.name = name;
		this.startTime = convertTime(startTime);
		this.endTime = endTime;
		this.courseNum = courseNum;
		this.days = days;
		this.seats = seats;
	}
	
	convertStartTime(timeStr) {
		let timeNum;
		let tokens = startTime.split(" ");
		let nums = tokens[0].split(":");
		let period = tokens[1];
		nums[0] = parseInt(nums[0], 10);
		nums[1] = parseInt(nums[1], 10);
		if (period.toLowerCase() === "am") {
		  timeNum = (100 * nums[0]) + nums[1];
		} else {
		  timeNum = (100 * nums[0]) + nums[1] + 1200;
		}
		return timeNum;
	}
	
	convertEndTime(timeStr) {
		var endTime = "12pm";
		let numStr;
		let period;
		let nums;
		let timeNum;

		if (endTime.includes("am")) {
		  numStr = endTime.substring(0, endTime.indexOf('a'));
		  period = endTime.substring(endTime.indexOf("a"), endTime.length);
		} else if (endTime.includes("pm")) {
		  numStr = endTime.substring(0, endTime.indexOf('p'));
		  period = endTime.substring(endTime.indexOf('p'), endTime.length);
		} else {
		  console.log("Invalid Input");
		  throw new Error("Invalid Input");
		}
		nums = numStr.split(":");
		nums[0] = parseInt(nums[0]);
		nums[1] = parseInt(nums[1]);

		if (isNaN(nums[1])) nums[1] = 0;

		if (period.toLowerCase() === "am") {
		  timeNum = (100 * nums[0]) + nums[1];
		} else {
		  timeNum = (100 * nums[0]) + nums[1] + 1200;
		}
		
		return timeNum;
	}
}