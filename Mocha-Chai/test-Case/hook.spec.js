const chai = require('chai');
const expect = chai.expect;
const sinon  = require('sinon');

describe('Heading 1',function(){
     
    after(function(){
        console.log("====== End ======");
    });

    before(function(){
        console.log("====== Start ======")
    });

    afterEach(function(){
        console.log("====== After Every Test Case ======")
    });

    beforeEach(function(){
        console.log("====== Before Every Test Case ======");
    });

    
    let data  = 'code';

    it('check String' , function(){
        expect(data).to.be.a('string');
    });

    it('check value' , function(){
        expect(data).to.be.equal('code');
    });
})