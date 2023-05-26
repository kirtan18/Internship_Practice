const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Student = require('../controllers/studentCtrl');
const studentObj = new Student();

describe('------ Sinon -------', function () {
    
    it('test user function', function () {
        expect(studentObj.userId()).to.be.equal(12);
    });
    
    // it('function count' , function(){
    //     var spyObj = sinon.spy(studentObj,'getInfo');
    //     studentObj.home(5);
    //     expect(spyObj.calledOnce).to.be.true;
    // });

    it('function argument check' , function(){
        var spyObj = sinon.spy(studentObj,'getInfo');
        studentObj.home(5);
        expect(spyObj.calledWith(5,1)).to.be.true;
    });

});