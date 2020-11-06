// scoreboard by date... leave off ?dates=... if you want top 25 teams. //
const scoreboardURL = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard?limit=900'

const displayScoreboard = async () => {
    const jsonData = await fetch (scoreboardURL)
    const data = await jsonData.json()
    console.log(data) 

    
let gamesList = data.events.map(game => {

const gameId = game.id
const gameName = game.name
const awayScore = game.competitions[0].competitors[1].score
const homeScore = game.competitions[0].competitors[0].score
const awayTeamName = game.competitions[0].competitors[1].team.displayName
const homeTeamName = game.competitions[0].competitors[0].team.displayName
const awayTeamColor = game.competitions[0].competitors[1].team.color
const homeTeamColor = game.competitions[0].competitors[0].team.color
const awayLogo = game.competitions[0].competitors[1].team.logo
const homeLogo = game.competitions[0].competitors[0].team.logo


let awayTeamScore = document.getElementById("awayTeamScore")
awayTeamScore.style.background = `#${awayTeamColor}`

let homeTeamScore = document.getElementById("homeTeamScore")
homeTeamScore.style.background = `#${homeTeamColor}`

const clickedGame = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=${gameId}`


    return `
    <section id="eventsContainer">
    <div id="gameTime">${game.status.type.detail}</div>
    <div id="awayTeamScore" style=background:#${awayTeamColor};><img src="${awayLogo}" width="25" height="25" style=padding:5px;background:white;border-radius:50%;margin-right:4px;>${awayTeamName} ${awayScore}</div>
    <div id="homeTeamScore" style=background:#${homeTeamColor};><img src="${homeLogo}" width="25" height="25" style=padding:5px;background:white;border-radius:50%;margin-right:4px;>${homeTeamName} ${homeScore}</div>
    <a href='${clickedGame}'><button id="btn" onclick=>Follow Live</button></a>

    </section>
    `

})


const theGames = document.getElementById('eventsContainer')
    theGames.innerHTML = gamesList.join('')


// let theGame = document.getElementById('venue')
// theGame.innerHTML = `${gameName}`

// let thisPlay = document.getElementById('currentPlayContainer')
// thisPlay.innerHTML = `${currentPlay}`





}

displayScoreboard()

