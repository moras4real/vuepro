<template >
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <form @submit.prevent="handleSubmit" :class="{ scrollable }" :style="{ maxHeight: dynamicMaxHeight + 'px' }">
            <div class="col-7 mx-auto my-2 shadow-sm row">
              <div class="d-flex">
                <div>
                  <button class="btn btn ps-5 pe-5" :class="{ bt1 }">
                    <h5 class="ps-3 pt-2 text-dark ">For you</h5>
                  </button>
                </div>
                <div>
                  <button class="btn btn ps-5 pe-5" :class="{ bt1 }">
                    <h5 class="ps-3 pt-2 text-dark ">Following</h5>
                  </button>
                </div>
              </div>

              <div class="my-2">
                <input type="hidden" placeholder="Title" class="form-control border-primary w-50" v-model="form.title" />
              </div>


              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                  v-model="form.comment"></textarea>
                <label for="floatingTextarea">
                  <h3 class="text-secondary">What is happening?!</h3>
                </label>
              </div>

              <label for="" class="text-white ">Upload Files Here</label>
              <input type="file" id="fileInput" class="form-control w-50" @change="handleFileChange" multiple
                style="display: none;" />
              <div class="d-flex gap-5">
                <div class="form-group mb-3 pe-5 d-flex gap-3">
                  <img alt="view img" src="../assets/1media.png" width="28" height="24"
                    onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
                  <img alt="view img" src="../assets/2gif.png" width="28" height="24"
                    onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
                  <img alt="view img" src="../assets/3poll.png" width="28" height="24"
                    onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
                  <img alt="view img" src="../assets/4emoji.png" width="28" height="24"
                    onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
                  <img alt="view img" src="../assets/5shedule.png" width="28" height="24"
                    onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
                  <img alt="view img" src="../assets/6location.png" width="28" height="24"
                    onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
                </div>
                <div class="form-group ">
                  <button type="submit" class="btn btn-info rounded-5 ps-4 pe-4">
                    <h5 class="text-white">Post</h5>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


  <!-- <nav class="navbar bg-dark d-flex">
    <div class="container">
      <h1 class="text-primary">Wellcome To Dashboard</h1>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button class="btn btn-success" @click="logout">Logout</button>
    </div>
  </nav> -->

  <!-- ***************************************************************************************************************************** -->

  <div class="container d-flex bg-primar">
    <div class="col- bg-dar">
      <div>
        <button class="btn btn-rounded rounded-5 ps-3 pe-3" :class="{ bt1 }">
          <div class="d-flex"><img alt="view img" src="../assets/tw7.png" width="35" height="40">
            <h4 class="pt-2 "></h4>
          </div>
        </button>
      </div>
      <div>
        <button class="btn btn-rounded rounded-5 ps-3 pe-3" :class="{ bt1 }" @click="logout">
          <div class="d-flex"><img alt="view img" src="../assets/tw1.png" width="35" height="40">
            <h4 class="ps-3 pt-2 text-dark fw-bold">Home</h4>
          </div>
        </button>
      </div>
      <div>
        <button class="btn btn-rounded rounded-5 ps-3 pe-3" :class="{ bt1 }">
          <div class="d-flex"><img alt="view img" src="../assets/tw2.png" width="35" height="40">
            <h4 class="ps-3 pt-2 text-dark ">Explore</h4>
          </div>
        </button>
      </div>
      <div>
        <button class="btn btn-rounded rounded-5 ps-3 pe-3" :class="{ bt1 }">
          <div class="d-flex"><img alt="view img" src="../assets/tw3.png" width="35" height="40">
            <h4 class="ps-3 pt-2 text-dark ">Notifications</h4>
          </div>
        </button>
      </div>
      <div>
        <button class="btn btn-rounded rounded-5 ps-3 pe-3" :class="{ bt1 }">
          <div class="d-flex"><img alt="view img" src="../assets/tw4.png" width="35" height="40">
            <h4 class="ps-3 pt-2 text-dark ">Messages</h4>
          </div>
        </button>
      </div>
      <div>
        <button class="btn btn-rounded rounded-5 ps-3 pe-3" :class="{ bt1 }">
          <div class="d-flex"><img alt="view img" src="../assets/tw5.png" width="35" height="40">
            <h4 class="ps-3 pt-2 text-dark ">Lists</h4>
          </div>
        </button>
      </div>
      <div>
        <button class="btn btn-rounded rounded-5 ps-3 pe-3" :class="{ bt1 }">
          <div class="d-flex"><img alt="view img" src="../assets/tw6.png" width="35" height="40">
            <h4 class="ps-3 pt-2 text-dark ">Communities</h4>
          </div>
        </button>
      </div>
      <div>
        <button class="btn btn-rounded rounded-5 ps-3 pe-3" :class="{ bt1 }">
          <div class="d-flex"><img alt="view img" src="../assets/tw7.png" width="35" height="40">
            <h4 class="ps-3 pt-2 text-dark ">Premium</h4>
          </div>
        </button>
      </div>
      <div>
        <button class="btn btn-rounded rounded-5 ps-3 pe-3" :class="{ bt1 }">
          <div class="d-flex"><img alt="view img" src="../assets/tw8.png" width="35" height="40">
            <h4 class="ps-3 pt-2 text-dark ">Profile</h4>
          </div>
        </button>
      </div>
      <div>
        <button class="btn btn-rounded rounded-5 ps-3 pe-3" :class="{ bt1 }">
          <div class="d-flex"><img alt="view img" src="../assets/tw9.png" width="35" height="40">
            <h4 class="ps-3 pt-2 text-dark ">More</h4>
          </div>
        </button>
      </div>

      <div class="form-group ">        
        <button type="button" class="btn btn-info rounded-5 ps-5 pe-5" @click="callModal()"  data-bs-toggle="modal"
        data-bs-target="#exampleModal"><h5 class="text-white">Post</h5>
         </button>
      </div>

      <!-- <h2 class="mt-5 text-whit">Posts List</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h4 class=" text-primar">{{ post.title }}</h4>
          <h5 class=" text-succes">{{ post.comment }}</h5>
          <p>Posted by User ID: {{ post.user_id }}</p>
        </li>
      </ul> -->
    </div>

    <!-- ******************************************************************************************************************************** -->

    <form @submit.prevent="handleSubmit" :class="{ scrollable }" :style="{ maxHeight: dynamicMaxHeight + 'px' }" >
      <div class="col-7 mx-auto my-2 shadow-sm row">
        <div class="d-flex">
          <div>
            <button class="btn btn ps-5 pe-5" :class="{ bt1 }">
              <h5 class="ps-3 pt-2 text-dark ">For you</h5>
            </button>
          </div>
          <div>
            <button class="btn btn ps-5 pe-5" :class="{ bt1 }">
              <h5 class="ps-3 pt-2 text-dark ">Following</h5>
            </button>
          </div>
        </div>

        <div class="my-2">
          <input type="hidden" placeholder="Title" class="form-control border-primary w-50" v-model="form.title" />
        </div>


        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
            v-model="form.comment"></textarea>
          <label for="floatingTextarea">
            <h3 class="text-secondary">What is happening?!</h3>
          </label>
        </div>

        <label for="" class="text-white ">Upload Files Here</label>
        <input type="file" id="fileInput" class="form-control w-50" @change="handleFileChange" multiple
          style="display: none;" />
        <div class="d-flex gap-5">
          <div class="form-group mb-3 pe-5 d-flex gap-3">
            <img alt="view img" src="../assets/1media.png" width="28" height="24"
              onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
            <img alt="view img" src="../assets/2gif.png" width="28" height="24"
              onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
            <img alt="view img" src="../assets/3poll.png" width="28" height="24"
              onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
            <img alt="view img" src="../assets/4emoji.png" width="28" height="24"
              onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
            <img alt="view img" src="../assets/5shedule.png" width="28" height="24"
              onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
            <img alt="view img" src="../assets/6location.png" width="28" height="24"
              onclick="document.getElementById('fileInput').click();" style="cursor: arrow;">
          </div>
          <div class="form-group ">
            <button type="submit" class="btn btn-info rounded-5 ps-4 pe-4">
              <h5 class="text-white">Post</h5>
            </button>
          </div>
        </div>


         <h2 class="mt-5 text-info">Show Posts</h2>
      <!-- <div>
        <div v-for="post in posts" :key="post.id">
          <p>Posted by User ID: {{ post.user_id }}</p>
          <h4 class=" text-primar">{{ post.title }}</h4>
          <h5 class=" text-succes">{{ post.comment }}</h5>
        </div>
      </div> -->

      
        <div v-for="post in posts" :key="post.id"  >
          <p class=" text-whit">Posted by User ID: {{ post.user_id }}</p>
          <h5 class=" text-succes">{{ post.comment }}</h5>
          <div v-for="image in post.images" :key="image"   class="mb-5">
            <img :src="`http://localhost:8000/storage/` + image" alt="" :class="{ fimg }">
          </div>
        </div>  
      
      </div>
    </form>

    
      
   

    <!-- ********************************************************************************************************************************* -->

    <div class="col-2 bg-dar ps-2">
      <h3 class=" mt-5 fw-bold">Subscribe to Premium</h3>
      <h4 class=" mt-3 ">Subscribe to unlock new features and if </h4>
      <h4 class="  ">eligible, receive a share of ads revenue. </h4>
      <div class="form-group ">        
        <button type="button" class="btn btn-dark rounded-5 ps-3 pe-3"><h5 class="text-white">Subscribe</h5>
         </button>
      </div>

       <h4 class=" mt-5 ">Subscribe to unlock new features and if </h4>
      <h4 class="  ">eligible, receive a share of ads revenue. </h4>
      <!-- <div v-for="post in posts" :key="post.id">
        <img :src="`http://localhost:8000/storage/` + post.image" v-if="post.image" alt="" :class="{ fimg }">
        <div v-for="image in post.images" :key="image">
          <img :src="`http://localhost:8000/storage/` + image" alt="" :class="{ fimg }">
          <p class=" text-whit">Posted by User ID: {{ post.user_id }}</p>
        </div>
      </div> -->
    </div>

  </div>

  <!-- ****************************************************************************************************************************** -->

  <!-- STATE, GETTER, ACTION CLASS -->
  <!-- <button @click="userStore.count++">Increase Number</button>
  <button @click="increaseCount" >Increase Number</button>
  <button class="btn btn-success" @click="testtest">Go to Hello World</button>
  <div>{{ userStore.count }}</div>
  <div>{{ userStore.multiplyCount }}</div>

  <div>
    <div v-for="(item, index) in userStore.item" :key="index">
      <p>ID: {{ item.id.toString() }} </p>
      <p>Name: {{ item.name.toString() }}  <button @click="userStore.deleteItem(index, item.id)" class="btn btn-danger">delete</button></p>
      <p>Avalability: {{ item.availability.toString() }}  </p>
    </div>
  </div> -->
