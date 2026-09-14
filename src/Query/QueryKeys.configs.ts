/**
 * Utility for make Query Keys that consistent and isolated between modules
 * @param {string} scope
 * @returns {Object} - Object with all Query Keys
 */
export const createQueryKeys = <T extends string>(
  scope: T,
): Record<string, unknown> => {
  return {
    all: [scope] as const,
    lists: () => [scope, 'list'] as const,
    list: (filters: Record<string, unknown>) => [scope, 'list', filters] as const,
    details: () => [scope, 'detail'] as const,
    detail: (id: string | number) => [scope, 'detail', id] as const,
  };
};