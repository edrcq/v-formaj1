import axios from 'axios'
import swal from 'sweetalert'

export function errorHandler(err, vm, info) {
    console.log('Error handled', { err, vm, info })
}

export function windowOnError(msg, src, linenum, colnum, error) {
    console.log('Window error')
    console.log({
        msg,
        src,
        linenum,
        colnum,
        error
    })
    console.log(error.stack)
}

export function unhandledRejection(error) {
    console.log('UnHandled', error)
}

export function axiosError(error) {
    console.log(error.response, error.request)
    const { response } = error
    if (response && response.data && response.data.message) {
        return swal({
            title: 'Error',
            text: response.data.message
        })
    }
}

export function actionError(error) {
    if (axios.isAxiosError(error) === true) {
        return axiosError(error)
    }
}

