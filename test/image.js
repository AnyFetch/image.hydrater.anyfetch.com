'use strict';

require('should');
var fs = require('fs');
 
var imageHydrater = require('../lib/hydrater-image');


describe('Test results', function() {
  it('returns the correct informations', function(done) {
    var document = {
      metadatas: {}
    };

    imageHydrater(__dirname + "/samples/imagemagick.jpg", document, function(err, document) {
      if(err) {
        throw err;
    }

      document.should.have.property('thumb');
      document.should.have.property('binary_document_type', "document");
      document.metadatas.should.have.property('content-encoding', 'ISO-8859-1');

      done();
    });
  });
});
