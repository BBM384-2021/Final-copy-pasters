<template>
<form class="container" @submit.prevent="">
    <div class="vertical-menu" v-for="category in categories" :key="category.name">
            <button @click="makeActive(category)" :class="{'active':active.includes(category)}" class="accordion">{{category.name}}</button>
            <div class="panel" v-if="active.includes(category)">
                <ul class="menu">
                    <li v-for="sub_club in category.sub_clubs" :key="sub_club.name">
                        <input type="checkbox" :id="sub_club.name" v-model="selected_sub_clubs" :value="sub_club"/>
                        <label :for="sub_club.name"><img :src="require('@/assets/'+sub_club.name+'_mini.jpeg')" /></label>
                        <div class="sub-club-name"> {{sub_club.name}}</div> 
                    </li>
                </ul>
            </div>
    </div>
    <div>
        <h2 class="selected_sub_clubs">Selected Sub-Clubs:</h2>
        <p class="remove_sc">You can remove the sub-club by clicking the picture of it</p>
        <div>
            <ul class="selected_sc_list">
                <li v-for="sub_club in selected_sub_clubs" :key="sub_club.name">
                    <label @click="removeSubClub(sub_club)"><img :src="require('@/assets/'+sub_club.name+'_mini.jpeg')" /></label>
                    <div class="sub-club-name"> {{sub_club.name}}</div> 
                </li>
            </ul>
        </div>
    </div>
    <div class="next_button">
        <button class="next">Next</button>
    </div>
</form>

</template>

<script>
export default {
    data(){
        return{
            categories: [
                {name:'Sports', sub_clubs:[
                    {name: 'Basketball'},
                    {name: 'Football'},
                    {name: 'Yoga'},
                    {name: 'Tennis'},
                    {name: 'Swimming'},
                ]},
                {name:'Music', sub_clubs:[
                    {name: 'Violin'},
                    {name: 'Piano'},
                    {name: 'Guitar'},
                    {name: 'Electronic Music'},
                    {name: 'Rock Music'},
                ]},
                {name:'Visual Arts', sub_clubs:[
                    {name: 'Painting'},
                    {name: 'Drawing'},
                    {name: 'Sculpture'},
                    {name: 'Ceramics'},
                    {name: 'Photography'},
                ]},
                {name:'Hobbies', sub_clubs:[
                    {name: 'Puzzle'},
                    {name: 'Sudoku'},
                    {name: 'Reading'},
                    {name: 'Cooking'},
                    {name: 'Chess'},
                ]}
            ],
            active: [],
            selected_sub_clubs: []
            
        }
    },
    methods:{
        makeActive(category){
            const index = this.active.indexOf(category)
            if (index >= 0)
                this.active.splice(index,1)
            else
                this.active.push(category)
        },
        removeSubClub(sub_club){
            const index = this.selected_sub_clubs.indexOf(sub_club)
            if (index >= 0)
                this.selected_sub_clubs.splice(index,1)
        }
        
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,400;0,500;0,700;0,800;1,400;1,500;1,700&display=swap');
    :root{
    --primary-color: #BA7EA0;
    --bolder-color: #742957;
    }

    .container{
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 10px;
      padding-bottom:5%;
      font-family: 'Alegreya Sans', sans-serif;
      
        .vertical-menu {
            border-color: black;
            padding-left:15%;
            padding-right:15%;
        }
    
        .accordion {
            background-color: #e0e0e0;
            color: black;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: .1px solid white;
            text-align: left;
            display: flex;
            align-items: center;
            outline: none;
            transition: 0.4s;
            text-decoration: none;
            font-size: 1.5em;
            border-radius: 10px;
            font-weight:500;   
        }
    
        .accordion:after {
            content: '\002B';
            font-weight: bold;
            float: right;
            margin-left: 5px;
            font-size: 1.5em;
            margin-left: auto;
            font-weight:700; 
        }
        
        .active:after {
            content: "\2212";
            font-size: 1.5em;
            font-weight:500; 
        }

        .vertical-menu .accordion.active {
            background-color: var(--primary-color);
            color: white;
        }
    }
    .panel {
        padding: 0 18px;
        background-color: #fafafa;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
    }

    .menu{
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    li {
        display:flex;
        flex-direction:column;
        justify-content: center;

        .sub-club-name {      
            font-size: 1.4em;
            position:relative;
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            
        }
    }

    input[type="checkbox"] {
        display: none;
    }

    label {
    border: 1px solid #fff;
    margin: 10px;
    padding: 10px;
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    label::before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 28px;
    transition-duration: 0.4s;
    transform: scale(0);
    }

    label img {
    height: 6em;
    width: 6em;
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
    border-radius: 10px;
    }

    :checked+label {
    border-color: #ddd;
    border-radius: 10px;
    }

    :checked+label::before {
    content: "✓";
    background-color: grey;
    transform: scale(1);
    
    }

    :checked+label img {
    transform: scale(0.9);
    box-shadow: 0 0 5px #333;
    z-index: -1;
    }

    .selected_sc_list{
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }
    .selected_sub_clubs{
        margin-top: 40px;
        margin-left: 30px;
        font-size: 1.8em;
        color:var(--primary-color);
    }
    .remove_sc{
        margin-left: 5px;
        font-size: 1.4em;
    }
    .next_button{
        margin-top: 15px;
        display:flex;
        justify-content:flex-end;
    }
    
    .next{
        background-color: var(--primary-color);
        color: white;
        cursor: pointer;
        padding: 12px;
        width: 100px;
        height:60px;
        border: .1px solid white;
        text-align: center;
        outline: none;
        transition: 0.4s;
        text-decoration: none;
        font-size: 1.5em;
        border-radius: 10px;
        font-weight: 500;
    }
            
</style>