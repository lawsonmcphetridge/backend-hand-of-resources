const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { People } = require('../lib/models/peopleModel');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/people should render a list of people', async () => {
    const resp = await request(app).get('/people');
    const expected = await People.getAllPeople();
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
    const expected = await People.getSinglePerson('1');
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "first_name": "Udale",
        "id": "1",
        "last_name": "Baggelley",
      }
    `);
  });

    
    it('/ should insert into people', async () => {
        const resp = await request(app).get('/people')
        expect(resp).toBe(200);
    })
    
    
    
  afterAll(() => {
    pool.end();
  });
});
