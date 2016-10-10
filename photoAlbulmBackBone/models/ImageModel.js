var ImageModel = Backbone.Model.extend({

  initialize: function(params) {
    this.trigger('changeImage', params)
  },

  changeImage: function() {
    this.trigger('changeImage', this);
  }

});