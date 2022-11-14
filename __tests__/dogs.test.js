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

  it('/dog/1 should render a single dog', async () => {
    const resp = await request(app).get('/dog/1');
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "breed": "Golden",
        "id": "1",
        "name": "Hendricus",
      }
    `);
  });

  it('/ should create a dog', async () => {
    const dog = {
      name: 'lawson',
      breed: 'golden',
    };
    const resp = await request(app).post('/dog').send(dog);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "breed": "golden",
        "id": "6",
        "name": "lawson",
      }
    `);
  });
    
    
  it('/ should update dog', async () => {
    const resp = await request(app).put('/dog/1').send({ name: 'newNewName', breed: 'daDog' });
    expect(resp.status).toBe(200);
  });
    
    
  it('/ should delete a dog', async () => {
    const resp = await request(app).delete('/dog/3');
    expect(resp.status).toBe(200);
    const dogE = await request(app).get('/dog/3');
    expect(dogE.body).toEqual(null);
  });

  afterAll(() => {
    pool.end();
  });
});
