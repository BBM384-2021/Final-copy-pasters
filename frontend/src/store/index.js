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
    new_sub_clubs: [{name: 'Electronic Music'},{name: 'Sculpture'}]
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
  }
})
