import Vue from 'vue'
import { getAllMarkets, getCoinsList } from '../helpers/api'

const T_LIMIT = 1000 * 60

export default {
    namespaced: true,

    state: {
        fiat: 'usd',
        lastMarketFetch: 0,
        markets: [],
        list: [],
    },

    mutations: {
        setMarkets(state, markets) {
            state.lastMarketFetch = +new Date()
            Vue.set(state, 'markets', markets)
        },
        setList(state, list) {
            Vue.set(state, 'list', list)
        }
    },

    actions: {
        getAllMarkets({ state, commit }) {
            if (state.lastMarketFetch + T_LIMIT < (+new Date())) {
                getAllMarkets(state.fiat).then(r => {
                    commit('setMarkets', r.data)
                })
            }
        },

        getCoinsList({ state, commit }) {
            if (state.list.length > 0) {
                return ;
            }
            getCoinsList(state.fiat).then(r => {
                commit('setList', r.data)
            })
        }
    },
}