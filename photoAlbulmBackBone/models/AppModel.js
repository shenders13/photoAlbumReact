var AppModel = Backbone.Model.extend({
  initialize: function(params){
    // console.log('imageData: ', imageData);
    this.set('currentImage', new ImageModel(imageData[0]));
    // params refers to an instance of ImageCollection
    params.photocollection.on('changeImage', function(image) {
      this.set('currentImage', image)
    }, this);

    var firstImage = imageData[0];

  }
});