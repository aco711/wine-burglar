'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var recCtrlStub = {
  index: 'recCtrl.index',
  show: 'recCtrl.show',
  create: 'recCtrl.create',
  update: 'recCtrl.update',
  destroy: 'recCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var recIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './rec.controller': recCtrlStub
});

describe('Rec API Router:', function() {

  it('should return an express router instance', function() {
    recIndex.should.equal(routerStub);
  });

  describe('GET /api/recs', function() {

    it('should route to rec.controller.index', function() {
      routerStub.get
        .withArgs('/', 'recCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/recs/:id', function() {

    it('should route to rec.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'recCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/recs', function() {

    it('should route to rec.controller.create', function() {
      routerStub.post
        .withArgs('/', 'recCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/recs/:id', function() {

    it('should route to rec.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'recCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/recs/:id', function() {

    it('should route to rec.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'recCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/recs/:id', function() {

    it('should route to rec.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'recCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
