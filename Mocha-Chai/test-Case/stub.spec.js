const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Student = require('../controllers/studentCtrl');
const studentObj = new Student();

describe('------ Stub -------', function () {

    it('function value check' , function(){  
        var stub = sinon.stub(studentObj,'getExternal');
        stub.withArgs(40).returns(5); // 5
        expect(studentObj.finalMarks(40)).to.be.equal(54); // 39(internal) + 5(return external) + 10 => 54
    });

});