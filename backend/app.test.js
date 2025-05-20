const request = require('supertest');
const app = require('./app');
const mongoose = require('mongoose');

describe('GET /', () => {
  it('should respond with status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
