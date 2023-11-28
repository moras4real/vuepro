<template>
  <div class="col-4 mx-auto">
    <h5 :class="{ font1 }">Sign in to X</h5>

    <div class="text-center alert alert-success{{message ? 'success' : 'danger'}}">{{ message }}</div>

    <div v-if="message !== null">
      <div class=" text-center" :class="{ 'text-danger': errors, 'text-success': !errors }">
        {{ message }}
      </div>
    </div>

    <button :class="{ btn1 }" class="btn-rounded rounded-5"><img alt="Vue twit1" src="../assets/twit2.png">Sign up with
      Google</button><br><br>
    <button :class="{ btn2 }" class="btn-rounded rounded-5"><img alt="Vue twit3" src="../assets/twit3.png">Sign up with
      Apple</button>
    <p :class="{ font3 }">or</p>

    <form @submit.prevent="handleSubmit">
      <div class="my-2">
        <input type="text" placeholder="Email" class="form-control border-primary" v-model="v$.form.email.$model" />
        <div v-for="(error, index) in v$.form.email.$errors" :key="index">
          <span class="text-danger text-sm"> {{ error.$message }}</span>
        </div>
      </div>

      <div class="my-2">
        <input type="text" placeholder="password" class="form-control border-primary" v-model="v$.form.password.$model" />
        <div v-for="(error, index) in v$.form.password.$errors" :key="index">
          <span class="text-danger text-sm"> {{ error.$message }}</span>
        </div>
      </div>

      <button type="submit" :disabled="v$.form.$invalid"
        class="btn btn-md bg-info text-light text-center px-2 w-50">Login-In</button>
    </form>

  </div>
</template>

<script>
import axios from 'axios'
import useValidate from '@vuelidate/core';
import { required, minLength, maxLength, email } from '@vuelidate/validators';

export default {


  mounted() {
    console.log("Signin has been mounted")
  },

  setup() {
    return { v$: useValidate() }
  },

  data() {

    return {
      font1: true,
      btn1: true,
      btn2: true,
      font3: true,

      form: {
        email: '',
        password: '',
      },

      message: null,
      errors: '',
    }
  },

  validations() {
    return {


      form: {
        email: { required, email },
        password: { required, min: minLength(6), max: maxLength(10) },

      }
    }
  },
  methods: {
    handleSubmit() {
      // console.log(this.form)  
      if (this.v$.form.$invalid) {
        console.log("Form is invalid")
      } else {
        axios.post("http://localhost:8000/api/login", this.form).then((response) => {
          // console.log(res)
          if (response.data.status) {
            localStorage.setItem('user_id', response.data.user_id);            
            this.message = response.data.message
            console.log(this.message)            
            this.$router.push('/dashboard')
          } else {
            this.errors = response.data.errors
            console.log(this.errors);
          }
        })
        .catch((error) => {
          // Handle any errors
          console.error('Error:', error);
        });
      }
    },
  }
}
</script>

<style></style>