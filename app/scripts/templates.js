Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n     <h4 class=\"text-right\">View Cart | <span class=\"glyphicon glyphicon-shopping-cart\"></span></h4>\n    ");
  }

  data.buffer.push("<div class='container'>\n  <h1>Digistore digital dancing</h1>\n  <p class='lead'>The place to go for all things digital.\n\n  \n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cart", options) : helperMissing.call(depth0, "link-to", "cart", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n \n </p>\n  \n  \n  <hr>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  \n  <div class='text-muted'><small>Foot</small></div>\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["cart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <tr>\n    <td>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n    </td>\n    <td>\n        $");
  data.buffer.push(escapeExpression((helper = helpers['format-price'] || (depth0 && depth0['format-price']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "product.price", options) : helperMissing.call(depth0, "format-price", "product.price", options))));
  data.buffer.push("<br>  \n    </td>\n     <td>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "quantity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("     \n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "more", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">+</button>\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "less", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">-</button>\n    </td>\n    <td>\n        $");
  data.buffer.push(escapeExpression((helper = helpers['format-price'] || (depth0 && depth0['format-price']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "subtotal", options) : helperMissing.call(depth0, "format-price", "subtotal", options))));
  data.buffer.push("\n    </td>\n  </tr>\n   ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Checkout");
  }

  data.buffer.push("<h3>Your Digital Cart</h3>\n<table class=\"table table-hover\">\n  <tr>\n    <th>Product Name</th>\n    <th>Price</th>\n    <th>Quantity</th>\n    <th>Subtotal</th>\n  </tr>\n  ");
  stack1 = helpers.each.call(depth0, "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <tr>\n    <td></td>\n    <td></td>\n    <td><strong>Your order's total:<strong></td>\n    <td><strong>$");
  data.buffer.push(escapeExpression((helper = helpers['format-price'] || (depth0 && depth0['format-price']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "total", options) : helperMissing.call(depth0, "format-price", "total", options))));
  data.buffer.push("</strong>    \n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "checkout", options) : helperMissing.call(depth0, "link-to", "checkout", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n  </tr>\n</table>\n");
  return buffer;
  
});

Ember.TEMPLATES["checkout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h3>Checkout</h3>\n<br>\n  Please submit the following information to complete your purchase:<br>\n  <p>\n  <div class='form-group'>\n    <label for=\"name\">Name:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("name"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"email\">Email:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("email"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"cc\">Credit Card Number:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("cc"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"cvv\">CVV:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("cvv"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"expiration\">Expiration Date:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("expiration"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"zipcode\">Zipcode:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("zipcode"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  \n  <button class='btn btn-success'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirmation", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Purchase</button>\n</p>");
  return buffer;
  
});

Ember.TEMPLATES["confirmation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h3>Confirmation Page</h3>\n\n  <p>\n    Please save or print for your records.\n    Thanks for making someone's day.\n  </p>");
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Welcome Home DigiFriend</h1>\n");
  
});

Ember.TEMPLATES["orders"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Orders Directory</h1>\n<divclass='row']]>\n  <divclass='col-lg-2']]>\n    <h4>All Orders</h4>\n    <ul>\n      <li>Orders go here</li>\n    </ul>\n  </div>\n  <divclass='col-lg-10']]>\n    Order View Goes Here\n  </div>\n</div>");
  
});

Ember.TEMPLATES["product"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n  <small class='muted'>$");
  data.buffer.push(escapeExpression((helper = helpers['format-price'] || (depth0 && depth0['format-price']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "format-price", "price", options))));
  data.buffer.push("</small> \n</h1>\n\n<div class='row'>\n  <div class='col-lg-8'>\n    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class='thumbnail col-lg-12' />\n  </div>\n  <div class='col-lg-4'>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n    $");
  data.buffer.push(escapeExpression((helper = helpers['format-price'] || (depth0 && depth0['format-price']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "format-price", "price", options))));
  data.buffer.push(" each<br>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n    <button a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToCart", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Add To Cart!</a>\n  </div>\n</div>\n\n\n\n   ");
  return buffer;
  
});

Ember.TEMPLATES["products"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <li>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          $");
  data.buffer.push(escapeExpression((helper = helpers['format-price'] || (depth0 && depth0['format-price']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "format-price", "price", options))));
  data.buffer.push("\n        </li>\n\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class='thumbnail col-lg-12' /> \n            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

  data.buffer.push("<h1>Digital Directory</h1>\n<div class='row'>\n  <div class='col-lg-2'>\n    <h4>All Things Digital</h4>\n    <ul class='list-unstyled'>\n      ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </div>\n  <div class='col-lg-10'>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});