/**
 * Utilities to remove keys with value is undefined, null or empty
 * Useful for clearing parameter objects, to not display empty parameters in the url
 */
 export const cleanObject = (object?: Record<string, any>) => {
  if (!object) return {};
  Object.keys(object).forEach(key => {
    const value = object[key];
    if (value === undefined || value === null || value === '') {
      delete object[key];
    }
  });
  return object;
};