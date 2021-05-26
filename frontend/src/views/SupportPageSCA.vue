<template>
    <div><SubClubPageHeader/></div>
      <div class="support_page">
      <h1 class=title>Support Page</h1>
      <h3>Sub-Club Admin View</h3>
      <div class="manage_requests"><ManageRequests/></div>
      <div><SendRequest/></div>
      </div>
</template>

<script>
import SendRequest from '@/components/Support/SendRequest.vue';
import ManageRequests from '@/components/Support/ManageRequests.vue';
import SubClubPageHeader from '@/components/SubClubPage/SubClubPageHeader.vue';
export default {
    name: 'SupportPageSCA',
    components:{
        SendRequest,
        ManageRequests,
        SubClubPageHeader
    },
    
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,400;0,500;0,700;0,800;1,400;1,500;1,700&display=swap');
    :root{
        --primary-color: #BA7EA0;
        --bolder-color: #742957;
    }

    .support_page{
        padding:10%;
        padding-top:0;
        font-family: 'Alegreya Sans', sans-serif;
    }
    .title{
        color:black;
        font-size: 1.6em;
        padding: 5%;
        padding-left: 8%;
        padding-bottom:1%;
        margin:auto;
        font-weight: bold;
    }

    h3{
        color:black;
        padding-top: 2%;
        padding-left: 6%;
        padding-bottom:3%;
        margin:auto;
        font-weight: bold;
        font-size:1.3em;
    }
    .manage_requests{
        padding-bottom: 1%;
    }
</style>