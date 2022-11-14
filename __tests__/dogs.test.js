const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('tests for dog route', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/dogs should render a list of dogs', async () => {
    const resp = await request(app).get('/dog');
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "breed": "Golden",
          "id": "1",
          "name": "Hendricus",
        },
        Object {
          "breed": "German",
          "id": "2",
          "name": "Freyr",
        },
        Object {
          "breed": "Poodle",
          "id": "3",
          "name": "Heimir",
        },
        Object {
          "breed": "Bulldog",
          "id": "4",
          "name": "Helios",
        },
        Object {
          "breed": "Husky",
          "id": "5",
          "name": "Berna",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
