
class Cleaner extends LivingCreature {
	constructor(x, y) {
		super(x,y)
		this.multiply = 0;
		this.energy = 100;
		this.directions = [];
	}

	getNewCoordinates() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}

	chooseCell(character0, character1, character2, character3) {
		this.getNewCoordinates()
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

				if (matrix[y][x] == character0) {
					found.push(this.directions[i]);
				}
			}
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

				if (matrix[y][x] == character1) {
					found.push(this.directions[i]);
				}
			}
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

				if (matrix[y][x] == character2) {
					found.push(this.directions[i]);
				}
			}
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

				if (matrix[y][x] == character3) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	mul() {
		this.multiply++;
		var emptyCells = this.chooseCell(0,1,2,3);
		var newCell = random(emptyCells);

		console.log(emptyCells);
		if (newCell && this.multiply >= 100) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 4;

			var cl = new Cleaner(newX, newY);
			cleanerArr.push(cl);
			this.multiply = 0;
		}
	}
	
	move() {
		this.energy--
		var emptyCells = this.chooseCell(0,1,2,3)
		var newCell = random(emptyCells);

		if (newCell && this.energy >= 0) {
			console.log(newCell)
			var newX = newCell[0]
			var newY = newCell[1]
			matrix[newY][newX] = matrix[this.y][this.x]
			matrix[this.y][this.x] = 0
			this.x = newX
			this.y = newY
		}
		else {
			if (this.energy < 0) {
				this.explosion()
				this.die()
			}
		}
	}
	
	explosion() {
		for (let y = 0; y < matrix.length; y++) {
			for (let x = 0; x < matrix[y].length; x++) {
				if (matrix[this.y] < matrix[y] && matrix[this.x] == matrix[x]) {
					matrix[y][x] = 0
				}
				if (matrix[this.y] == matrix[y] && matrix[this.x] < matrix[x]) {
					matrix[y][x] = 0
				}
				
			}
		}
	}
	die() {
		matrix[this.y][this.x] = 0;
		for (var i in cleanerArr) {
			if (this.x == cleanerArr[i].x && this.y == cleanerArr[i].y) {
				cleanerArr.splice(i, 1);
				break
			}
		}
		matrix[this.y][this.x] = 0 
		
	}




}