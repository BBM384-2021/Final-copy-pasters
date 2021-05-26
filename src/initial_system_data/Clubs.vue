<template>
  
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            initial_clubs:[
                'Sports', 'Music', 'Visual Arts', 'Hobbies'
            ]
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
    }
}
</script>
