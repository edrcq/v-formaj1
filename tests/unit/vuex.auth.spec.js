import testAction from './helper.actions'
import { mutations } from '../../src/store/auth'
const actionsInjector = require('inject-loader!../../store/auth/actions')

const actions = actionsInjector({
    '../../common/axios': {
        instance: {
            post(url, data) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            token: 'A nice token',
                        })
                    }, 100)
                })
            }
        }
    }
})



describe('Auth mutations', () => {
    it('set token', () => {
        const state = {
            token: '',
        }
        mutations.token(state, 'SUPERTOKEN')
        expect(state.token).toBe('SUPERTOKEN')
    })
})

describe('Auth Actions', () => {
    it('login', done => {
        testAction(actions.login,
        {
            email: 'test@test.com',
            password: 'password'
        }, // payload
        {}, // state
        [
            { type: 'token' }
        ], // mutations expect
        done)
    })
})