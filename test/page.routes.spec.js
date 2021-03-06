var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);
var models = require('../models');
var Page = models.Page;
var User = models.User;

var supertest = require('supertest');
var app = require('../app');
var agent = supertest.agent(app)

//users
  //methods
    //all users
    //users/id
//wiki
  //test getAuthor
  //test similar
  //delete
  //edit

describe('http requests', function () {

  describe('GET /wiki', function () {
    it('gets 200 on index', function (done) {
      agent
      .get('/wiki')
      .expect(200, done);
    });
  });
  describe('GET /wiki/add', function () {
    it('responds with 200');
  });

  describe('GET /wiki/:urlTitle', function () {
    it('responds with 404 on page that does not exist');
    it('responds with 200 on page that does exist');
  });

  describe('GET /wiki/search/:tag', function () {
    it('responds with 200');
  });

  describe('GET /wiki/:urlTitle/similar', function () {
    it('responds with 404 for page that does not exist');
    it('responds with 200 for similar page');
  });

  describe('POST /wiki', function () {
    it('responds with 302');
    it('creates a page in the database');
  });

//   agent
// .post('/some/route')
// .send({someProp: 'someString'});

});
