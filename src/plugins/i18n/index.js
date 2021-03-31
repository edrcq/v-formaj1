import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from './locales'

Vue.use(VueI18n)

const externals = []

const i18n = new VueI18n({
    locale: 'fr',
    messages: locales,
})

function addExternal(cb) {
    externals.push(cb)
}

function setLocale(locale) {
    i18n.locale = locale
    for(let cb of externals) {
        cb(locale)
    }
}

export {
    i18n,
    setLocale,
    addExternal,
}