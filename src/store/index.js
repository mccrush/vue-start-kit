import { createStore } from 'vuex'
import auth from './modules/auth'
import database from './modules/database'

export default createStore({
  modules: {
    auth,
    database
  }
})