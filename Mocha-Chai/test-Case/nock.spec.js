const chai = require('chai');
const expect = chai.expect;
const Student = require('../controllers/studentCtrl');
const studentObj = new Student();
const nock = require('nock');

describe('nock test case', function () {
    it('API Test', function (done) {
        const obj = { status: 'ok', statuscode: 200, data: [] };

        const apiHit = nock('https://mocki.io')
            .get('/v1/b16263c7-4ed9-462d-a461-5d128020df37')
            .reply(200, obj);

        studentObj.thirdPartApi()
            .then(function (record) {
                expect(record).to.be.eql(obj);
                done();
            })
            .catch((error) => {
                done(new Error('error:- ' + error));
            });
    });
});

