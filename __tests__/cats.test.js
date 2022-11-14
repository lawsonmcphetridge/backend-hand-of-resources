const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('tests for dog route', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/dogs should render a list of cats', async () => {
    const resp = await request(app).get('/cat');
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "breed": "Siamese",
          "id": "1",
          "name": "Udo",
        },
        Object {
          "breed": "Persian",
          "id": "2",
          "name": "Evelina",
        },
        Object {
          "breed": "Ragdoll",
          "id": "3",
          "name": "Chen",
        },
        Object {
          "breed": "Sphynx",
          "id": "4",
          "name": "Vilhelmi",
        },
        Object {
          "breed": "Birman",
          "id": "5",
          "name": "Laurentino",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
