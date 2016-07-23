'use strict';

var app = require('../..');
import request from 'supertest';

var newRec;

describe('Rec API:', function() {

  describe('GET /api/recs', function() {
    var recs;

    beforeEach(function(done) {
      request(app)
        .get('/api/recs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          recs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      recs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/recs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/recs')
        .send({
          name: 'New Rec',
          info: 'This is the brand new rec!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRec = res.body;
          done();
        });
    });

    it('should respond with the newly created rec', function() {
      newRec.name.should.equal('New Rec');
      newRec.info.should.equal('This is the brand new rec!!!');
    });

  });

  describe('GET /api/recs/:id', function() {
    var rec;

    beforeEach(function(done) {
      request(app)
        .get('/api/recs/' + newRec._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          rec = res.body;
          done();
        });
    });

    afterEach(function() {
      rec = {};
    });

    it('should respond with the requested rec', function() {
      rec.name.should.equal('New Rec');
      rec.info.should.equal('This is the brand new rec!!!');
    });

  });

  describe('PUT /api/recs/:id', function() {
    var updatedRec;

    beforeEach(function(done) {
      request(app)
        .put('/api/recs/' + newRec._id)
        .send({
          name: 'Updated Rec',
          info: 'This is the updated rec!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRec = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRec = {};
    });

    it('should respond with the updated rec', function() {
      updatedRec.name.should.equal('Updated Rec');
      updatedRec.info.should.equal('This is the updated rec!!!');
    });

  });

  describe('DELETE /api/recs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/recs/' + newRec._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when rec does not exist', function(done) {
      request(app)
        .delete('/api/recs/' + newRec._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
