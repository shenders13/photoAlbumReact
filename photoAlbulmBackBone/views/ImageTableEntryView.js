var ImageTableEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="image_table_entry_row"><span class="title"><%= title %></span></td>'),

  templateBold: _.template('<td class="image_table_entry_row bold"><span class="title"><%= title %></span></td>'),


  events: {
    'click' : function() {
      this.model.changeImage();
    }
  },

  initialize: function(params) {
    this.render(params)
  },

  render: function(params) {

    var selected = params.bold;
    if (selected) {
      return this.$el.html(this.templateBold(this.model.attributes));
    }
    return this.$el.html(this.template(this.model.attributes));
  }

})

