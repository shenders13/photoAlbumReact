var ImagePanelView = Backbone.View.extend({

  el: '<img>',

  initialize: function() {
  },

  // events: {}

  // setImage: function(image) {
  //   this.model = image;
  //   this.render();
  // },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '')
  }

})