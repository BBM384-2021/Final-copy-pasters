<template>
    <div>
    <div class="main">
        <div class="image-header">
            <img class="subclub-image" :src="subclub.img">
            <div class="subclub-name">
                <h1>{{subclub.name}}</h1>     
                <img class="star-img" src="~@/assets/star.png">
                <p id="main-rate">{{subclub.rate}}</p>    
            </div>
            <div v-if="show" class="big-box-member">
                <div class="timeline-members-chatroom-event-ratereview">
                
                </div>
            </div>
             <div v-else class="big-box-not-member">
                    <div class="about">
                        <p id="about">About</p>
                        <div class="about-text"><p id="subclub-about">{{subclub.about}}</p></div>
                    </div>
                    <div class="rate-review">
                        <p id="rate-review">Ratings&#38;Reviews</p>
                        <div class="rate-review-outer">
                            <div class="rates-review-text" v-for="rates_reviews in subclub.rates_reviews" :key="rates_reviews">
                                <p id="rate">{{rates_reviews.rate}}</p>
                                <div class="review-text"><p id="subclub-review">{{rates_reviews.review}}</p></div>
                            </div>
                        </div>
                    </div>
                 <!--   <div class="join-subclub">
                        <p id="join">Would you like to join this sub-club</p>
                        <button class="apply">Apply the questionnaire</button>
                        <p>{{user.id}}</p>
                    </div>  -->
                   
                </div> 

        </div>
    </div>
    </div>
</template>

<script>
import header from '../components/SubClubPage/SubClubPageHeader.vue'
export default{
    components:{
        'header-helper':header,
    },
    data(){
        return{
            user:{ 
                id:1,
                username:"bandit",
                email:"basak945@gmail.com",
                subclubs:[{ 
                    id:1,
	    		    name:"Yoga",
	    		    img: require("../assets/sub-clubs-images/Yoga.jpeg"),
                    rate: 3.2,
                    about:"This is about yoga subclub"
                },
	            {
                    id:2,
	    		    name: "Piano",
                    img:require("../assets/sub-clubs-images/Piano.jpeg"),
                    rate:4.0,
                    about:"This is about piano subclub"
                }]
	        },
            subclub:{
                id:1,
	    		name:"Yoga",
	    		img: require("../assets/sub-clubs-images/Yoga.jpeg"),
                rate: 3.2,
                about:"This is about yoga subclub",
                rates_reviews:[{
                        rate: 3,
                        review: "not bad",
                        },
                        {
                        rate: 5,
                        review: "very good",
                        },
                        {
                        rate: 5,
                        review: "very good",
                        },
                        {
                        rate: 5,
                        review: "very good",
                        },
                        {
                        rate: 5,
                        review: "very good",
                        },
                        {
                        rate: 5,
                        review: "very good",
                        },
                        {
                        rate: 5,
                        review: "very good",
                        },
                    ]
            },       
        }
    },
    computed:{
        show(){
            let isMember = this.user.subclubs.includes(this.subclub)
            if (isMember) return true
            return false
        }
    },
    
}
</script>

