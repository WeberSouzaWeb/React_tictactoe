# Getting Started with Create React Tic-Tac-Toe game

This project was bootstrapped with a tutorial [Create React App](https://react.dev/learn/tutorial-tic-tac-toe).
Open [http://localhost:3000](http://localhost:3000) 

## Available Scripts

The created functions are capable of being exported and consecutively modularized. This practice is a good way to make the code oranized and optimized.
The main function of this problem is the Board(), responsible for building all the dynamism of the game. Orchestrating play orders and states, the function is responsible for building the logic and rules of the game. For example, who wins and who is next instead of playing..
The generated module is a function that corresponds to the clickable component, natively called Button. The denotation of the Square() function considered a component in another file to facilitate use and future changes. In this function are passed two props, content value inside the button and the coordinates where they were clicked.      

### Board()

Functions are initialized with state constants to see which player, "x" or "o". The states of each 'square' is loaded into an array. The coordinates of each element are the position coordinates in the array. I use this coordinate to know if there is a move already made in the square. 
Internally a function that calculates if there is a winner to check the positions that give the victory. If they are corresponding the game takes place. 
The return of the function in React is the assembly of the appearance in grid.    

### Square()

 The functions receive as parameters the value and the coordinate where it was clicked. The main function is to take these two props and do the manipulation. The Button is imported from the MUI library. 


**Note: this is a one-way operation.**



## Learn More
