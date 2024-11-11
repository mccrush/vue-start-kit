export default {
  state: {
    loading: false,

    currentUser: null
  },

  mutations: {
    setItems(state, { type, items }) {
      state[type] = items
    },
    setCurrentUser(state, { data }) {
      state.currentUser = data
    }
  },

  actions: {
    async deleteItem({ commit }, { item }) {
      try {

        if (error) throw error
      } catch (error) {
        console.error('database.js deleteItem()', error)
      }
    },

    async updateItem({ commit }, { item }) {
      try {

        if (error) throw error
      } catch (error) {
        console.error('database.js updateItem()', error)
      }
    },

    async addItem({ commit }, { item }) {
      try {

        if (error) throw error
      } catch (error) {
        console.error('database.js addItem()', error)
      }
    },

    async getItems({ commit }, { type }) {
      try {

        if (error) throw error
        if (data) {
          commit('setItems', { type, items: data })
        }
      } catch (error) {
        console.error('database.js getItems()', error)
      }
    }
  },

  getters: {
    loading: state => state.loading,

    currentUser: state => state.currentUser
  }
}