var ImageTableEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="image_table_entry_row"><span class="title"><%= title %></span></td>'),

  events: {
    'click' : function() {
      this.model.changeImage();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

})