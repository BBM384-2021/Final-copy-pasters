<template>
    <h5>Manage Requests</h5>
    <form @submit.prevent="">
        <div class="selection_part">
            <label class="management_type">Please select a management type: </label>
            <select class="management_selection_menu" v-model="request_type">
              <option value="go_to_member_reports">Go to member reports</option>
              <option value="manage_members">Manage members</option>
            </select>
        </div>
          
        <div class="option_panel" v-if= "request_type === 'go_to_member_reports'">
                <p class="title">Reports</p>
                <div class="panels">
                    <div class="report_list_container" >
                        <ul class="list"></ul>
                        <li class="reported_member" v-for='report in $store.state.sub_club_member_reports' :key="report.id">
                            <input type="radio" :id="report.id" :value="report" v-model="selected_member_report"/>
                            <label :for="report.id" class="name">{{report.member_name}}</label>
                            <div class="seperator"></div>
                        </li>
                    </div>
                    <div class="reports_container">
                        <div class="info" v-if="Object.keys(selected_member_report).length === 0">
                            Please select a report from the list on the left
                        </div>
                        <div v-else class=report_details>
                            <div>The username of the reported member:</div>
                            <div>Description:</div>
                            <div>Attachments:</div>
                        </div>
                    </div>
                </div>
        </div>
        
        <div class="option_panel" v-else-if= "request_type === 'manage_members'">
            <p class="title">Members</p>
            <div class="member_list_container" >
                        <ul class="list"></ul>
                        <li class="member_details" v-for='member in $store.state.sub_club_members' :key="member.userId">
                            <div>{{member.userId}}</div>
                            <button class="temp_ban"><img :src="require('@/assets/icons/temp_ban.png')" /></button>
                            <button v-if="member.banCount < 3" class="disabled_dismiss" disabled ><img :src="require('@/assets/icons/dismiss.png')" /></button>
                            <button v-else class="dismiss"><img :src="require('@/assets/icons/dismiss.png')" /></button>
                            <div class="seperator"></div>
                        </li>
                    </div>
        </div>
      </form>

</template>

<script>
export default {
    data(){
        return{
            request_type:'',
        }
    },
    
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
        font-size:1.4em;
    }
    .selection_part{
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin:5%;
        margin-top: 2%;
    }
    .management_type{
        margin:10px;
        font-size: 1.1em;
        font-weight: 500;
    }
    .option_panel{
        display:flex;
        flex-direction:column;
    }
    .management_selection_menu{
        box-sizing: border-box;
        border: 1px solid #ba7ea0e0;
        background-color: #ba7ea0e0;
        font-size: 1.1em;
        font-weight: 400;
        color:white;
        border-radius: 10px;
        height: 2em;
        padding-left:20px;
    }
    .title{
        font-size:1.3em;
        font-weight:500;
        padding:1% 5%;
    }
    input[type="radio"] {
        display: none;
    }

    .panels{
        display: flex;
        justify-content:space-evenly;
    }
    .report_list_container{
        background-color: rgba(255, 255, 255, 0.8);
        border: 4px solid #ba7ea0 ;
        border-radius: 10px;
        text-align: center;
        padding: 2%;
        font-size: 30px;
        font-weight: bold;
        height: 400px;
        width:35%;
        overflow:auto;
    }
    .list{
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }
    .reported_member {
        display:flex;
        flex-direction:column;
        justify-content: start;
        padding:15px;
        

        .name {      
            font-size: .6em;
            font-weight:400;
            position:relative;
            display: flex;
            justify-content: start;
            border:none;
            background-color: rgba(255, 255, 255, 0.8);
            cursor: pointer;
            margin-left: 15px;
        }
        
    }
    :checked+.name{
        color:#742957;
        font-weight: 700;
        font-size:.65em;
    }
    .seperator{
        background-color: #BA7EA0;
        height: 2px;
        width:100%;
        margin-top:20px;
        margin-left:-10px;

    }
    
    .reports_container{
        background-color: rgba(255, 255, 255, 0.8);
        border: 4px solid #ba7ea0 ;
        border-radius: 10px;
        padding: 2%;
        font-size: 1.2em;
        font-weight: 400;
        height: 400px;
        width:55%;
        
        overflow:auto;
    }
    .info{
        display:flex;
        justify-content:center;
    }
    .member_list_container{
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 2%;
        font-size: 30px;
        font-weight: bold;
        height: 400px;
        width:100%;
        overflow:auto;
    }
    .disabled_dismiss{
        background-color: white;
        filter: grayscale(100%);
        
    }
    .member_details{
        display:flex;

    }
    .submit_button{
        margin-top: 15px;
        display:flex;
        justify-content:flex-end;
    }
    
    .submit{
        background-color: #BA7EA0;
        color: white;
        cursor: pointer;
        padding: 10px;
        width: 100px;
        height:50px;
        border: .1px solid white;
        text-align: center;
        outline: none;
        transition: 0.4s;
        text-decoration: none;
        font-size: 1.2em;
        border-radius: 10px;
        font-weight: 500;
    }
</style>