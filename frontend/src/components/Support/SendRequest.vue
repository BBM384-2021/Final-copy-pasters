<template>
  <h5>Send a Request</h5>
      <form @submit.prevent="">
          <div class="selection_part">
            <label class="request_type">Please select a request type: </label>
            <select class="request_selection_menu" v-model="request_type">
              <option value="request_a_new_sub_club">Request a new sub-club</option>
              <option value="report_member">Report a Member</option>
              <option value="nominate">Nominate to be a sub-club admin</option>
            </select>
          </div>
          
          <div class="option_panel" v-if= "request_type === 'request_a_new_sub_club'">
                <label>Please enter the sub-club name that you wish to be opened.*</label>
                <input type="sub_club_name" required>
                <label>You can also write the club name that will contain the sub-club that you requested.</label>
                <input type="club_name">
                <div class="button">
                    <button class="submit">Submit</button>
                </div>
          </div>
          <div class="option_panel" v-else-if= "request_type === 'report_member'">
              
          </div>
          <div class="option_panel" v-else-if= "request_type === 'nominate'">
              
          </div>
      </form>
</template>

<script>
export default {
    data(){
        return{
            request_type:''
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,400;0,500;0,700;0,800;1,400;1,500;1,700&display=swap');
    :root{
        --primary-color: #BA7EA0;
        --bolder-color: #742957;
    }

    template{
        font-family: 'Alegreya Sans', sans-serif;
    }
    h5{
        display:flex;
        justify-content:center;
        font-size:1.2em;
    }
    .selection_part{
        font-family: 'Alegreya Sans', sans-serif;
        display:flex;
        flex-direction:column;
        margin:2%
    }
    .option_panel{
        display:flex;
        flex-direction:column;
    }
    .request_selection_menu{
        border-radius: 10px;
        height: 2em;
    }
    input{
        display:flex;
        flex-direction:column;
        box-sizing: border-box;
        padding:10px 6px;
        border: 1px solid #742957;
        border-radius: 10px;
    }
</style>