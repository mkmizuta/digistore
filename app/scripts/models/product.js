App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("number"),
  avatar: DS.attr("string"),
  description: DS.attr("string"),
  item: DS.belongsTo('item', {async: true })
});

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Kitten Flurry",
    price: 1000,
    avatar: "http://upload.wikimedia.org/wikipedia/commons/b/b3/Chrysanthemum_sp.jpg",
    description: "It's a kitten extravaganza!"
  }, {
    id: 2,
    name: "Kittens Attack",
    price: 1000,
    avatar: "http://upload.wikimedia.org/wikipedia/commons/archive/f/f4/20070921095637%21Camellia_sasanqua1JAM343.jpg",
    description: "Kittens seek revenge."
  }, {
    id: 3,
    name: "Kittenz Attack",
    price: 1000,
    avatar: "http://upload.wikimedia.org/wikipedia/commons/archive/f/f4/20070921095637%21Camellia_sasanqua1JAM343.jpg",
    description: "Kittens seek revenge again."
  }
]
