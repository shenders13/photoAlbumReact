var ImagePanelView = Backbone.View.extend({

  el: '<img class="image-panel">',

  initialize: function() {
    var firstImage = imageData[0];
    this.model = new ImageModel(firstImage);
    this.render();
  },

  // events: {}

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '')
  }

})