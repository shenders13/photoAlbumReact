var ImageRatingView = Backbone.View.extend({

  template: _.template('<div class="rating"><center><span class="rating-number-digit"><%= rating %></span><br><span class="rating-number">Rating</span></center><select id="soflow" name="cars"><option selected>rate<option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>'),

  events: {
    "change #soflow": function(event) {
      var newVal = $(event.target).val();
      console.log('newVal: ', newVal);
      console.log(this.model.get('rating'));
      this.model.set('rating', newVal);
      console.log(this.model.get('rating'));
      this.render();
    }
  },

  initialize: function(params) {
    var firstImage = imageData[0];
    this.model = new ImageModel(firstImage);
    this.render(params);
  },

  // ratingSelected: function() {
  //   console.log('selection was made');
  //   // update rating in model to new selection

  //   // call render
  // },

  setImage: function(image) {
    this.model = image;
    this.render(image);
  },

  render: function(params) {
    return this.$el.html(this.template(this.model.attributes));
  }

});