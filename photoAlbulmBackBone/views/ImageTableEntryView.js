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

// var ImagePanelView = Backbone.View.extend({

//   el: '<img class="image-panel">',

//   initialize: function() {
//     var firstImage = imageData[0];
//     this.model = new ImageModel(firstImage);
//     this.render();
//   },

//   setImage: function(image) {
//     this.model = image;
//     this.render();
//   },

//   render: function() {
//     return this.$el.attr('src', this.model ? this.model.get('url') : '')
//   }

// })