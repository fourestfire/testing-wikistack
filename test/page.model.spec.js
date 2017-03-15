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
      xit('returns the url_name prepended by "/wiki/"', function(){
        page.urlTitle = "test_Title"
        expect(page.route).to.eql("/wiki/test_Title");
      });
    });
    describe('renderedContent', function () {
      xit('converts the markdown-formatted content into HTML', function(){

      });
    });
  });

  describe('Class methods', function () {
    describe('findByTag', function () {
      xit('gets pages with the search tag', function (done) {
          Page.findByTag('bar')
          .then(function (pages) {
            expect(pages).to.have.lengthOf(1);
            done();
          })
          .catch(done);
        });

      xit('does not get pages without the search tag', function (done) {
        Page.findByTag('falafel')
        .then(function (pages) {
          expect(pages).to.have.lengthOf(0);
          done();
        })
        .catch(done);
      });
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
    var page;
    beforeEach(function () {
      page = Page.build();
    });

    it('errors without title', function (done) {
      page.validate()
      .then(function (err) {
        expect(err).to.exist;
        expect(err.errors).to.exist;
        expect(err.errors[0].path).to.equal('title');
        done();
      });
    });
    it('errors without content', function(done) {
      page.validate()
      .then(function (err) {
        expect(err).to.exist;
        expect(err.errors).to.exist;
        expect(err.errors[2].path).to.equal('content');
        done();
      });
    });
    xit('errors given an invalid status', function(done) {
      page.validate()
      .then(function (err) {
        expect(err).to.exist;
        expect(err.errors).to.exist;
        expect(err.errors[3].path).to.equal('status');
        done();
      });
  });
})
  describe('Hooks', function () {
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

    xit('it sets urlTitle based on title before validating', function(){
      expect(page.urlTitle).to.eql("test_Title");
    });
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
