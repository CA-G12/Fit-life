const router = require('../src/app')
const supertest = require('supertest')

describe('Test Globals', () => {
    test('Test Home', (done) => {
        supertest(router)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                return done();
            })
    })
});


describe('Test Auth', () => {
    test('Test Register Front End', (done) => {
        supertest(router)
            .get('/sign-up')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                return done();
            })
    })
    test('Test Register Back End', (done) => {
        supertest(router)
            .post('/sign-up-form')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                return done();
            })
    })
});
