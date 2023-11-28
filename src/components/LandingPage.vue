<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="col-10 mx-auto">
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
                <input type="email" placeholder="Email" class="form-control border-primary"
                  v-model="v$.form.email.$model" />
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
                <input type="password" placeholder="Password" class="form-control border-primary"
                  v-model="v$.form.password.$model" />
                <div v-for="(error, index) in v$.form.password.$errors" :key="index">
                  <span class="text-danger text-sm"> {{ error.$message }}</span>
                </div>
              </div>


              <div>
                <button type="submit" :disabled="v$.form.$invalid"
                  class="btn btn-md bg-info text-light text-center px-2 w-100">Submit</button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ********************************************************************* -->
  <div class="container-fluid d-flex">
    <div class="col-7 mt-2 ">
      <img alt="Vue twitter1" src="../assets/twitter1.png" width="800">
    </div>
    <div class="col">
      <h1 :class="{ font1 }">Happening now</h1>
      <h1 :class="{ font2 }">Join today.</h1>
      <button :class="{ btn1 }" class="btn-rounded rounded-5"><img alt="Vue twit1" src="../assets/twit2.png">Sign up with
        Google</button><br><br>
      <button :class="{ btn2 }" class="btn-rounded rounded-5"><img alt="Vue twit3" src="../assets/twit3.png">Sign up with
        Apple</button>
      <p :class="{ font3 }">or</p>

      <!-- <button :class="{btn3}"  class="btn-rounded rounded-5 " ><router-link :to="{name: 'Signup'}" :class="{btn3}">Create account</router-link></button> -->

      <!-- modal button -->
      <button type="button" @click="callModal()" :class="{ btn3 }" class="btn-rounded rounded-5" data-bs-toggle="modal"
        data-bs-target="#exampleModal">Create account</button>
      <!-- modal button -->


      <p :class="{ font4 }">By signing up, you agree to the <a href="" :class="{ font5 }">Terms of Service </a>and <a
          href="" :class="{ font5 }">Privacy <p> </p>Policy</a>, including <a href="" :class="{ font5 }">Cookie Use</a>.
      </p>
      <h5>Already have an account?</h5>
      <button :class="{ btn4 }" class="btn-rounded rounded-5 "><router-link :to="{ name: 'Signin' }"
          :class="{ btn4 }">Sign
          in</router-link></button>

    </div>
  </div>

  <div class="container-fluid d-flex gap-3">
    <a href="" class="text-secondary" :class="{ font5 }">About</a>
    <a href="" class="text-secondary" :class="{ font5 }">Download the X app</a>
    <a href="" class="text-secondary" :class="{ font5 }">Help Center</a>
    <a href="" class="text-secondary" :class="{ font5 }">Terms of Service</a>
    <a href="" class="text-secondary" :class="{ font5 }">Privacy Policy</a>
    <a href="" class="text-secondary" :class="{ font5 }">Cookie Policy</a>
    <a href="" class="text-secondary" :class="{ font5 }">Accessibility</a>
    <a href="" class="text-secondary" :class="{ font5 }">Ads info</a>
    <a href="" class="text-secondary" :class="{ font5 }">Blog</a>
    <a href="" class="text-secondary" :class="{ font5 }">Status</a>
    <a href="" class="text-secondary" :class="{ font5 }">Careers</a>
    <a href="" class="text-secondary" :class="{ font5 }">Brand Resources</a>
    <a href="" class="text-secondary" :class="{ font5 }">Advertising</a>
    <a href="" class="text-secondary" :class="{ font5 }">Marketing</a>
    <a href="" class="text-secondary" :class="{ font5 }">X for Business</a>
    <a href="" class="text-secondary" :class="{ font5 }">Developers</a>
    <a href="" class="text-secondary" :class="{ font5 }">Directory</a>
  </div>

  <div class=" gap-3 text-center">
    <a href="" class="text-secondary" :class="{ font5 }">Settings</a>
    <a href="" class="text-secondary text-decoration text-decoration-none">© 2023 X Corp.</a>
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
      font2: true,
      font3: true,
      btn1: true,
      btn2: true,
      btn3: true,
      font4: true,
      font5: true,
      btn4: true,
      form: {
        name: '',
        email: '',
        age: '',
        password: '',

      },

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
    callModal() {
      this.$router.push('/')
    },

    handleSubmit() {
      if (this.v$.form.$invalid) {
        console.log("Form is invalid")
      } else {
        axios.post("http://localhost:8000/api/register", this.form).then((response) => {
          if (response.data.status) {
            this.message = response.data.message
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

<style>
.font1 {
  font-size: 85px;
  font-weight: bolder;
  margin-top: 70px;
}

.font2 {
  font-weight: bolder;
  margin-top: 50px;
  margin-bottom: 40px;
}

.font3 {
  padding-left: 150px;
  margin-top: 7px;
}

.btn1 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 80px;
  padding-right: 80px;
  border-color: rgb(162, 162, 181);
  font-weight: 600;
  background-color: white;
}

.btn1:hover {
  background-color: rgb(245, 247, 248);
}

.btn2 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 85px;
  padding-right: 85px;
  border-color: rgb(162, 162, 181);
  font-weight: 700;
  background-color: white;
}

.btn2:hover {
  background-color: rgb(238, 232, 232);
}

.btn3 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 110px;
  padding-right: 110px;
  border-color: rgb(162, 162, 181);
  font-weight: 700;
  background-color: rgb(82, 171, 231);
  color: white;
  text-decoration: none;
  margin-bottom: 15px;
}

.btn3:hover {
  background-color: rgb(14, 126, 200);
}

.font4 {
  font-size: 13px;
  line-height: 1px;
  margin-bottom: 80px;
}

.font5 {
  text-decoration: none;
}

.font5:hover {
  text-decoration: underline;
}

.btn4 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 72px;
  padding-right: 72px;
  border-color: rgb(162, 162, 181);
  font-weight: 700;
  background-color: white;
  color: rgb(82, 171, 231);
  text-decoration: none;

}

.btn4:hover {
  background-color: rgb(226, 232, 236);
}

a:hover {
  text-underline-position: below;
}
</style>