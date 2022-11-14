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

  it('/overwatch/1 should render a single char', async () => {
    const resp = await request(app).get('/overwatch/1');
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "id": "1",
        "name": "Mercy",
        "role": "Healer",
      }
    `);
  });

  it('/overwatch should create a char', async () => {
    const newChar = {
      name: 'new',
      role: 'tank',
    };
    const resp = await request(app).post('/overwatch').send(newChar);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "id": "6",
        "name": "new",
        "role": "tank",
      }
    `);
  });
    
    
    
  it('/ should update a char', async () => {
    const resp = await request(app).put('/overwatch/1').send({ name: 'testname', role: 'healer' });
    expect(resp.status).toBe(200);
  });
    
    
    
  afterAll(() => {
    pool.end();
  });
});
