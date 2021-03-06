const Question = require('../models/question.model');

exports.random = (req, res, next) => {
  const count = req.query.number ? parseInt(req.query.number) : 1;

  Question.aggregate([{ $sample: { size: count } }]).exec((err, data) => {
    if (err) return res.status(400).send({ message: 'Cannot return question(s)' });
    return res.status(200).send({ data });
  });
};

exports.randomByCategory = (req, res, next) => {
  const count = req.query.number ? parseInt(req.query.number) : 1;
  const { category } = req.params;

  Question.aggregate([{ $match: { category } }, { $sample: { size: count } }]).exec((err, data) => {
    if (err) return res.status(400).send({ message: 'Cannot return question(s)' });
    return res.status(200).send({ data });
  });
};

exports.add = (req, res, next) => {
  Question.create(req.body, (err, player) => {
    if (err) return res.status(400).send({ message: 'Question cannot be added' });
    return res.status(200).send({ data: player });
  });
};
