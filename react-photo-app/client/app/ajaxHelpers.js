var getImages = function(callback) {
  $.ajax({
    url: 'http://localhost:8080/images',
    type: 'GET',
    success: function(data) {
      return callback(data) ;
    },
    error: function(error) {
      console.error('ajax GET request failed: ', error);
    }
  });
};

var postImage = function(image, callback) {
  console.log('postImage is being called! data: ', image);
  $.post({
    url: "http://localhost:8080/image",
    data: image,
    success: function(image) {
      callback(image);
    },
    error: function(error) {
      console.error('Failed to post new image: ', error);
      callback(error);
    }
  });
};

var ajaxHelpers = {getImages: getImages, postImage: postImage};

export default ajaxHelpers;