<style scoped lang="scss">
.main{
    display: grid;
    grid-template-rows: 10rem 1fr;
   /* grid-template-areas:"imageHeader"
                        "bigBox";       */ 
}
.image-header{
    margin-top: 0.3%;
    grid-area: imageHeader;
    position: relative;
    grid-row: 1/2;
    grid-column: 1/2;
}
p#main-rate{
    position: relative;
    top: -2.5em;
    left: 1.5%;
    font-size: 150%;
}
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
.subclub-name{
    position: relative;
    top: -50%;
    left: 5%;
    transform: translate( -50%, -50% );
    text-align: center;
    color: white;
    font-weight:500;
}
.big-box-not-member{
    //grid-area: bigBox;
    grid-row: 2/3;
    grid-column: 1/2;
    display: grid;
    grid-template-rows: 20% 60% 1fr;
    grid-template-columns: 1fr 70% 1fr;
    grid-template-areas:". about ."
                        ". rateReview ."
                        ". joinSubclub .";
}
.big-box-member{
    grid-row: 2/3;
    grid-column: 1/2;
    display: grid;
   
    grid-template-rows: 20% 40% 1fr;
    grid-template-columns: 1fr 70% 1fr;
    grid-template-areas: ". . ."
                    ". timelineMembersChatRoomEventsRateReview ."
                    ". . .";
                        
}
.timeline-members-chatroom-event-ratereview{
    grid-area: timelineMembersChatRoomEventsRateReview;
    
    border-radius: 2em;
    border: 0.2em solid rgb(245, 219, 227);
    justify-self: center;
   
}
.about{
    grid-area: about;
    justify-items: start;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:"aboutP"
                        "aboutDiv";
}
p#about{
    grid-area: aboutP;
    align-self: center;
    font-size: 150%;
    margin-bottom: -4%;
}
.about-text{
    grid-area: aboutDiv;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5e7f3;
    width: 100%;
    height: 70%;
    text-align: center;
    border-radius: 1rem;
}
p#subclub-about{
    display: table;
    font-size:150%;
    background-color:white;
    color:black;
    width: 90%;
    height: 60%;
    border-radius: 0.7rem;
    padding: 1%;
}
.rate-review{
    grid-area: rateReview; 
    display: grid;
    grid-template-rows: 1fr 10fr;
    grid-template-areas:"rateReviewTitle"
                        "rateReviewDiv";
}
.rate-review-outer{
    grid-area: rateReviewDiv;
    background-color: #f5e7f3;
    height: 100%;
    overflow: auto;
    border-radius: 1rem;
  /*  justify-items: start;
    justify-content: center;
    background-color: #f5e7f3;
    text-align: start;
    border-radius: 1rem;
    height: 30%;
    overflow: auto; */
}
.rates-review-text{
    margin-bottom: 2%;
    margin-left: 5%;
}
p#rate{
    position: relative;
    top: 2em;
    left: 1.5%;
    margin-bottom: 1%;
  /*  position: relative;
    top: -1.5em;
    left: 1.5%;
    font-size: 150%; */
}
p#subclub-review{
    display: table;
    font-size:120%;
    background-color:white;
    color:black;
    width: 98%;
    height: 3em;
    border-radius: 1rem;
    padding: 1%;
    
}
.review-text{
 /*   justify-self: center;
    padding: 1%; */
    position: relative;
    top: 2em;
    left: 1.5%;
}
p#rate-review{
    grid-area: rateReviewTitle;
    align-self: center;
    font-size: 150%;
    margin-bottom: -1%;
}
.join-subclub{
    grid-area: joinSubclub; 
    display: grid;
    margin-top: 5%;
    grid-template-rows: 10% 10%;
    grid-template-areas: "join"
                        "button"; 
   
}
p#join{
    grid-area: join;
    font-size: 150%;
}
.apply{
    grid-area: button;
    justify-self: center;
    align-self: center;
    width: 50%;
    height: 300%;
    background: #b983b1;
    border:none;
    border-radius: 1rem;
    color: white;
    font-size: 150%;
    margin-top: 10%;
   /* width: 50%;
    justify-self: center;
    height: 300%;
    background: #b983b1;
    border:none;
    border-radius: 1rem;
    color: white;
    font-size: 150%;
    align-self: end;
    margin-bottom: -10%; */
}
.star-img{
    width: 2%;
    position: relative;
    top: 120%;
    left: -1%;
  
}  
ul li{
    
    
    display: inline;
    margin-right:1em;
    margin-top:-1.5em;
 
}
@media all and (max-width: 768px){
    h1{
        //font-size: 100%;
    }
    p#main-rate{
        font-size: 50%;
    }
    .apply{
        font-size: 100%;
        margin-bottom: -25%;
    }
}
@media all and (max-width: 425px){
}
</style>