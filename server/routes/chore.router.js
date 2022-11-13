const express = require('express');
const choreRouter = express.Router();
const pool = require('../modules/pool.js');
//DB connection




// GET Route
choreRouter.get('/', (req, res) => {
	let getQuery = `SELECT * FROM "choreTable" ORDER BY "id";`;
	pool.query(getQuery).then((result) => {
		console.log('result.rows :', result.rows);
		res.send(result.rows);
	}).catch((error) => {
		console.log(`Error making query: ${getQuery}, error is:`, error);
		sendStatus(500);
	});
});

// POST Route
choreRouter.post('/', (req, res) => {
	const newEntry = req.body;
	const queryText = `
	INSERT INTO "choreTable" 
	("chore", "isFinished") 
	VALUES ($1, $2);`;
	pool.query(queryText, [newEntry.chore, newEntry.isFinished])
		.then((result) => {
			console.log('POST result from DB', result);
			res.sendStatus(201);
		}).catch((error) => {
			console.log('Error in using the router POST to DataBase, ', queryText, 'error is: ', error);
			res.sendStatus(500);
		});
});


// PUT Route


// DELETE Route
choreRouter.delete('/:id', (req, res) => {
	const id = req.params.id;
	console.log('Delete request for id: ', id);
	const queryText = `DELETE FROM "choreTable" WHERE "id" = $1;`;
	pool.query(queryText, [id])
		.then(() => {
			console.log('Task Deleted');
			res.sendStatus(200);
		})
		.catch((error) => {
			console.log(`Error DELETEing with query: ${queryText}, error: ${error}`);
			res.sendStatus(500);
		})
})








module.exports = choreRouter;