/**
 * @function goodPractices
 *  Shows us some basic ways to go through the Object and find information
 *  With the layers of nested data start from the Top most level of game and getting
 *   to the small levels of player Objects
 * 
 *  To view this layering take a look at the ObjectBall Diagram I have uploaded along with
 *   this code. 
 */
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

/**
 * 
 * @param {string} playerName 
 * @returns {integer} @var requestedPoints 
 * 
 * The goal of this functions is to take in the argument(@param) of a string,
 *  which we decide to name @var playerName . This makes it so that we can iterate
 *  through the nested data one layer at a time, like in @function goodPractices() and
 *  get to the necessary information.
 * 
 * This is however not the only way to solve this problem and is definitely slower than
 *  some other possible solutions. I demonstrate this in the following function 
 */
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
/**
 * 
 * @param {string} playerName 
 * @returns {integer} Player's shoe size
 * 
 *  Here is an example of a quicker solution that doesn't need as many iterations through our layers. At this point we know
 *   that the game object either has 2 keys away or home that each have an object themselves. We know that once we are in 
 *   either one of those objects that they have the `players` key where it may or may not have the `playerName` we are looking
 *   for. So we can do the following:
 *               1. Iterate through the object's first layer of keys
 *               2. If the @var teamObj's `players` key, which is an object, has the key of the player
 *                    then we will assign that to our @var playerObj . Otherwise we will just keep @var playerObj the same
 *  
 *  - What's happeneing here is that we first start at gameObject.home or gameObject.away
 * 
 *  - We then use the current teamObj w/ the keys of {players, teamName, teamColors} that we would 
 *     currently be able to directly access the players key right from this point. For example teamObj.players
 * 
 *  - Objects have a nifty piece of functionality that when a key doesn't exist it doesn't error out but instead returns undefined
 * 
 *  - Using that knowledge, I use a turnary to reassign @var playerObj if it does return an object 
 *     otherwise it just stays as playerObj. The else piece works just in case it's in the second iteration we don't overwrite 
 *     the object that we are using
 */
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
/**
 * 
 * @param {string} teamName 
 * @returns {Array} w/ 2 strings of colors
 * 
 * Here I take the same concept as above and just iterate and through the object, if the first iteration hits true then
 * It'll automatically return the colors array of that team. If it doesn't it goes to the next key and check's that team's name
 *  and should return a color. 
 * 
 * This is all with the assumption that the game object will always hold the team in which we are inquiring about
 */
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

/**
 * 
 * @param {Object} game 
 * @returns {Array} this array will have both the away team's name and the home team's name
 * 
 * This one is very straight forward, we know how to access both the away team's data and the home team's data
 * 
 * So we just plug away at what the necessary keys are to access the correct information and we place them in the correct order.
 * This could be made to look cleaner/more abstracted. But in this case we don't need to reinvent the wheel
 */
function teamNames(game){
  return[game.away.teamName, game.home.teamName]
}

teamNames(gameObject())

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.

/**
 * 
 * @param {string} team 
 * @returns {Array} of the Jersey numbers for that respected team
 * 
 * Once again we are going to have to iterate through our game, get to the correalting team. But this time we will have to iterate
 *  through players Object. This is because we have to access every player's data so no matter what we ge the full team's numbers 
 *  into our array
 * 
 * You notice that I take the same concept as teamColors to access the information. I also try not to let my different team variables
 *  get mixed up by naming them something different. This can get tricky when you are trying to name your data. So remember what
 *  you're hoping to work with as your goal
 */
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


/**
 * 
 * @param {string} playerName 
 * @returns {object} playerObj 
 * 
 * At last we reach playerStats, which takes in the argument of a string and we are expected to return an object of that player
 * We have already seen how to find this data either by iterating until we reach the right layer or calling on the right keys to
 *  access the right information. In this case I use the ability to check if the teamObj.players has the player that we are looking
 *  for, if it doesn't then loop again. if it does then assign it to playerObj. Then after all of that's done return playerObj
 */
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
