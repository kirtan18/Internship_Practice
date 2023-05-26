const chai = require('chai');
const expect = chai.expect;
const server = require('../app');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Task API', function () {
    it('get User', function (done) {
        chai.request(server)
            .get('/user')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body).to.have.all.keys('data', 'statusText');
                done();
            });
    });
});