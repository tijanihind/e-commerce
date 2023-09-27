const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include:Product})
  .then(tags => res.json(tags))
  .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const id = req.params.id;
  Tag.findOne({include:Product, where:{id}})
  .then(tag => res.json(tag))
  .catch(err => res.json(err))
});

router.post('/', (req, res) => {
  // create a new tag
  const {tag_name} = req.body
  Tag.create({tag_name})
  .then(tag => res.json(tag))
  .catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const {tag_name} = req.body
  const id = req.params.id
  Tag.update({tag_name}, {where:{id}})
  .then(tag => res.json(tag))
  .catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const id= req.params.id
  Tag.destroy({where:{id}})
  .then(tag => res.json(tag))
  .catch(err => res.json(err))
});

module.exports = router;
