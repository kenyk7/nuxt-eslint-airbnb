// Store

export const state = () => ({
  tplLayout: '',
});

export const getters = {};

export const mutations = {
  setLayout(store, name) {
    store.tplLayout = name;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    let layout = 'default';
    if (process.env.NODE_ENV !== 'local') {
      layout = req.headers.organizerdomain || 'joinnus';
    }
    await commit('setLayout', layout);
  },
};
