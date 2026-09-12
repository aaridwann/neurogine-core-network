import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import configs from '../../Configs';

import type { TokenGetterTypes } from './ApiClient.types';
import type { NetworkConfigTypes } from '../../Configs/Configs.types';

const { DEFAULT_NETWORK_CONFIG } = configs

let tokenGetterFn: TokenGetterTypes | null = null;

/**
 * Set Auth Token Getter
 * @param {TokenGetterTypes} fn Token Getter Function
 */
export const setAuthTokenGetter = (fn: TokenGetterTypes) => {
    tokenGetterFn = fn;
};

/**
 * Create API Client
 * @param {NetworkConfigTypes} config Network Configuration
 * @returns {AxiosInstance} Axios Instance
 */
export const createApiClient =
    (config: NetworkConfigTypes = DEFAULT_NETWORK_CONFIG): AxiosInstance => {
        const instance = axios.create({
            baseURL: config.baseURL,
            timeout: config.timeout,
            headers: config.headers,
        });

        instance.interceptors.request.use(
            async (reqConfig: InternalAxiosRequestConfig) => {
                if (tokenGetterFn) {
                    const token = await tokenGetterFn();
                    if (token && reqConfig.headers) {
                        reqConfig.headers.Authorization = `Bearer ${token}`;
                    }
                }
                return reqConfig;
            },
            (error) => Promise.reject(error),
        );

        instance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    // Pemicu event logout global jika diperlukan
                }
                return Promise.reject(error);
            },
        );

        return instance;
    };

export const apiClient = createApiClient();