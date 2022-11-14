const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('people tests', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/people should render a list of people', async () => {
    const resp = await request(app).get('/people');
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "first_name": "Udale",
          "id": "1",
          "last_name": "Baggelley",
        },
        Object {
          "first_name": "Lorilee",
          "id": "2",
          "last_name": "Whittam",
        },
        Object {
          "first_name": "Jasun",
          "id": "3",
          "last_name": "Yerson",
        },
        Object {
          "first_name": "Bridget",
          "id": "4",
          "last_name": "Bettesworth",
        },
        Object {
          "first_name": "Beth",
          "id": "5",
          "last_name": "Billany",
        },
      ]
    `);
  });

  it('/:id should bring back one person', async () => {
    const resp = await request(app).get('/people/1');
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "first_name": "Udale",
        "id": "1",
        "last_name": "Baggelley",
      }
    `);
  });

  it('/ should create a person', async () => {
    const lawson = {
      first_name: 'lawson',
      last_name: 'mcphetridge',
    };
    const resp = await request(app).post('/people').send(lawson);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "first_name": "lawson",
        "id": "6",
        "last_name": "mcphetridge",
      }
    `);
  });

    
  it('/ should update someone', async () => {
    const resp = await request(app).put('/people/1').send({ first_name: 'newName', last_name: 'Newlastname' });
    expect(resp.status).toBe(200);
  });
    


  it('/ should delete a user', async () => {
    const resp = await request(app).delete('/people/3');
    expect(resp.status).toBe(200);
    const people = await request(app).get('/people/3');
    expect(people.body).toEqual(null);
  });

  afterAll(() => {
    pool.end();
  });
});
