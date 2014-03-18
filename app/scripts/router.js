App.Router.map(function(){
  this.route("home", { path: "/" })
  this.resource("cart");
  this.resource("item");
  this.resource("products", function() {
    this.resource("product", { path: ":product_id" });
  });
  this.resource("checkout");
  this.resource("confirmation", { path: "confirmation/:user.user_id"})
});
