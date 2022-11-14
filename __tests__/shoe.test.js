const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('tests for dog route', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/ should render a list of shoes', async () => {
    const resp = await request(app).get('/shoes');
    expect(resp.body).toMatchInlineSnapshot();
  });
    
    
    
  afterAll(() => {
    pool.end();
  });
});
