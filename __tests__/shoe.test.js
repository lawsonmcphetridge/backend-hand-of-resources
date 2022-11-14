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
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "brand": "dunk",
          "id": "1",
          "name": "nike",
        },
        Object {
          "brand": "slides",
          "id": "2",
          "name": "yeezy",
        },
        Object {
          "brand": "SwiftRun",
          "id": "3",
          "name": "adidas",
        },
        Object {
          "brand": "zebra",
          "id": "4",
          "name": "yeezy",
        },
        Object {
          "brand": "vans",
          "id": "5",
          "name": "classic",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
