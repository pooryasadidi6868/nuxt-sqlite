import { upperFirst } from 'lodash-es'
import { apiStatus } from '../constants/apiStatus'
export const apiStatusComputedFactory = (reactivePropertyKey = "") => {
  /**
   * Object to store computed getters for
   * different API statuses
   */
  let computed = {};
  /**
   * Loop through API statuses
   * IDLE, PENDING, SUCCESS, ERROR
   */
  for (const [statusKey, statusValue] of Object.entries(apiStatus)) {
    /**
     * Normalise status key
     * IDLE -> Idle
     * SUCCESS -> Success
     */
    const normalisedStatus = upperFirst(statusKey.toLowerCase());
    /**
     * Add a computed property
     */
    computed[`${reactivePropertyKey}${normalisedStatus}`] = function() {
      return this[reactivePropertyKey] === statusValue;
    };
  }
  return computed;
};
