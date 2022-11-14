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
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "name": "Mercy",
          "role": "Healer",
        },
        Object {
          "id": "2",
          "name": "DoomFist",
          "role": "Tank",
        },
        Object {
          "id": "3",
          "name": "Mcree",
          "role": "Dps",
        },
        Object {
          "id": "4",
          "name": "Tracer",
          "role": "Dps",
        },
        Object {
          "id": "5",
          "name": "Roadhog",
          "role": "Tank",
        },
      ]
    `);
  });

  it('/overwatch/1 should render a single char', async (req, res) => {
    const resp = await request(app).get('/overwatch/1');
  });
    
    
  afterAll(() => {
    pool.end();
  });
});
