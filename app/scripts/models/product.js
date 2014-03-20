App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("number"),
  image: DS.attr("string"),
  avatar: DS.attr("string"),
  description: DS.attr("string"),
  item: DS.belongsTo('item', {async: true })
});

// App.Product.FIXTURES = [
//   {
//     id: 1,
//     name: "Coral Dawn",
//     price: 1000,
//     image: "http://upload.wikimedia.org/wikipedia/commons/c/c4/Rapperswil_-_Duftrosengarten_-_Coral_Dawn_KL_Doerner_1952_IMG_2393.JPG",
//     avatar: "http://4.bp.blogspot.com/-1dYt7-rB5Jg/TePm5FBXbBI/AAAAAAAAAGE/apCx7BxCtZE/s1600/Roses-Flowers-Wallpapers.jpg",
//     description: "Classic coral to welcome spring!"
//   }, {
//     id: 2,
//     name: "California Wildflowers",
//     price: 1000,
//     image: "http://upload.wikimedia.org/wikipedia/commons/f/fc/California_Wildflowers_%283386132276%29.jpg",
//     avatar: "http://images.fineartamerica.com/images-medium-large/wildflowers-marci-mongelli.jpg",
//     description: "When lots of color and flowers are needed."
//   }, {
//     id: 3,
//     name: "Weeds Galore",
//     price: 5000,
//     image: "http://upload.wikimedia.org/wikipedia/commons/4/43/Sprayed_weeds.jpg",
//     avatar: "http://cindybeall.com/wp-content/uploads/2012/07/dandelion-weeds-by-aaron13251.jpeg",
//     description: "For that extra special someone."
//   }
// ]
