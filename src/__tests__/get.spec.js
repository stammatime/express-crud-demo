import { Request } from 'jest-express/lib/request';
import { endpoint } from '../src/endpoint.js';
 
let request;

const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5HZXQiOnRydWUsImNhblBvc3QiOnRydWUsImNhblB1dCI6dHJ1ZSwiY2FuRGVsZXRlIjpmYWxzZSwiaWF0IjoxNTE2MjM5MDIyfQ.GzQDgpIOrRT7ET1gnHNNWxFsJv2JfQ0IRTDnBgV2Akk"
 
describe('Endpoint', () => {
  beforeEach(() => {
    request = new Request('/widget', {
      headers: {
        Accept: 'Application/json',
        Authorization: `Bearer ${JWT}`
      }
    });
  });
 
  afterEach(() => {
    request.resetMocked();
  });
 
  test('should setup endpoint', () => {
    endpoint(request);
 
    expect(request).toBeCalled();
  });

  // Test that Get will work if JWT allows on canGet
  // Test that Get will return unauth if canGet = false
  // Test that we get all results as expected when req is correct
  // Test that we give informative message when body is incorrect (not implemented)
});