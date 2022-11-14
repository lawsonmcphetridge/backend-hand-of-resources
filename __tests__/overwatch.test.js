const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('tests for dog route', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/overwatch should render a list of characters', async () => {
    const resp = await request(app).get('/overwatch');
  });
    
    
    
    
    
  afterAll(() => {
    pool.end();
  });
});
