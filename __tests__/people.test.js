const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const { request } = require('../lib/app');
const app = require('../lib/app');


describe('backend-express-template routes', () => {
    beforeEach(() => {
        return setup(pool);
    });



    it('/people should render a list of people', async () => {
        const resp = await request(app).get('/people');
        expect(resp).toBe(200);
    });





    afterAll(() => {
        pool.end();
    });
});