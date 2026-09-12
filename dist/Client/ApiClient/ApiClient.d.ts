import { AxiosInstance } from 'axios';
import type { TokenGetterTypes } from './ApiClient.types';
import type { NetworkConfigTypes } from '../../Configs/Configs.types';
/**
 * Set Auth Token Getter
 * @param {TokenGetterTypes} fn Token Getter Function
 */
export declare const setAuthTokenGetter: (fn: TokenGetterTypes) => void;
/**
 * Create API Client
 * @param {NetworkConfigTypes} config Network Configuration
 * @returns {AxiosInstance} Axios Instance
 */
export declare const createApiClient: (config?: NetworkConfigTypes) => AxiosInstance;
export declare const apiClient: AxiosInstance;
//# sourceMappingURL=ApiClient.d.ts.map