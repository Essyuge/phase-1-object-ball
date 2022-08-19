function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
  
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
  
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
  
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
  
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
  
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
  
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
  
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
  
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  function findPlayer(name) {
    // creating a re-usable function for finding the user by his name
    let obj = gameObject();
    let matchingPlayer;
    Object.values(obj).find((team) => {
      return Object.entries(team.players).find(([name_, stats]) => {
        // searching for the player in the list of players
        if (name_ === name) {
          matchingPlayer = stats; //getting the index of the player in the `team.players` list
          return true; // inorder to exit the loop
        }
        return false; // continue the loop
      });
    }); // this will return the team the player was found in either `home`or `away`
    return matchingPlayer; //returning the matched player
  }
  
  function numPointsScored(name) {
    const player = findPlayer(name); // getting the user using the function above and passing the `name`
    return player?.points;
  }
  
  function shoeSize(name) {
    const player = findPlayer(name); // getting the user using the function above and passing the `name`
    return player?.shoe;
  }
  
  function teamColors(nameOfTeam) {
    let obj = gameObject();
    const team = Object.values(obj).find((team_) => {
      return team_.teamName === nameOfTeam; // finding the team with a matching name
    });
    return team?.colors;
  }
  
  function teamNames() {
    let obj = gameObject();
    const teamNamesList = []; // we start the list as empty so we can add names using a loop
    Object.values(obj).forEach((team) => {
      // iterate through object
      teamNamesList.push(team.teamName); // adding the name of the team to the list
    });
  
    return teamNamesList; // returning the list with names added to it.
  }
  
  function playerNumbers(nameOfTeam) {
    let obj = gameObject();
    const team = Object.values(obj).find((team_) => {
      return team_.teamName === nameOfTeam;
    });
  
    const playerNumbers = Object.values(team?.players).map((player) => {
      return player.number;
    });
  
    return playerNumbers;
  }
  
  function playerStats(name) {
    const player = findPlayer(name); // using the function we created before to get the player using the name
    return player;
  }
  
  function bigShoeRounds() {
    let obj = gameObject();
    let largestShoeSize = 0;
    let largestShoeSizePlayerstats;
    Object.values(obj).forEach((team) => {
      Object.values(team.players).forEach((player) => {
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          largestShoeSizePlayerstats = player;
        }
      });
    });
    return largestShoeSizePlayerstats?.rebounds;
  }
  
  function mostPointsScored() {
    let obj = gameObject();
    let mostPoints = 0;
    let mostPointsPlayerstats;
    Object.values(obj).forEach((team) => {
      Object.values(team.players).forEach((player) => {
        if (player.points > mostPoints) {
          mostPoints = player.points;
          mostPointsPlayerstats = player;
        }
      });
    });
    return mostPointsPlayerstats?.points;
  }
  
  function findPlayerWithLongestName() {
    let obj = gameObject();
    let longestNameLength = 0;
    let longestNameLengthPlayerstats;
    let longestNameLengthPlayerName;
    Object.values(obj).forEach((team) => {
      Object.entries(team.players).forEach(([name, stats]) => {
        if (name.length > longestNameLength) {
          longestNameLengthPlayerName = name;
          longestNameLength = name.length;
          longestNameLengthPlayerstats = stats;
        }
      });
    });
    return { ...longestNameLengthPlayerstats, name: longestNameLengthPlayerName };
  }
  
  function findPlayerWithMostSteals() {
    let obj = gameObject();
    let mostSteals = 0;
    let mostStealsPlayerstats;
    let mostStealsPlayerName;
    Object.values(obj).forEach((team) => {
      Object.entries(team.players).forEach(([name, stats]) => {
        if (stats.steals > mostSteals) {
          mostSteals = stats.steals;
          mostStealsPlayerstats = stats;
          mostStealsPlayerName = name;
        }
      });
    });
  
    return { ...mostStealsPlayerstats, name: mostStealsPlayerName };
  }
  
  function playerWithLongestName() {
    const player = findPlayerWithLongestName();
    return player?.name;
  }
  
  function doesLongNameStealATon() {
    const longestNamePlayer = findPlayerWithLongestName();
    const mostStealsPlayer = findPlayerWithMostSteals();
    return mostStealsPlayer.name === longestNamePlayer.name;
  }
  
  function winningTeam() {
    let obj = gameObject();
    let mostPoints = 0;
    let mostPointsteamName;
    Object.values(obj).forEach((team) => {
      let totalTeamPoints = 0;
      Object.values(team.players).forEach((player) => {
        totalTeamPoints = totalTeamPoints + player.points;
      });
      if (totalTeamPoints > mostPoints) {
        mostPointsteamName = team.teamName;
        mostPoints = totalTeamPoints;
      }
    });
    return mostPointsteamName;
  }