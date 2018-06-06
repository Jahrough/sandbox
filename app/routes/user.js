const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	res.status(201).json({
		message: 'added a new user',
		id: req.params.id
	});
});

router.patch('/:id', (req, res) => {
	res.status(200).json({
		message: 'updated user',
		id: req.params.id
	});
});

router.delete('/:id', (req, res) => {
	res.status(200).json({
		message: 'deleted user',
		id: req.params.id
	});
});

router.get('/:id', (req, res) => {
	res.status(200).json({
		message: 'get a specific user',
		id: req.params.id
	});
});

router.get('/', (req, res) => {
	res.status(200).json({
		message: 'get all users'
	});
});

module.exports = router;
