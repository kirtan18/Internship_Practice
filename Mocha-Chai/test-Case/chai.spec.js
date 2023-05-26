const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

// ################## Assert ###################

describe('---- Aspect Check -----', function () {

    let userName = "Code Improve";
    let mylist = {
        item: [{
            id: 1, name: 'abc'
        }],
        title: 'User List'
    }
    it('Check String', function () {
        assert.typeOf(userName, 'string');
    });

    it('Equal match', function () {
        assert.equal(userName, 'Code Improve');
    });

    it('Length match', function () {
        assert.lengthOf(mylist.item, 1);
    });
});


// ################## Should ###################

describe('---- Should Check -----', function () {

    let userName = 'Code Improve';
    let mylist = {
        item: [{
            id: 1, name: 'abc'
        }],
        title: 'User List'
    }
    it('Check String', function () {
        userName.should.be.a('string');
    });

    it('Equal match', function () {
        userName.should.equal(userName, 'Code Improve');
    });

    it('Length match', function () {
        mylist.should.have.property('item').with.lengthOf(1);
    });
});


// ################## expect ###################

describe('---- expect Check -----', function () {

    let userName = 'Code Improve';
    let mylist = {
        item: [{
            id: 1, name: 'abc'
        }],
        title: 'User List',
        address : {
            country: 'India',
            phoneNo : ['1234567890','0987654321']
        }
    }
    it('Check String', function () {
        expect(userName).to.be.a('string');
    });

    it('Equal match', function () {
        expect(userName).to.equal(userName, 'Code Improve');
    });

    it('Length match', function () {
        expect(mylist).to.have.property('item').with.lengthOf(1);
    });

    it('API object match', function () {
        expect(mylist).to.have.all.keys('item','title','address');
    });
    
    it('Phone no' , function(){
        expect(mylist).to.have.nested.property('address.phoneNo[0]');
    })
    
    it('country Name' , function(){
        expect(mylist).to.have.nested.include({'address.country':'India'});
    })
 
});


if(false) {
    console.log("sasdasd");
}
