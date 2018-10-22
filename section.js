class Section {
	constructor(name, startTime, endTime, courseNum, days, seats) {
		this.name = name;
		this.startTime = Section.convertStartTime(startTime);
		this.endTime = Section.convertEndTime(endTime);
		this.courseNum = courseNum;
		this.days = days;
		this.seats = parseInt(seats);
	}
	
	static convertStartTime(timeStr) {
		let timeNum;
		//Splits string into the time and the period element
		let tokens = timeStr.split(" ");
		//Stores the two time nums into nums and the period into period
		let nums = tokens[0].split(":");
		let period = tokens[1];
		//Parses the values from strings to ints
		nums[0] = parseInt(nums[0], 10);
		nums[1] = parseInt(nums[1], 10);
		
		//Checks for the special case of the hour being 12
		let is12 = (nums[0] === 12) ? true : false;
		
		//Checks what period it is and if hour is 12 and calculates timeNum accordingly
		if (period.toLowerCase() === "am") {
			if (is12) 
				timeNum = nums[1];
			else
				timeNum = (100 * nums[0]) + nums[1];
		} else if (period.toLowerCase() === "pm"){
			if (is12)
				timeNum = 1200 + nums[1];
			else
				timeNum = (100 * nums[0]) + nums[1] + 1200;
		} else {
			throw new Error("Invalid Input");
		}
		
		return timeNum;
	}
	
	static convertEndTime(endTime) {
		//var endTime = "12pm";
		let numStr;
		let period;
		let nums;
		let timeNum;
		
		//Since no space b/w time and period, uses substrings to separate
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
		
		//Parses the hours and minutes into nums
		nums[0] = parseInt(nums[0]);
		nums[1] = parseInt(nums[1]);
		
		//Sometimes they don't give minutes if it's on the hour
		if (isNaN(nums[1])) nums[1] = 0;
		
		//checks if the hour is 12
		let is12 = (nums[0] === 12) ? true : false;
	
		//Checks what period it is and if hour is 12 and calculates timeNum accordingly
		if (period.toLowerCase() === "am") {
			if (is12) 
				timeNum = nums[1];
			else
				timeNum = (100 * nums[0]) + nums[1];
		} else if (period.toLowerCase() === "pm"){
			if (is12)
				timeNum = 1200 + nums[1];
			else
				timeNum = (100 * nums[0]) + nums[1] + 1200;
		}
		
		return timeNum;
	}
}

module.exports = Section;