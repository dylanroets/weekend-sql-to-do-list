const express = require('express');
const choreRouter = express.Router();
const pool = require('../modules/pool.js');
//DB connection




// GET Route
choreRouter.get('/', (req, res) => {
	let getQuery = `SELECT * FROM "toDoList" ORDER BY "id";`;
	pool.query(getQuery).then((result) => {
		console.log('result.rows :', result.rows);
		res.send(result.rows);
	}).catch((error) => {
		console.log(`Error making query: ${getQuery}, error is:`, error);
		sendStatus(500);
	});
});

// POST Route


// PUT Route


// DELETE Route








module.exports = choreRouter;