var ImageTableView = Backbone.View.extend({

  tagName: 'table',

  initialize: function(params) {
    // this.set('currentImage', params.currentImage)
    this.setImage(params.currentImage);
    // this.setImage(params.currentImage)
  },

  setImage: function(currentImage) {
    this.currentImage = currentImage;
    this.render(currentImage);
  },

  render: function(currentImage) {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th class="photo-albulm-title">Album</th>').append(
      this.collection.map(function(image) {
        var match = image.toJSON().url === currentImage.toJSON().url;
        return new ImageTableEntryView({model: image, bold: match}).render({model: image, bold: match});
      })
    );
  }

})