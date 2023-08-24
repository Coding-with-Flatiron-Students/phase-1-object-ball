

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
 
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if(teamKey === "players"){
        let playerObj = teamObj[teamKey]
        for (let player in playerObj) {
          if(player === playerName){

          }
        }
      }
     
    }
  }
}

// then, call the function so it runs!
// goodPractices()


function numPointsScored(playerName){
  let game = gameObject();
  let requestedPoints
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if(teamKey === "players"){
        let playerObj = teamObj[teamKey]
        for (let player in playerObj) {
          if(player === playerName){
            requestedPoints = playerObj[player].points
            
          }
        }
      }
     
    }
  }
  return requestedPoints
}

console.log(numPointsScored("DeSagna Diop"))

// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.

function shoeSize(playerName){
  let game = gameObject();
  let playerObj

  for(let teamKey in game){
    let teamObj = game[teamKey]
    playerObj = teamObj.players[playerName] ? teamObj.players[playerName] : playerObj  
  }
  
  return playerObj.shoe
  
}

shoeSize("Alan Anderson")


// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName){
  const game = gameObject()

  for(let teamKey in game){
    if(game[teamKey].teamName === teamName){
      return game[teamKey].colors
    }
  }

}
teamColors("Charlotte Hornets")

// Build a function, teamNames, that operates on the game object to return an array of the team names.

function teamNames(game){
  return[game.away.teamName, game.home.teamName]
}

teamNames(gameObject())

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.

function playerNumbers(team){
  const game = gameObject()
  const jerseyNumbers = []

  for(let teamKey in game){
    const {players, teamName} = game[teamKey] //destructing 
    if(teamName === team){
      for(let player in players){
        let playerNumber = players[player].number
        jerseyNumbers.push(playerNumber)
      }
    }
  }

  return jerseyNumbers
}

console.log(playerNumbers("Brooklyn Nets"))

// Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats. Check out the following example of the expected return value of the playerStats function:

function playerStats(playerName){
  let game = gameObject();
  let playerObj

  for(let teamKey in game){
    let teamObj = game[teamKey]
    
    if(teamObj.players[playerName]){
      playerObj = teamObj.players[playerName]
    }
  }

  return playerObj
}


console.log(playerStats("DeSagna Diop"))
