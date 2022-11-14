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

  it('/cat/1 should render a single cat', async () => {
    const resp = await request(app).get('/cat/1');
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "breed": "Siamese",
        "id": "1",
        "name": "Udo",
      }
    `);
  });

  it('/ should create a cat', async () => {
    const cat = {
      name: 'lawson',
      breed: 'siamese',
    };
    const resp = await request(app).post('/cat').send(cat);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "breed": "siamese",
        "id": "6",
        "name": "lawson",
      }
    `);
  });
    
    
  it('/ should update cat', async () => {
    const resp = await request(app).put('/cat/1').send({ name: 'dabestcat', breed: 'catttt' });
    expect(resp.status).toBe(200);
  });

    
  it('/ should delete a cat', async () => {
    const resp = await request(app).delete('/cat/3');
    expect(resp.status).toBe(200);
    const catNew = await request(app).get('/cat/3');
    expect(catNew.body).toEqual(null);
  });

  afterAll(() => {
    pool.end();
  });
});
