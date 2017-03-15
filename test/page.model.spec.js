var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);
var models = require('../models');
var Page = models.Page;

describe('Page model', function () {

  describe('Virtuals', function () {

    var page;
    beforeEach(function (done) {
      page = Page.create({
        title: "test Title",
        content: "someContent",
        tags: ['foo', 'bar']
      }).then(function(){
        done();
      }).catch(done);
    });

    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"', function(){
        page.urlTitle = "test_Title"
        expect(page.route).to.eql("/wiki/test_Title");
      });
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML', function(){
        
      });
    });
  });

  describe('Class methods', function () {
    describe('findByTag', function () {
      it('gets pages with the search tag');
      it('does not get pages without the search tag');
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});

// describe('Page model tests', function () {
//   describe('Basic page model functionality', function () {
//     it('tests something');
//     it('tests another aspect of the same thing');
//   });
//   describe('Page model advanced properties');
// });
// describe('A different category');
//
// // all page fields are present
// // page content cannot take nulls
// // urlTitle loading properly
//
// // classMethods working
// // getterMethods working
// // instancemethods working
