import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
})

export function getAllMarkets(vs_fiat = 'usd') {
    return http.get('/coins/markets?vs_currency=' + vs_fiat)
}

export function getCoinsList() {
    return http.get('/coins/list')
}
    


