'use strict';

const mock = require('egg-mock');

describe('test/airtable.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/airtable-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, airtable')
      .expect(200);
  });
});
