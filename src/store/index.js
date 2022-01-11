import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {
        id: 1,
        name: 'kowalski',
        fixed: false,
        lastMessage: 'A chave está embaixo do tapete',
        timestamp: '2022-02-25 10:07:05',
        profilePhoto: 'kowalski.jpg',
        unverifiedMessages: 1,
        isArchived: false
      },
      {
        id: 2,
        name: 'Capitão',
        fixed: false,
        lastMessage: 'Kowalski, relatório!',
        timestamp: '2022-02-25 10:06:05',
        profilePhoto: 'capitao.jpg',
        unverifiedMessages: 1,
        isArchived: false
      },
      {
        id: 3,
        name: 'Rico',
        fixed: false,
        lastMessage: 'Bleeeh!',
        timestamp: '2022-02-25 10:05:05',
        profilePhoto: 'rico.png',
        unverifiedMessages: 1,
        isArchived: false
      },
      {
        id: 4,
        name: 'Recruta',
        fixed: false,
        lastMessage: 'Olha uma flor!',
        timestamp: '2022-02-25 10:07:05',
        profilePhoto: 'recruta.png',
        unverifiedMessages: 1,
        isArchived: false
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getContactsAvailables(state) {
      return state.contacts.filter(contact => !contact.isArchived)
    }
  },
  modules: {
  }
})
