function matrixGenerator(matrixSize, grassCount, grEatCount, predatorCount, cleanerCount, creatorCount) {
	let matrix = [];
	for (let i = 0; i < matrixSize; i++) {
		matrix[i] = []
		for (let j = 0; j < matrixSize; j++) {
			matrix[i][j] = 0
		}
	}
	for (let i = 0; i < grassCount; i++) {
		let x = Math.floor(Math.random() * matrixSize)
		let y = Math.floor(Math.random() * matrixSize)


		if (matrix[y][x] == 0) {
			matrix[y][x] = 1

		}

	}
	for (let i = 0; i < grEatCount; i++) {
		let x = Math.floor(Math.random() * matrixSize)
		let y = Math.floor(Math.random() * matrixSize)


		if (matrix[y][x] == 0) {
			matrix[y][x] = 2

		}

	}
	for (let i = 0; i < predatorCount; i++) {
		let x = Math.floor(Math.random() * matrixSize)
		let y = Math.floor(Math.random() * matrixSize)


		if (matrix[y][x] == 0) {
			matrix[y][x] = 3

		}

	}
	for (let i = 0; i < cleanerCount; i++) {
		let x = Math.floor(Math.random() * matrixSize)
		let y = Math.floor(Math.random() * matrixSize)


		if (matrix[y][x] == 0) {
			matrix[y][x] = 4

		}

	}
	for (let i = 0; i < creatorCount; i++) {
		let x = Math.floor(Math.random() * matrixSize)
		let y = Math.floor(Math.random() * matrixSize)


		if (matrix[y][x] == 0) {
			matrix[y][x] = 5

		}

	}

	return matrix


}
let matrix = matrixGenerator(35, 17.5, 20, 25, 4, 5)



let side = 20;


let grassArr = []
let grassEaterArr = []
let predatorArr = []
let cleanerArr = []
let creatorArr = []

function setup() {
	frameRate(9)
	createCanvas(matrix[0].length * side, matrix.length * side)

	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				let gr = new Grass(x, y)
				grassArr.push(gr)

			} else if (matrix[y][x] == 2) {
				let grEat = new GrassEater(x, y)
				grassEaterArr.push(grEat)


			} else if (matrix[y][x] == 3) {
				let pre = new Predator(x, y)
				predatorArr.push(pre)

			} else if (matrix[y][x] == 4) {
				let cl = new Cleaner(x, y)
				cleanerArr.push(cl)

			}else if (matrix[y][x] == 5) {
				let cre = new Creator(x, y)
				creatorArr.push(cre)
			}
		}
	}
}
function draw() {
	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				fill("green")

			} else if (matrix[y][x] == 2) {
				fill("yellow")

			} else if (matrix[y][x] == 3) {
				fill("red")

			} else if (matrix[y][x] == 4){
				fill("purple")

			} else if (matrix[y][x] == 5){
				fill("blue")

			}else {
				fill("gray")

			}
			rect(x * side, y * side, side, side)
		}
	}





	for (let i in grassArr) {
		grassArr[i].mul()
	}
	for (let i in grassEaterArr) {
		grassEaterArr[i].mul()
		grassEaterArr[i].eat()
	}
	for (let i in predatorArr) {
		predatorArr[i].mul()
		predatorArr[i].eat()
	}
	for (let i in cleanerArr){
		cleanerArr[i].move()
		cleanerArr[i].mul()		
	}
	for (let i in creatorArr){
		creatorArr[i].add()
		creatorArr[i].move()
		creatorArr[i].mul()
		}
		
}