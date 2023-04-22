// lotrSDK.test.ts

import { LotrSDK } from '@core/setup';

describe('LotrSDK', () => {
  const apiKey = 'testApiKey';
  const version = 'testVersion';
  const lotrSDK = new LotrSDK(apiKey, version);

  it('should return the API key', () => {
    expect(lotrSDK.getApiKey()).toBe(apiKey);
  });

  it('should return the API version', () => {
    expect(lotrSDK.getApiVersion()).toBe(version);
  });
});
