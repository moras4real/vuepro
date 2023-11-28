import {defineStore} from 'pinia'

export const useUserStore = defineStore('usersStore', {
    state: ()=> ({
        count: 0,
        item: [
            { id: 1,
              name: "orange",
              availability: true,
            },
            { id: 2,
              name: "tomato",
              availability: true,
              }
        ],
    }),
    getters: {
        multiplyCount() {
            return this.count * 2;
        }
    },
    actions: {
        deleteItem(index, id){
     this.item=this.item.filter((item)=> item.id!== id);
        //    this.item.splice(index, 1);                  
        }
    }  
})