<template>
  <div class="col-4 mx-auto">
    <div>
      <h1>Create your account</h1>
    </div>

    <div class="text-center alert alert-{{message ? 'success' : 'danger'}}">{{ message }}</div>

    <div v-if="message !== null">
      <div class=" text-center" :class="{ 'text-danger': errors, 'text-success': !errors }">
        {{ message }}
      </div>
    </div>

    <form @submit.prevent="handleSubmit">

      <div class="my-2">
        <input type="text" placeholder="Name" class="form-control border-primary" v-model="v$.form.name.$model" />
        <div v-for="(error, index) in v$.form.name.$errors" :key="index">
          <span class="text-danger text-sm"> {{ error.$message }}</span>
        </div>
      </div>

      <div class="my-2">
        <input type="email" placeholder="Email" class="form-control border-primary" v-model="v$.form.email.$model" />
        <div v-for="(error, index) in v$.form.email.$errors" :key="index">
          <span class="text-danger text-sm"> {{ error.$message }}</span>
        </div>
      </div>

      <div class="my-2">
        <input type="number" placeholder="Age" class="form-control border-primary" v-model="v$.form.age.$model" />
        <div v-for="(error, index) in v$.form.age.$errors" :key="index">
          <span class="text-danger text-sm"> {{ error.$message }}</span>
        </div>
      </div>

      <div class="my-2">
        <input type="text" placeholder="Password" class="form-control border-primary"
          v-model="v$.form.password.$model" />
        <div v-for="(error, index) in v$.form.password.$errors" :key="index">
          <span class="text-danger text-sm"> {{ error.$message }}</span>
        </div>
      </div>

      <!-- <div class="d-flex">
          <div class="my-2">
              Date of Birth
            <input type="month" placeholder="Month" class="form-control border-primary w-50"  v-model="v$.form.month.$model"/>    
            <div v-for="(error, index) in v$.form.email.$errors" :key="index">
                  <span class="text-danger text-sm"> {{ error.$message }}</span>
            </div>          
          </div>

          <div class="my-2">
              Day
            <input type="number" placeholder="Day" class="form-control border-primary w-50"  v-model="v$.form.day.$model"/>    
            <div v-for="(error, index) in v$.form.email.$errors" :key="index">
                  <span class="text-danger text-sm"> {{ error.$message }}</span>
            </div>          
          </div>             
        </div> -->

      <!-- <div>
        <button :class="{btn3}"  type="submit" :disabled="v$.form.$invalid" class="btn btn-md bg-info text-light text-center px-2" ><router-link :to="{name: 'Signin'}" :class="{btn3}">Submit</router-link></button>  
        </div> -->

      <div>
        <button type="submit" :disabled="v$.form.$invalid"
          class="btn btn-md bg-info text-light text-center px-2">Submit</button>
      </div>

    </form>

  </div>
</template>

<script>
import axios from 'axios'
import useValidate from '@vuelidate/core';
import { required, minLength, maxLength, email } from '@vuelidate/validators';

export default {

  mounted() {
    console.log("Signup has been mounted")
  },

  setup() {
    return { v$: useValidate() }
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        age: '',
        password: '',
        // month: '',
        // day: '',
        // year: ''
      },
      // message: '',   
      // errors: [],

      message: null,
      errors: '',
    }
  },

  validations() {
    return {
      form: {
        name: { required, max: maxLength(10), min: minLength(5) },
        email: { required, email },
        age: { required, min: minLength(2), max: maxLength(3) },
        password: { required, min: minLength(6), max: maxLength(10) },
        // month: {required},
        // day: {required},
        // year: {required},      

      }
    }
  },
  methods: {

    handleSubmit() {
      if (this.v$.form.$invalid) {
        console.log("Form is invalid")
      } else {
        axios.post("http://localhost:8000/api/register", this.form).then((response) => {
          if (response.data.status) {
            this.message = response.data.message
            this.$router.push('/signin')
            console.log(this.message)
          } else {
            this.errors = response.data.errors
            console.log(this.errors);
          }
        })
      }
    },
  }
}
</script>

<style></style>