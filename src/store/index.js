import Vue from 'vue';
import Vuex from 'vuex';
import toast from './moduleToast';
import dialog from './moduleDialog';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tickets: [
      {
        origin: 'Portoviejo',
        destination: 'Sioux Falls',
        departure: '2022/07/17',
        return: '2022/07/31',
        price: 1000,
        airline: 'Proin',
        scales: 4,
        duration: 9,
      },
      {
        origin: 'Portoviejo',
        destination: 'Layton',
        departure: '2022/07/27',
        return: '2022/08/27',
        price: 1000,
        airline: 'Morbi',
        scales: 2,
        duration: 6,
      },
      {
        origin: 'Quito',
        destination: 'Missoula',
        departure: '2022/07/27',
        return: '2022/09/12',
        price: 1000,
        airline: 'Maecenas',
        scales: 2,
        duration: 14,
      },
      {
        origin: 'Guayaquil',
        destination: 'Missoula',
        departure: '2022/07/27',
        return: '2022/10/10',
        price: 1000,
        airline: 'Fusce',
        scales: 3,
        duration: 7,
      },
      {
        origin: 'Santo Domingo',
        destination: 'Burlington',
        departure: '2022/08/27',
        return: '2022/09/27',
        price: 1000,
        airline: 'Donec',
        scales: 2,
        duration: 9,
      },
      {
        origin: 'Quito',
        destination: 'Nashua',
        departure: '2022/07/28',
        return: '2022/10/27',
        price: 1000,
        airline: 'Curabitur',
        scales: 5,
        duration: 11,
      },
      {
        origin: 'Portoviejo',
        destination: 'Sioux Falls',
        departure: '2022/07/17',
        return: '2022/07/31',
        price: 1890,
        airline: 'Proin',
        scales: 4,
        duration: 9,
      },
      {
        origin: 'Portoviejo',
        destination: 'Layton',
        departure: '2022/07/27',
        return: '2022/08/27',
        price: 1230,
        airline: 'Morbi',
        scales: 2,
        duration: 6,
      },
      {
        origin: 'Quito',
        destination: 'Missoula',
        departure: '2022/07/27',
        return: '2022/09/12',
        price: 1600,
        airline: 'Maecenas',
        scales: 2,
        duration: 14,
      },
      {
        origin: 'Guayaquil',
        destination: 'Missoula',
        departure: '2022/07/27',
        return: '2022/10/10',
        price: 1500,
        airline: 'Fusce',
        scales: 3,
        duration: 7,
      },
    ]
  },

  mutations: {
  },

  actions: {
  },

  modules: {
    toast,
    dialog,
  },
});
