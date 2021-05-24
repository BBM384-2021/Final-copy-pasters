import { createStore } from 'vuex'

export default createStore({
  state: {
    categories: 
	[	
		{
			name: "Sports",
			sub_clubs: 
			[
			{
				name: "Basketball",
				questions: 
				[
					{"Have you ever watched any Basketball match?": ["None", "A few Times", "Sometimes", "Very Often"]},
					{"Have you ever played Basketball?": ["None", "A Few Times", "sometimes", "A lot"]},
					{"Do you know the rules of Basketball?": ["I don't know", "I know a little", "I know enough", "I know very good"]},
					{"Do you enjoy talking about basketball matches?": ["I don't like", "I like", "I enjoy", "I love"]},
					{"How many players are there in a match in a Basketball team?": ["11", "10", "6", "5"]},

					
				]
			},
			{
				name: "Football",
				questions: 
				[
					{"Have you ever watched any Football match?": ["None", "A few Times", "Sometimes", "Very Often"]},
					{"Do you know the rules of Football?": ["I don't know", "I know a little", "I know enough", "I know very good"]},
					{"Do you enjoy talking about Football matches?": ["I don't like", "I like", "I enjoy", "I love"]},
					{"How many players are there in a match in a Football team?": ["5", "6", "10", "11"]},
					{"How many Football matches have you ever watched in the stadium?": ["0", "1", "2", "3+"]},
					
				]
			},
			{
				name: "Yoga",
				questions: 
				[
					{"Do you enjoy doing Yoga?": ["I don't like", "I like", "I enjoy", "I love"]},
					{"Do you find Yoga helpful/relaxing?": ["Not At All", "A little", "Quite", "Always"]},
					{"Have you ever been in a Yoga course?": ["None", "Once", "More Than One", "A lot"]},
					
				],
				"img": "images/yoga.jpeg"
			},
			{
				name: "Tennis",
				questions: 
				[
					{"Which one is a tennis player?": ["Lebron James", "Leonel Messi", "Lewis Hamilton", "Serena Williams"]},
					{"How is the scores of a tennis match count?": ["0-1-2-3-win", "0-3-6-9-win", "0-15-30-45-win", "0-15-30-40-win"]},
					{"Have you ever watched any Tennis match?": ["None", "A few Times", "Sometimes", "Very Often"]},
					{"Do you know the rules of Tennis?": ["I don't know", "I know a little", "I know enough", "I know very good"]},
					{"Do you like talking about Tennis?": ["I don't like", "I like", "I enjoy", "I love"]},

				]
			},
			{
				name: "Swimming",
				questions: 
				[
					{"How would you describe your level of Swimming?": ["I don't know", "Beginner", "Adequate", "Professional"]},
					{"Do you enjoy Swimming?": ["I don't like", "I like", "I enjoy", "I love"]},
					{"Have you ever watched any Swimming competition?": ["None", "A few Times", "Sometimes", "Very Often"]},
					{"Do you like talking about Swimming?": ["I don't like", "I like", "I enjoy", "I love"]}
				]
			}
			]
		},
		{
			name: "Music",
			sub_clubs:
			[
			{
				name: "Violin",
				questions: 
				[
					{"How would you describe your interest in playing the Violin?": ["None", "A little", "Quite", "A Lot"]},
					{"Do you like listening instrumental musics (especially Violin)?": ["I don't like", "I like", "I enjoy", "I love"]},
					{"How would you describe your level of playing the Violin?": ["I don't know", "Beginner", "Adequate", "Professional"]},
					{"Do you like listening to classical musics?": ["Not At All", "A little", "Often", "Always"]},

				]
			},
			{
				name: "Piano",
				questions: 
				[
					{"How would you describe your level of playing the Piano?": ["I don't know", "Beginner", "Adequate", "Professional"]},
					{"Which one is NOT a musical note?": ["B", "C", "G", "H"]},
					{"How would you describe your interest in playing the Piano?": ["None", "A little", "Quite", "A Lot"]},
					{"Do you like listening instrumental musics (especially Piano)?": ["I don't like", "I like", "I enjoy", "I love"]},
				]
			},
			{
				name: "Guitar",
				questions: 
				[
					{"How would you describe your interest in playing the Guitar?": ["None", "A little", "Quite", "A Lot"]},
					{"How many strings are there in a typical Guitar?": ["4", "7", "5", "6"]},
					{"How would you describe your level of playing the Guitar?": ["I don't know", "Beginner", "Adequate", "Professional"]},
					{"Do you like listening instrumental musics (especially Guitar)?": ["I don't like", "I like", "I enjoy", "I love"]},

				]
			},
			{
				name: "Electronic Music",
				questions: 
				[
					{"How old are you?": ["older than 50", "41-50", "30-40", "younger than 30"]},
					{"How would you describe yourself, introvert or extrovert?": ["extrovert", "closer to extrovert", "closer to introvert", "introvert"]},
				]
			}
			]	
		},
		{
			name: "Visual Arts",
			sub_clubs:
			[
			{
				name: "Painting",
				questions:
				[
					{"How would you describe your mastery of Painting?": ["Novice", "Beginner", "Proficient", "Expert"]},
					{"Have you ever taken any Painting course?": ["None", "1-2 times", "2-4 times", "More than 4 times"]},
					{"Which one is NOT a Painter?": ["Pablo Picasso", "Vincent Van Gogh", "Edvard Munch", "Frédéric Chopin"]},
					{"How many paintings have you ever bought?": ["None", "1-3", "3-6", "6+"]},
					
				]
			},
			{
				name: "Drawing",
				questions:
				[
					{"How would you describe your mastery of Drawing?": ["Novice", "Beginner", "Proficient", "Expert"]},
					{"Have you ever drawn someone (sketching)?": ["None", "Once", "Twice", "More than two"]},
					{"Do you like talking about Drawing?": ["I don't like", "I like", "I enjoy", "I love"]},
				]
			},
			{
				name: "Photography",
				questions:
				[
					{"How would you describe your knowledge of photography (tecniques, concepts etc.)?": ["Novice", "Beginner", "Proficient", "Expert"]},
					{"Do you like talking about Photography?": ["I don't like", "I like", "I enjoy", "I love"]},
					{"Do you like taking photographs when you travel?": ["I don't like", "I like", "I enjoy", "I love"]},
				]
			},
			]
		},
		{
			name: "Hobbies",
			sub_clubs: 
			[
			{
				name: "Puzzle",
				questions:
				[
					{"Do you enjoy solving problems?": ["I don't like", "I like", "I enjoy", "I love"]},
					{"Do you like to put things in order?": ["None", "A little", "Often", "Always"]},
					{"How many puzzles have you ever solved (completed)?": ["0", "1-2", "2-4", "4+"]},
					{"8. Do you enjoy building/assembling things?": ["Not At All", "A little", "Quite", "Always"]},
					
				]
			},
			{
				name: "Sudoku",
				questions:
				[
					{"Would you describe yourself an analytical person?": ["Not At All", "A little", "Often", "Always"]},
					{"Do you enjoy solving math problems?": ["I don't like", "I like", "I enjoy", "I love"]},
					{"Do you know the rules of Sudoku?": ["I don't know", "I know a little", "I know enough", "I know very good"]},
					{"How many cells are there in a sudoku grid?": ["36", "121", "100", "81"]},
					
				]
			},
			{
				name: "Reading",
				questions:
				[
					{"How many pages do you read a day?": ["0", "0-40", "40-100", "100+"]},
					{"Do you enjoy talking about books?": ["I don't like", "I like", "I enjoy", "I love"]},
					{"How many books have you read in your life?": ["0-10", "10-50", "50-100", "100+"]},
					{"Which one is NOT a book?": ["Crime and Punishment", "A Tale of Two Cities", "The Sorrows of Young Werther", "Pulp Fiction"]},
	
				]
			},
			{
				name: "Cooking",
				questions:
				[
					{"Do you like to go out for dinner?": ["I love", "I enjoy", "I like", "I don't like"]},
					{"Have you ever cooked for your friends?": ["None", "Once", "A few times", "A lot"]},
					{"How many dinner recipes do you know?": ["None", "1-5", "5-10", "10+"]},
					{"Have you ever cooked a dessert, and was it delicious?": ["No, No", "Yes, No", "Yes, Not Bad", "Yes, Delicious"]},
				]
			},
			{
				name: "Chess",
				questions:
				[
					{"Do you enjoy solving problems?": ["I don't like", "I like", "I enjoy", "I love"]},
					{"Do you know the rules of Chess?": ["I don't know", "I know a little", "I know enough", "I know very good"]},
					{"Which one is NOT a grandmaster?": ["Magnus Carlsen", "Garry Kasparov", "Bobby Fischer", "Friedrich Engels"]},
					{"How would you describe your level of playing Chess?": ["I don't know", "Beginner", "Adequate", "Professional"]},
				]
			},
			
			]
		}
		
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
