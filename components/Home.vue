<template>
    <div>
        <div v-for="user in users" :key="user.id">
            <user-item :user=user> </user-item>
        </div>
    </div>
</template>


<script>
import UserItem from './UserItem.vue'
export default {
  components: { UserItem },
    name: "Home",
    data(){
        return {
            users: [

            ]
        }
    },
    created() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {return response.json()})
        .then((users) => {this.users = users;})
    }
    
}
</script>