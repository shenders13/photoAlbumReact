var AppModel = Backbone.Model.extend({
  initialize: function(params){
    this.set('currentImage', new ImageModel());

    // params refers to an instance of ImageCollection
    params.photocollection.on('[INSERT COLLECTION METHOD]', function(image) {
      this.set('currentImage', image)
    }, this);

  }
});