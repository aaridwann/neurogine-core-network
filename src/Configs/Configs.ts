import type { NetworkConfigTypes } from "./Configs.types"

const DEFAULT_NETWORK_CONFIG: NetworkConfigTypes = {
    baseURL: 'https://dummyjson.com/',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

export default { DEFAULT_NETWORK_CONFIG }