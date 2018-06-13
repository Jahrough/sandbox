const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	res.status(201).json({
		message: 'added a new service',
		id: req.params.id
	});
});

router.patch('/:id', (req, res) => {
	res.status(200).json({
		message: 'updated service',
		id: req.params.id
	});
});

router.delete('/:id', (req, res) => {
	res.status(200).json({
		message: 'deleted service',
		id: req.params.id
	});
});

router.get('/:id', (req, res) => {
	res.status(200).json({
		message: 'get a specific service',
		id: req.params.id
	});
});

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'get all services'
	});
});

module.exports = router;
