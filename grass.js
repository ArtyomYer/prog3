class Grass extends LivingCreature{
	
	mul() {
		this.multiply++
		var emptyCell = this.chooseCell(0);
		var newCell = random(emptyCell);

		if (newCell && this.multiply >= 5) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = 1;

			var gr = new Grass(newX, newY);

			grassArr.push(gr);

			this.multiply = 0;

		}
	}
}
