// based on use-persisted-state
// https://github.com/donavon/use-persisted-state/pull/47/commits/f339a883fd2b61537fd0c46131e4be52763d3fe6
import { useState } from 'react';

import usePersistedState from './usePersistedState';
import createStorage from './createStorage';

const getProvider = () => {
  if (typeof global !== 'undefined' && global.localStorage) {
    return global.localStorage;
  }
  // eslint-disable-next-line no-undef
  if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
    // eslint-disable-next-line no-undef
    return globalThis.localStorage;
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage;
  }
  if (typeof localStorage !== 'undefined') {
    return localStorage;
  }
  return null;
};

const createPersistedState: any = (key: any, provider = getProvider()) => {
  if (provider) {
    const storage = createStorage(provider);
    return (initialState: any, reducer: any) =>
      usePersistedState(initialState, reducer, key, storage);
  }
  return useState;
};

export default createPersistedState;