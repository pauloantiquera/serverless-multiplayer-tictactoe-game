'use strict'

const ping = require('../app/ping')
const expect = require('chai').expect
const sinon = require('sinon')

describe('ping function', () => {
  it('should invoke a given callbackFunction', () => {
    const callbackFunction = sinon.fake()

    ping(null, null, callbackFunction)

    expect(callbackFunction.calledOnce).to.be.true
  })

  it('should pass as param to the callbackFunction a response object', () => {
    const callbackFunction = sinon.spy()

    ping (null, null, callbackFunction)

    const expectedReponseObject = {
      statusCode: 200,
      body: sinon.match.string
    }

    expect(callbackFunction.calledWith(sinon.match.any, sinon.match(expectedReponseObject))).to.be.true
  })
})