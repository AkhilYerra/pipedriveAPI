process.env.NODE_ENV = 'test';

const assert = require('assert');
const app = require('../app')
const sinon = require('sinon')
const pipedrive = require('pipedrive')
const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const personController = require('../server/controllers/personController')
const personService = require('../server/services/personService')
const mockCreatePerson = require('./data/mockCreatePerson.json');
const { mock } = require('sinon');
describe('Add a person Unit Test', () => {
  before(function () {
    sinon.stub(personService, 'createPersonService')
    sinon.stub(personService, 'updatePersonService')
  });

  after(function () {
    personService.createPersonService.restore();
    personService.updatePersonService.restore();
  })

  it('Create Person Service works as expected', async () => {// <= Pass in done callback
    personService.createPersonService.resolves(mockCreatePerson)
    let res = await chai.request(app)
      .post('/persons')
      .send(mockCreatePerson)
      expect(res.status).to.equal(200)
  });

  it('Update Person Service works as expected', async () => {// <= Pass in done callback
    personService.updatePersonService.resolves(mockCreatePerson)
    let res = await chai.request(app)
      .put('/persons/1234')
      .send(mockCreatePerson)
      expect(res.status).to.equal(200)
  });

});