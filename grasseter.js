class GrassEater extends LivingCreature{
	constructor(x, y) {
		super(x,y)
		this.energy = 10;
		this.multiply = 0
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

	chooseCell(char) {
		this.getNewCoordinates()
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

				if (matrix[y][x] == char) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	mul() {
		this.multiply++;
		var emptyCells = this.chooseCell(0);
		var newCell = random(emptyCells);

		console.log(emptyCells);
		if (newCell && this.multiply >= 15) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 2;

			var grEat = new GrassEater(newX, newY);
			grassEaterArr.push(grEat);
			this.multiply = 0;
		}
	}

	move() {
		this.energy--
		var emptyCell = this.chooseCell(0)
		var newCell = random(emptyCell)

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
				this.die()
			}
		}
	}

	eat() {
		var emptyCell = this.chooseCell(1)
		var newCell = random(emptyCell)

		if (newCell) {
			this.energy++
			var newX = newCell[0]
			var newY = newCell[1]

			matrix[newY][newX] = matrix[this.y][this.x]
			matrix[this.y][this.x] = 0
			this.x = newX
			this.y = newY
			for (var i in grassArr) {
				if (newX == grassArr[i].x && newY == grassArr[i].y) {
					grassArr.splice(i, 1)
					break
				}
			}
		}
		else {
			this.move()
		}
	}

	die() {
		matrix[this.y][this.x] = 0;
		for (var i in grassEaterArr) {
			if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
				grassEaterArr.splice(i, 1);
				break;
			}
		}
	}
}

