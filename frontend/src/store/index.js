import { createStore } from 'vuex'

export default createStore({
  state: {
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
          {name: 'Rock Music'},
      ]},
      {name:'Visual Arts', sub_clubs:[
          {name: 'Painting'},
          {name: 'Drawing'},
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
    selected_sub_clubs: [],
    new_sub_clubs: [{name: 'Electronic Music'},{name: 'Sculpture'}],

    //current user
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
    
    //all sub-clubs
    subclubs:[{
      id:0,
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
                  },]
      },{
      id:1,
      name:"Piano",
      img: require("../assets/sub-clubs-images/Piano.jpeg"),
      rate: 4,
      about:"This is about Piano subclub",
      rates_reviews:[{
              rate: 3,
              review: "not bad",
              },
              {
              rate: 5,
              review: "very good",
              },
          ]}, 
    ],
    sub_club_member_reports:[
      {id:0,member_name:"Emir", description:"x",attachment:""},
      {id:1,member_name:"Ali", description:"x",attachment:""},
      {id:2,member_name:"Veli", description:"y",attachment:""},
      {id:3,member_name:"Ece", description:"z",attachment:""},
      {id:4,member_name:"Efe", description:"xss",attachment:""},
      {id:5,member_name:"Selim", description:"xfff",attachment:""},
      {id:6,member_name:"Hande", description:"xvfvd",attachment:""},
    ],
    
    //all members of a sub-club
    sub_club_members:[
      {
        "subClubId": 0,
        "userId": 0,
        "subClubRole": 0,
        "banCount": 0
      },
      {
        "subClubId": 0,
        "userId": 1,
        "subClubRole": 0,
        "banCount": 1
      },
      {
        "subClubId": 0,
        "userId": 2,
        "subClubRole": 0,
        "banCount": 3
      }
    ],
    
 
  },
  mutations: {
    makeActive(state, category){
      const index = state.active.indexOf(category)
      if (index >= 0)
          state.active.splice(index,1)
      else
          state.active.push(category)
    },
    addSubClub(state,sub_club){
      const index = state.selected_sub_clubs.indexOf(sub_club)
      if (index < 0)
          state.selected_sub_clubs.push(sub_club)
    },
    removeSubClub(state, sub_club){
      const index = state.selected_sub_clubs.indexOf(sub_club)
      if (index >= 0)
          state.selected_sub_clubs.splice(index,1)
    }
  },
  actions: {
   
  },
  modules: {
  },
  getters:{
    getSubClubs(state){
      return state.subclubs.filter(s => s.name)
    }
  }



})