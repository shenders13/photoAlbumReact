var AppView = Backbone.View.extend({

  // initialize runs with params = 
  initialize: function() {
    this.imagePanelView = new ImagePanelView({model: this.model.get('currentSong')});
    this.imageTableView = new ImageTableView({collection: this.model.get('photocollection')});

    this.model.on('change:currentImage', function(model) {
      this.imagePanelView.setImage(model.get('currentImage'));
    }, this);

  },

  render: function() {
    return this.$el.html([
      this.imagePanelView.$el,
      this.imageTableView.$el
    ]);
  }
});