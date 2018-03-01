class Call {
	constructor(callerId, minLevel = 1) {
		this.callerId = callerId;
		this.minLevel = minLevel;
	}
}

class CallQueue {
	constructor() {
		this.queue = [];
	}

	get previewCall() {
		if(this.queue.length)
			return this.queue[0];
	}

	enqueue(call) {
		this.queue.push(call);
	}

	dequeue() {
		return this.queue.shift();
	}
}

class CallCenter {
	constructor() {
		this.callQueue = new CallQueue();

		this.respondents = [];
		this.managers = [];
		this.directors = [];

		this.respondentsAvailable = [];
		this.managersAvailable = [];
		this.directorsAvailable = [];
	}

	assignEmployee(employee) {
		let { level } = employee;

		switch(level) {
			case 1:
				employee.setLine = this.respondents.length;;
				this.respondents.push(employee);
				this.respondentsAvailable.push(employee.line);
				break;
			case 2:
				employee.setLine = this.managers.length;
				this.managers.push(employee);
				this.managersAvailable.push(employee.line);
				break;
			case 3:
				employee.setLine = this.directors.length;
				this.directors.push(employee);
				this.directorsAvailable.push(employee.line);
				break;
			default:
				'Invalid employee information';
				break;
		}
	}

	dispatchCall() {
		let { minLevel } = this.callQueue.previewCall;
		let callEstablished = false;

		while(!callEstablished) {
			switch(minLevel) {
				case 1:
					if(this.respondentsAvailable.length) {
						let respondentLine = this.respondentsAvailable.shift();
						
						this.respondents[respondentLine].ongoingCall = this.callQueue.dequeue();
						this.respondents[respondentLine].setAvailability = false;

						callEstablished = true;
						
						break;
					} else {
						minLevel++;
					}
				case 2:
					if(this.managersAvailable.length) {
						let managerLine = this.managersAvailable.shift();
						
						this.managers[managerLine].ongoingCall = this.callQueue.dequeue();
						this.managers[managerLine].setAvailability = false;

						callEstablished = true;

						break;
					} else {
						minLevel++;
					}
				case 3:
					if(this.directorsAvailable.length) {
						let directorLine = this.directorsAvailable.shift();
						
						this.directors[directorLine].ongoingCall = this.callQueue.dequeue();
						this.directors[directorLine].setAvailability = false;

						callEstablished = true;

						break;
					}
				default:
					console.log('All lines are tied up');
					break;
			}

			break;
		}		
	}

	handleIncomingCall(call) {
		debugger;
		this.callQueue.enqueue(call);
	}
}

class Employee {
	constructor(id, level = 1, line = null , available = true) {
		this.id = id;
		this.line = line;
		this.level = level;
		this.available = available;
		this.ongoingCall = null;
	}

	get getLine() {
		return this.line;
	}

	set setLine(line) {
		this.line = line;
	}

	get getAvailability() {
		return this.available;
	}

	set setAvailability(availability) {
		this.available = availability;
	}
}

const Seattle_CallCenter = new CallCenter();

const Manny = new Employee(44, 1);
const Mariya = new Employee(27, 2);
const Vincent = new Employee(27, 3);

Seattle_CallCenter.assignEmployee(Manny);
Seattle_CallCenter.assignEmployee(Mariya);
Seattle_CallCenter.assignEmployee(Vincent);

const call1 = new Call(1, 1);
const call2 = new Call(2, 2);
const call3 = new Call(3, 3);

Seattle_CallCenter.handleIncomingCall(call1);