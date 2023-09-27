const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include:Product})
  .then(categories => res.json(categories))
  .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const id = req.params.id
  Category.findOne({include:Product, where:{id}})
  .then(category => res.json(category))
  .catch(err => res.json(err))
});

router.post('/', (req, res) => {
  // create a new category
  const {category_name} = req.body 
  Category.create({category_name})
  .then(category => res.json(category))
  .catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const {category_name} = req.body 
  const id = req.params.id 
  Category.update({category_name}, {where:{id}})
  .then(category => res.json(category))
  .catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const id = req.params.id 
  Category.destroy({where:{id}})
  .then(category =>res.json(category))
  .catch(err => res.json(err))
});

module.exports = router;
