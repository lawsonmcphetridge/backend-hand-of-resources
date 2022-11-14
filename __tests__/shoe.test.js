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

  it('/:id should bring back one shoe', async () => {
    const resp = await request(app).get('/shoes/1');
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "brand": "dunk",
        "id": "1",
        "name": "nike",
      }
    `);
  });
    
  it('/ should create a shoe', async () => {
    const newShoe = {
      name: 'lawson',
      brand: 'nike',
    };
    const resp = await request(app).post('/shoes').send(newShoe);
    expect(resp.body).toMatchInlineSnapshot();
  });


  afterAll(() => {
    pool.end();
  });
});
