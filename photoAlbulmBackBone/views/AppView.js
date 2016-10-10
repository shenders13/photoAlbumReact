var AppView = Backbone.View.extend({

  // initialize runs with params = 
  initialize: function() {
    this.imagePanelView = new ImagePanelView({model: this.model.get('currentSong')});
    this.imageTableView = new ImageTableView({collection: this.model.get('photocollection')});
  },

  render: function() {
    return this.$el.html([
      this.imagePanelView.$el,
      this.libraryView.$el
    ]);
  }
});