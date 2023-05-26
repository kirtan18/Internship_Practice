const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Student = require('../controllers/studentCtrl');
const studentObj = new Student();
const userCtrl = require('../controllers/userCtrl');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('------ Promise -------', function () {

    it('normal promise value function' , function(done){ 
      
        studentObj.dbdata().then((result) =>{
            expect(result).to.be.equal(10);
            done();// Used for return with execution time
        })
    });

    it('using library promise value function' , function(){  
        // this.timeout(2000); //It's set timeout if it's return value between 2 sec then it will pass otherwise fail 
        this.timeout(0); //If we pass 10 sec or more then it's wait for the api return(infininte time)
    //    expect(studentObj.dbdata()).to.eventually.equal(10);
      return expect(studentObj.dbdata()).to.eventually.equal(10); // Return used for return with execution time
    });

    it('check property OTP' , function(){  
      return expect(userCtrl.newsData()).to.eventually.have.deep.property('otp'); 
    });

});