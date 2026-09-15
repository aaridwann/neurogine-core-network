import axios from 'axios';

import { createApiClient, setAuthTokenGetter } from './ApiClient';
import configs from '../../Configs';

jest.mock('axios', () => {
  const mockAxiosInstance = {
    interceptors: {
      request: { use: jest.fn() },
      response: { use: jest.fn() },
    },
  };

  return {
    create: jest.fn(() => mockAxiosInstance),
  };
});

describe('ApiClient', () => {
  let mockAxiosInstance: any;

  beforeEach(() => {
    jest.clearAllMocks();
    mockAxiosInstance = (axios.create as jest.Mock)();
  });

  describe('createApiClient', () => {
    it('should create an Axios instance with default configuration', () => {
      createApiClient();

      expect(axios.create).toHaveBeenCalledWith({
        baseURL: configs.DEFAULT_NETWORK_CONFIG.baseURL,
        timeout: configs.DEFAULT_NETWORK_CONFIG.timeout,
        headers: configs.DEFAULT_NETWORK_CONFIG.headers,
      });
    });

    it('should create an Axios instance with custom configuration', () => {
      const customConfig = {
        baseURL: 'https://api.example.com',
        timeout: 5000,
        headers: { 'Content-Type': 'application/json' },
      };

      createApiClient(customConfig);

      expect(axios.create).toHaveBeenCalledWith(customConfig);
    });

    it('should register request and response interceptors', () => {
      createApiClient();

      expect(mockAxiosInstance.interceptors.request.use).toHaveBeenCalled();
      expect(mockAxiosInstance.interceptors.response.use).toHaveBeenCalled();
    });
  });

  describe('Request Interceptor Behavior', () => {
    it('should add Authorization header when tokenGetterFn returns a token', async () => {
      createApiClient();

      const requestHandler = mockAxiosInstance.interceptors.request.use.mock.calls[0][0];      const mockTokenGetter = jest.fn().mockResolvedValue('mock-access-token');
      setAuthTokenGetter(mockTokenGetter);

      const mockReqConfig = { headers: {} } as any;
      const resultConfig = await requestHandler(mockReqConfig);

      expect(mockTokenGetter).toHaveBeenCalled();
      expect(resultConfig.headers.Authorization).toBe('Bearer mock-access-token');
    });

    it('should not modify Authorization header when token is empty or null', async () => {
      createApiClient();
      const requestHandler = mockAxiosInstance.interceptors.request.use.mock.calls[0][0];      const mockTokenGetter = jest.fn().mockResolvedValue(null);
      setAuthTokenGetter(mockTokenGetter);

      const mockReqConfig = { headers: {} } as any;
      const resultConfig = await requestHandler(mockReqConfig);

      expect(resultConfig.headers.Authorization).toBeUndefined();
    });

    it('should reject when a request error occurs', async () => {
      createApiClient();
      const errorHandler = mockAxiosInstance.interceptors.request.use.mock.calls[0][1];      const mockError = new Error('Network Error');
      await expect(errorHandler(mockError)).rejects.toThrow('Network Error');
    });
  });

  describe('Response Interceptor Behavior', () => {
    it('should return response directly on success', () => {
      createApiClient();
      const responseHandler = mockAxiosInstance.interceptors.response.use.mock.calls[0][0];      const mockResponse = { data: 'success', status: 200 };
      expect(responseHandler(mockResponse)).toBe(mockResponse);
    });

    it('should reject error when response status is 401', async () => {
      createApiClient();
      const errorHandler = mockAxiosInstance.interceptors.response.use.mock.calls[0][1];      const mockError = { response: { status: 401 } };
      await expect(errorHandler(mockError)).rejects.toEqual(mockError);
    });
  });
});