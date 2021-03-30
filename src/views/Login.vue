<template>
    <div class="row">
        <div class="col">
            <form @submit.prevent="submitLogin">
                <label>Email</label>
                <input type="email" v-model="email" v-focus /><br />
                <label>Password</label>
                <input type="password" v-model="password" v-focus /><br />
                <button type="submit" class="btn btn-primary">Login now</button>
            </form>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert'

export default {
    data() { return {
        email: '',
        password: ''
    }},

    methods: {
        submitLogin() {
            const { email, password } = this
            swal({
                title: "Loading...",
                text: "Server is checking if you are legit"
            })
            this.$store.dispatch('auth/login', { email, password })
                .then(() => swal({
                    title: "Successful Login",
                    text: "Happy to see you back"
                }))
        }
    }
}
</script>