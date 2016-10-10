var ImageTableView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th class="photo-albulm-title">Album</th>').append(
      this.collection.map(function(image) {
        return new ImageTableEntryView({model: image}).render();
      })
    );
  }

})