</template>

<script>
import axios from 'axios';
import { useUserStore } from '../store/UsersStore'

export default {
  beforeMount() {
    axios.get("http://localhost:8000/api/posts").then((res) => {
      console.log(res.data)
    })
  },
  setup() {
    const userStore = useUserStore();
    return { userStore }
  },

  mounted() {
    this.fetchPosts();
  },

  data() {
    return {
      fimg: true,
      bt1: true,
      scrollable: true,
      form: {
        title: '',
        comment: '',
        image: null,
      },
      message: null,
      errors: '',
      posts: [],
      dynamicMaxHeight: 800,
      
    }
  },

  methods: {
    logout() {
      this.$router.push({ path: '/' });
    },
    testtest() {
      this.$router.push({ path: 'helloworld' });
    },

    updateMaxHeight() {
      const dynamicDiv = this.$el.querySelector('.scrollable-div');
      this.dynamicMaxHeight = dynamicDiv.scrollHeight;
    },

    callModal() {
      this.$router.push('dashboard')
    },


    handleFileChange(e) {
      this.form.image = e.target.files;
      // this.form.image = event.target.files[0];
    },

    handleSubmit() {
      let formData = new FormData();
      const userId = localStorage.getItem('user_id');

      formData.append('title', this.form.title);
      formData.append('comment', this.form.comment);
      // formData.append('image', this.form.image);
      // this.form.image.forEach(file => {
      //   formData.append("image[]", file)
      // });      

      if (this.form.image && this.form.image.length) {
        for (let i = 0; i < this.form.image.length; i++) {
          formData.append("image[]", this.form.image[i])
        }
      }
      formData.append('userid', userId);

      axios.post("http://localhost:8000/api/profile", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        if (response.data.status) {
          this.message = response.data.message;
          this.fetchPosts();
        } else {
          this.errors = response.data.errors
          console.log(this.errors);
        }
      })
    },

    fetchPosts() {
      axios.get('http://localhost:8000/api/posts')
        .then((response) => {
          if (response.data.status) {
            this.posts = response.data.posts;
            console.log(this.posts)
          } else {
            console.error('Error fetching posts:', response.data.errors);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },

    // increaseCount() {
    //       this.userStore.count++;
    // },

  }
}
</script>

<style>.fimg {
  width: 400px;
  height: 400px;
}

.bt1 {
  background-color: white;
}

.bt1:hover {
  background-color: rgb(220, 216, 216)
}

.scrollable {
  overflow-y: auto;
}</style>