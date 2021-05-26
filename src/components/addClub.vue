<template>
    <div>
        <form @submit="onSubmit">
            <input type="text" v-model="name" name ="name" 
            placeholder="Add Club">
            <input type="submit" value="Add Club" class="btn">
        </form>
    </div>
    <div v-bind:key="club.id" v-for="club in allClubs">
        {{club.title}}
        {{club.id}}
        <button @click="deleteClub(club.id)">Delete</button>
    </div>
    <div v-for="club in clubs" :key="club.id">{{club.title}}</div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
import uuid from 'uuid';
import Clubs_initial from '../initial_system_data/Clubs.js'

export default {
    name: "AddClub",
    props:["club"],
    data() {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions('clubs',['addClub']),
        onSubmit(e) {
            e.preventDefault();
            const club = {
                title: this.name,
            }
            this.addClub(club);
        },
        ...mapActions('clubs',['fetchClubs']),
        ...mapActions('clubs',['removeClub', 'updateClub']),
        ChangeName() {
            const updatedClub = {
                id: this.club.id,
                title: 'Sports',
            };
            this.updateClub(updatedClub);
        },
        deleteClub(id) {
            this.removeClub(id);
    }
    },
    computed: {
        ...mapGetters('clubs',['allClubs']),
        ...mapState('clubs',['clubs'])
    },

    created() {
        this.fetchClubs(),
        console.log(Clubs_initial)

  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;    
  }
</style>