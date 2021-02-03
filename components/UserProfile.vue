<template>
    <div>
        <router-link :to="goBack"> Go to user list </router-link> 
        <h1> {{users.name}} </h1>
        <ul>
            <li> Username : {{users.username}} </li>
            <li> Email : {{users.email}} </li>
            <li> Phone : {{users.phone}} </li>
            <li> City : {{users.address.city}} </li>
            <li> Company Name : {{users.company.name}} </li>
            <li> Website : 
                <router-link :to="websiteLink"> {{users.website}} </router-link> 
             </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: "UserProfile",
    data(){
        return {
            users: [

            ]
        }
    },
    computed: {
        websiteLink() {
            return "{{users.website}}"
        },
        goBack() {
            return "/"
        }
    },
    created() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
        .then((response) => {return response.json()})
        .then((users) => {this.users = users;})
    }
}
</script>

<style scoped>
    li {
        list-style-type: none;
        margin: 15px;
    }
    a {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;


    }
</style>