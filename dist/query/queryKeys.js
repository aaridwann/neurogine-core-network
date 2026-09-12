/**
 * Utility for make Query Keys that consistent and isolated between modules
 * @param {string} scope
 * @returns {Object} - Object with all Query Keys
 */
export const createQueryKeys = (scope) => {
    return {
        all: [scope],
        lists: () => [scope, 'list'],
        list: (filters) => [scope, 'list', filters],
        details: () => [scope, 'detail'],
        detail: (id) => [scope, 'detail', id],
    };
};
