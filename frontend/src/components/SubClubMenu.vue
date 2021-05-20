<template>
<div class="container">
    <div class="vertical-menu" v-for="category in categories" :key="category.name">
            <button @click="makeActive(category)" :class="{'active':active.includes(category)}" class="accordion">{{category.name}}</button>
            <div class="panel" v-if="active.includes(category)">
                <ul class="menu">
                    <li v-for="sub_club in category.sub_clubs" :key="sub_club.name">
                        <input type="checkbox" :id="sub_club.name" v-model="selected_sub_clubs" :value="sub_club.name"/>
                        <label :for="sub_club.name"><img :src="require('@/assets/'+sub_club.name + '_mini.jpeg')" /></label>
                        <div class="sub-club-name"> {{sub_club.name}}</div> 
                    </li>
                </ul>
            </div>
    </div>
    <div>
        <h2>Selected Sub-Clubs:</h2>
        <p>You can remove the sub-club by clicking the picture of it</p>
        <div>
            <ul class="selected_sub_clubs">
                <li v-for="sub_club in selected_sub_clubs" :key="sub_club.name">
                    <label @click="removeSubClub(sub_club)"><img :src="require('@/assets/'+sub_club + '_mini.jpeg')" /></label>
                    <div class="sub-club-name"> {{sub_club}}</div> 
                </li>
            </ul>
            
        </div>
    </div>
</div>



    
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

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,400;0,500;0,700;0,800;1,400;1,500;1,700&display=swap');
    :root{
    --primary-color: #BA7EA0;
    }

    .container{
      padding:15%;
      font-family: 'Alegreya Sans', sans-serif;
      
        .vertical-menu {
            border-color: black;
            padding-left:10%;
            padding-right:10%;
        }
    
        .vertical-menu .accordion {
            background-color: #eeeeee;
            color: #444;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: .1px solid white;
            text-align: left;
            outline: none;
            font-size: 15px;
            transition: 0.4s;
            text-decoration: none;
            font-size: 1.1em;
            border-radius: 7px;
        }
    
        .accordion:after {
            content: '\002B';
            font-weight: bold;
            float: right;
            margin-left: 5px;
            font-size: 1.1em;
        }
        
        .active:after {
            content: "\2212";
            font-size: 1.1em;
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
            font-size: 1.2em;
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
    height: 5em;
    width: 5em;
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

    .selected_sub_clubs{
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }
    h2{
        margin-top:40px;
        margin-left: 20px;
    }
    p{
        margin-left: 10px;
    }
    
            
</style>