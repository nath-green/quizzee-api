const Question = require('../models/question.model');

exports.list = (req, res, next) => {
  Question.find({}, (err, data) => {
    if (err)
      return res.status(400).send({ data: [], success: false, message: 'Cannot return question' });
    return res.status(200).send({ data, success: true, message: 'Question returned' });
  }).select('-__v');
};

exports.getById = (req, res, next) => {
  Question.findById(req.params.id, (err, player) => {
    if (err)
      return res.status(400).send({ data: {}, success: false, message: 'Question does not exist' });
    return res.status(200).send({ data: player, success: true, message: 'Question returned' });
  }).select('-__v');
};

exports.add = (req, res, next) => {
  Question.create(req.body, (err, player) => {
    if (err)
      return res
        .status(400)
        .send({ data: {}, success: false, message: 'Question cannot be added' });
    return res.status(200).send({ data: player, success: true, message: 'Question added' });
  });
};

exports.updateById = (req, res, next) => {
  Question.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, player) => {
    if (err || player === null)
      return res
        .status(400)
        .send({ data: {}, success: false, message: 'Question cannot be updated or does not exist' });
    return res.status(200).send({ data: player, sucess: true, message: 'Question updated' });
  }).select('-__v');
};

exports.deleteById = (req, res, next) => {
  Question.findByIdAndRemove(req.params.id, (err, player) => {
    if (err || player === null)
      return res
        .status(400)
        .send({ data: {}, success: false, message: 'Question cannot be removed or does not exist' });
    return res
      .status(200)
      .send({ data: player, sucess: true, message: 'Question deleted' });
  }).select('-__v');
};
