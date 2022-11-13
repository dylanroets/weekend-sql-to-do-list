$(document).ready(onReady);

function onReady() {
	console.log('JS & JQ working');
	clickListeners();
	getList();



}
// Click Listeners
function clickListeners() {
	$('#entries').on('click', '.delete-btn', deleteTask);
	$('#add-chore-btn').on('click', addChore)
}

// GET
function getList() {
	console.log('in getList');
	// ajax call to server to get list
	$.ajax({
		method: 'GET',
		url: '/chore_table',
	}).then(function (response) {
		console.log(response);
		renderToDos(response);
	}).catch(function (error) {
		console.log('Error in GET:', error);
	});
}

// POST
function addChore() {
	const chore = $('#new-chore-input').val();
	const isFinished = false;
	newChore = {
		chore: chore,
		isFinished: isFinished
	}
	$.ajax({
		method: 'POST',
		url: '/chore_table',
		data: newChore
	}).then(function (response) {
		//getList();
		console.log('This is what was sent to DB: ', response);
		$('#new-chore-input').val('');
		getList();
	}).catch(function (error) {
		alert('addChore function has failed to POST to DataBase!');
	});
}

// PUT


// DELETE
function deleteTask() {
	const taskId = $(this).data('id');
	console.log('in deleteTask, taskId: ', taskId);
	$.ajax({
		method: 'DELETE',
		url: `/chore_table/${taskId}`
	})
		.then(function () {
			getList();
		})
		.catch(function (error) {
			alert(`Delete Function Error: ${error}`);
		});
}


// Render

function renderToDos(tasks) {
	$('#entries').empty();
	console.log('in renderToDos');
	for (let i = 0; i < tasks.length; i++) {
		let toDo = tasks[i];
		$('#entries').append(`
		<tr>
			<td>${toDo.chore}</td>
			<td>${toDo.isFinished}</td>
			<td>
				<button class="delete-btn" data-id="${toDo.id}">Delete Task</button>
			</td>
		`)
	}	
}