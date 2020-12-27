<template>
  <div id="login-container">
      <div class="login-box">
          <h3 class="text-center">Log In to Refactory</h3>
          <form @submit.prevent="login">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1" required>
            </div>
            <button type="submit" class="btn btn-def">Log In</button>
            </form>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: 'eve.holt@reqres.in',
        password: '123'
      }
    }
  },
  methods: {
    login () {
      this.actionLogin(this.form)
        .then((resolve) => {
          localStorage.setItem('email', this.form.email)
          window.location = '/'
        }).catch(() => {
          alert('user not found')
        })
    }
  },
  ...mapActions({
    actionLogin: 'auth/login'
  })
}
</script>

<style scoped>
#login-container {
    background-color: #F5F5F8;
    height: 100vh;
    padding: 100px 0px;
}
.login-box {
    width: 600px;
    margin: 0px auto;
    background-color: white;
    border-radius: 20px;
    padding: 50px;
}
.btn {
    border-radius: 20px;
    margin: 0px 43%;
}
@media (max-width: 615px) {
    #login-container {
    background-color: #F5F5F8;
    height: auto;
    padding: 0px 0px;
    }
    .login-box {
        width: 100%;
        margin: 0px 0px;
        background-color: white;
        border-radius: none;
        padding: 10px;
    }
    .btn {
        border-radius: 20px;
        margin: 0px auto;
}
}
</style>
