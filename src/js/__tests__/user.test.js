/* eslint-disable no-unused-vars */
import { loadUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('load user', () => {
  httpGet.mockReturnValue('{}');

  loadUser(1);

  expect(httpGet).toBeCalledTimes(1);
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});

test('load user', () => {
  httpGet.mockReturnValue('{}');

  loadUser();

  expect(httpGet).toBeCalledTimes(1);
  expect(httpGet).toBeCalledWith('http://server:8080/users/undefined');
});
