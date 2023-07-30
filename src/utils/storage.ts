import store from 'store';

const storage: StorageUtil = {
  save(key, value) {
    store.set(key, value);
  },

  get(key) {
    return store.get(key) || {};
  },

  remove(key) {
    store.remove(key);
  },
};

export default storage;
