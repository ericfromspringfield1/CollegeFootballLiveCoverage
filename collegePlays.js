const gameIds = { 
    ukAub: 401237034,
    ufMiss: 401236952,
    msuLsu: 401237035,
    ugaArk: 401237033,
    bamaMizz: 401236951,
    vuAM: 401237037,
    utSc: 401237036,
   
    amBama: 401237093,
    mizzUT: 401237099,
    aubUGA: 401237095,
    lsuVU: 401237098,
    arkMSU: 401237094,
    missUK: 401237097,
    scUF: 401237096,
   
    utUga: 401237103,
    ufAm: 401237102,
    mizzLSU: 401237105,
    scVandy: 401237106,
    arkAub: 401237101,
    bamaMiss: 401237100,
    msuUk: 401237104,
    texOu: 401236005,
    umClem: 401234604,
   
    aubSc: 401237109,
    ukUt: 401237111,
    missArk: 401237108,
    AmMsu: 401237112,
    UgaBama: 401237107,
   
    bamaUt: 401237114,
    aubMiss: 401237115,
    ukMizz: 401237122,
    scLSU: 401237118,
   
    lsuAub: 401237121,
    ugaUK: 401237117,
    missVU: 401237123,
    msuBama: 401237119,
    arkAM: 401237120,
    mizzUF: 401237116,

    bamaLSU: 401237128,
   
    }
   

    const gameUrl = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=401265817`
    
    const displayData = async () => {
        const jsonData = await fetch (gameUrl)
        const data = await jsonData.json()
        console.log(data) 

    
        
            
            
            
            // let theGame = document.getElementById('venue')
            // theGame.innerHTML = `${gameName}`
            
            // let thisPlay = document.getElementById('currentPlayContainer')
            // thisPlay.innerHTML = `${currentPlay}`
            
            

    
    
    // updated fetch to allow for asynchronous processing//
    
    // const displayData = async () => {
    //     const jsonData = await fetch (gameUrl)
    //     .then(fetch(scoreboardURL))
    //     const data = await jsonData.json()
    //     console.log(data) 
    
         
    
        
        // old fetch used prior to 9/21/20
/*fetch(nflURL)
.then(function(resp) {
    return resp.json();
})
.then(function (data) {
    console.log(data);
*/



// document.getElementById('btn').addEventListener("click", (e) => {
//     let renderClick = document.getElementsByTagName('body') 
//     renderClick.innerHTML = e.target.value  
//     console.log(e.target.value)
// })

    // game info container //
    const gameId = data.header.competitions.id
    const awayTeamRecord = data.header.competitions[0].competitors[1].record[0].displayValue
    const homeTeamRecord = data.header.competitions[0].competitors[0].record[0].displayValue
    const awayTeamName = data.header.competitions[0].competitors[1].team.displayName
    const homeTeamName = data.header.competitions[0].competitors[0].team.displayName
    const awayTeamName1 = data.header.competitions[0].competitors[1].team.location
    const homeTeamName1 = data.header.competitions[0].competitors[0].team.location
    const awayTeamAbbrev = data.header.competitions[0].competitors[1].team.abbreviation
    const homeTeamAbbrev = data.header.competitions[0].competitors[0].team.abbreviation
    let awayRank = data.header.competitions[0].competitors[1].rank
    let homeRank = data.header.competitions[0].competitors[0].rank
    let awayScore = data.header.competitions[0].competitors[1].score
    let homeScore = data.header.competitions[0].competitors[0].score
    const weekNumber = data.header.week
    const awayTeamColor = data.boxscore.teams[0].team.color
    const homeTeamColor = data.boxscore.teams[1].team.color
    let awayLogo = data.header.competitions[0].competitors[1].team.logos[1].href
    let homeLogo = data.header.competitions[0].competitors[0].team.logos[1].href
    let awayDarkLogo = data.header.competitions[0].competitors[1].team.logos[0].href
    let homeDarkLogo = data.header.competitions[0].competitors[0].team.logos[0].href
    let venueName = data.gameInfo.venue.fullName
    let venueCity = data.gameInfo.venue.address.city
    let venueState = data.gameInfo.venue.address.state
    //let articleLink = data.article.links.web.href
    //let currentDrive = dataives.current.description
    homeScoreInt = parseInt(homeScore)
    awayScoreInt = parseInt(awayScore)
    
    if (awayScore === undefined) 
    awayScore = 0
    
    if (homeScore === undefined)
    homeScore = 0

    // article links, photos, videos //

    // const theArticle = document.getElementById('article')
    // theArticle.innerHTML = `<div><a href="{articleLink}>${data.article.headline}</a><div>`
    


    // const video = data.videos[0].links.source.HD.href
    // let vidLinks = data.videos.map(vid => {
    //     return`
    //     <h1 id='sectionHeadline'></h1>
    //     <div>
    //     <video id='video' width="400" height="350" controls><source src=${video}></video>
    //     <h5 id='videoHeadline'>${vid.headline}</h5>
    //     </div>
     
    //     `
    // })

    // const theVideos = document.getElementById('videoContainer')
    // theVideos.innerHTML = vidLinks.join('')

    
    
    

    // let newsLinks = data.news.articles.map(news => {
    //     return `
    //     <section id='newsContainer'>
    //     <div>
    //     <a id='newsSectionHeadline'href=${news.links.web.href}>${news.headline}</a>
    //     <p id='newsDescription'>${news.description}</p>
    //     </div>
    //     </section>
    //     `
    // })
    // const theNews = document.getElementById('newsContainer')
    // theNews.innerHTML = newsLinks.join('')

    
    
    
        
    // weather - conditional statements by precip chances //
    
    if (data.header.competitions[0].status.type.completed === false || data.header.competitions[0].status.type.description === false){
      if (data.gameInfo.weather === undefined) { 
        document.getElementById('weather').style.display = 'none'
       } else {
    let weatherTemp = data.gameInfo.weather.temperature
    let weatherPrecip = data.gameInfo.weather.precipitation
    let weatherTeamHigh = data.gameInfo.weather.highTemperature
    let weatherTempLow = data.gameInfo.weather.lowTemperature
      
     switch (true)  {

    //     case (data.header.competitions[0].status.type.description === "Scheduled" && weatherPrecip >= 0 && weatherPrecip < 20):
    //     weather = document.getElementById('weather')
    //     weather.innerHTML = `High ${weatherTeamHigh}&#176 / Low ${weatherTempLow}&#176 &#x26C5` 
    //     weather.style.color = `#${homeTeamColor}`
    //     break;

    //     case (data.header.competitions[0].status.type.description === "Scheduled" && weatherPrecip > 50 && weatherPrecip > 20):
    //     weather = document.getElementById('weather')
    //     weather.innerHTML = `High ${weatherTeamHigh}&#176 / Low ${weatherTempLow}&#176 &#x1F326` 
    //     weather.style.color = `#${homeTeamColor}`
    //     break;

    //     case (data.header.competitions[0].status.type.description === "Scheduled" && weatherPrecip > 50 && weatherPrecip < 70):
    //     weather = document.getElementById('weather')
    //     weather.innerHTML = `High ${weatherTeamHigh}&#176 / Low ${weatherTempLow}&#176 &#x1F326` 
    //     weather.style.color = `#${homeTeamColor}`
    //     break;

    //     case (data.header.competitions[0].status.type.description === "Scheduled" && weatherPrecip > 70):
    //     weather = document.getElementById('weather')
    //     weather.innerHTML = `High ${weatherTeamHigh}&#176 / Low ${weatherTempLow}&#176 &#x1F327` 
    //     weather.style.color = `#${homeTeamColor}`
    //     break;

            case (weatherPrecip >= 0 && weatherPrecip < 20):
                weather = document.getElementById('weather')
                weather.innerHTML = `${weatherTemp}&#176  &#x1F324`
                weather.style.color = `#${homeTeamColor}`
                break;

            case (weatherPrecip > 20 && weatherPrecip < 50):
                weather = document.getElementById('weather')
                weather.innerHTML = `${weatherTemp}&#176  &#x1F326`
                weather.style.color = `#${homeTeamColor}`
                break;

            case (weatherPrecip > 50 && weatherPrecip < 70):
            weather = document.getElementById('weather')
            weather.innerHTML = `${weatherTemp}&#176  &#x1F327`
            weather.style.color = `#${homeTeamColor}`
            break;

            case (weatherPrecip > 70):
            weather = document.getElementById('weather')
            weather.innerHTML = `${weatherTemp}&#176  &#x1F327`
            weather.style.color = `#${homeTeamColor}`
            break;

        
    
        default:
            break;
    
    }
  } 
}


let venueImage2 = data.gameInfo.venue.images[0].href
let venuePhoto = document.getElementById('venuePhoto')

if (data.header.competitions[0].status.type.description !== "Scheduled"){
venuePhoto.style.display = "none"
}
    // if no images or only one image is in the gameInfo images array, everything else can load and images will not be undefined //
    switch(data.gameInfo.venue !== undefined) {
        default: 
        let venueImage = data.gameInfo.venue.images[1].href
        venuePhoto.innerHTML = `<img src="${venueImage}" width="675" height="250"> <img src="${venueImage2}" width="635" height="250">`
        venuePhoto.style.justifyContent = 'center';
        venuePhoto.style.alignItems = 'center'
        break;

        case (data.gameInfo.venue.images[0] === undefined && data.gameInfo.venue.images[1] === undefined): 
        document.getElementById('venuePhoto').style.display = "none"
        break;

        case (data.gameInfo.venue.images[1] === undefined):
        venuePhoto.innerHTML = `<img src="${venueImage2}" width="1415" height="400">` 
        venuePhoto.style.justifyContent = 'center';
        venuePhoto.style.alignItems = 'center'
        break;

        case (data.gameInfo.venue.images[0] === undefined):
        venuePhoto.innerHTML = `<img src="${venueImage}" width="1415" height="400">`
        venuePhoto.style.justifyContent = 'center';
        venuePhoto.style.alignItems = 'center'
        break;

        
    
    }  


    const venue = document.getElementById('venue')
    venue.innerHTML = `<img src="${awayDarkLogo}" width="75" height="75" align="center"> ${venueName} ${venueCity}, ${venueState} <img src="${homeDarkLogo}" width="75" height="75" align="center">`
    venue.style.backgroundColor = `#${homeTeamColor}`

     if (data.header.competitions[0].broadcasts[0] !== undefined) {
            switch(true) {
            default: 
            gameDescription = document.getElementById('gameDescription')
            gameDescription.innerHTML = `Broadcast Live On ${data.header.competitions[0].broadcasts[0].media.shortName}`
            break;
            
            case (data.header.competitions[0].broadcasts[0].media.shortName === "CBS"): 
            gameDescription = document.getElementById('gameDescription')
            gameDescription.innerHTML = `Broadcast Live On ${data.header.competitions[0].broadcasts[0].media.shortName} <img src="sec-on-cbs-logo.png" width="75" height="75" align="center">`
            break;

            case (data.header.competitions[0].broadcasts[0].media.shortName === "ESPN"): 
            gameDescription = document.getElementById('gameDescription')
            gameDescription.innerHTML = `Broadcast Live On ${data.header.competitions[0].broadcasts[0].media.shortName} <img src="espn-logo.png" width="75" height="75" align="center">`
            break;

            case (data.header.competitions[0].broadcasts[0].media.shortName === "ESPNU"): 
            gameDescription = document.getElementById('gameDescription')
            gameDescription.innerHTML = `Broadcast Live On ${data.header.competitions[0].broadcasts[0].media.shortName} <img src="espnu-logo.png" width="75" height="75" align="center">`
            break;

            case (data.header.competitions[0].broadcasts[0].media.shortName === "SEC Network"): 
            gameDescription = document.getElementById('gameDescription')
            gameDescription.innerHTML = `Broadcast Live On ${data.header.competitions[0].broadcasts[0].media.shortName} <img src="sec-network-logo.png" width="75" height="75" align="center">`
            break;

            case (data.header.competitions[0].broadcasts[0].media.shortName === "ABC"): 
            gameDescription = document.getElementById('gameDescription')
            gameDescription.innerHTML = `Broadcast Live On ${data.header.competitions[0].broadcasts[0].media.shortName} <img src="abc-logo.png" width="75" height="75" align="center">`
            break;

            case (data.header.competitions[0].broadcasts[0].media.shortName === "NBC"): 
            gameDescription = document.getElementById('gameDescription')
            gameDescription.innerHTML = `Broadcast Live On ${data.header.competitions[0].broadcasts[0].media.shortName} <img src="nbc-logo.png" width="75" height="50" align="center">`
            break;
        
        }    

    
    
    }


    
    const gameStatus = document.getElementById('gameStatus')
    gameStatus.innerHTML = `${data.header.competitions[0].status.type.detail}`
    gameStatus.style.backgroundColor = `#${homeTeamColor}`

        
    

    
    if (awayRank === undefined) {
    const awayTeam = document.getElementById('awayTeam')
    awayTeam.innerHTML = `(${awayTeamRecord}) <img src="${awayDarkLogo}" width="75" height="75" align="center"> ${awayTeamName} ${awayScore}`
    awayTeam.style.backgroundColor = `#${awayTeamColor}`

    } else {
    const awayTeam = document.getElementById('awayTeam')
    awayTeam.innerHTML = `(${awayTeamRecord}) <img src=${awayDarkLogo} width="75" height="75" align="center"> ${awayRank} ${awayTeamName} ${awayScore}`
    awayTeam.style.backgroundColor = `#${awayTeamColor}`
    }

    if (homeRank === undefined) {
    const homeTeam = document.getElementById('homeTeam')
    homeTeam.innerHTML = `(${homeTeamRecord}) <img src=${homeDarkLogo} width="75" height="75" align="center"> ${homeTeamName} ${homeScore}`
    homeTeam.style.backgroundColor = `#${homeTeamColor}`
   
    } else {
    const homeTeam = document.getElementById('homeTeam')
    homeTeam.innerHTML = `(${homeTeamRecord}) <img src=${homeDarkLogo} width="75" height="75" align="center"> ${homeRank} ${homeTeamName} ${homeScore}`
    homeTeam.style.backgroundColor = `#${homeTeamColor}`
    }

    // plays container //  
    if (data.drives === undefined) {
        document.getElementById('currentPlay').style.display = 'none'; 
    } else {
    (data.header.competitions[0].status.type.completed === false || data.header.competitions[0].status.type.description === false) 
       
        let theDownDistance = []
        function getDownDistance() {
        let currentDownDistance = data.drives.current.plays.pop();
        theDownDistance.push(currentDownDistance.end.downDistanceText)
       
           return theDownDistance
    }
}

    
    if (data.drives === undefined) {
        document.getElementById('currentPlay').style.display = 'none'; 

    } else {
        if (data.header.competitions[0].status.type.completed === false) {   
        let currentPlay = []
        function getLastPlay() {
        let lastPlay = data.drives.current.plays.pop();
        currentPlay.push(lastPlay.text)
            return currentPlay      
        }
    }
}


        if (data.drives === undefined) {
            document.getElementById('currentPlay').style.display = 'none'; 

        } else {
            if (data.header.competitions[0].status.type.completed === false && data.header.competitions[0].status.type.description !== "Scheduled" && data.drives.current.team.logos[0].href !== undefined) {
                driveTeam = data.drives.current.team.logos[0].href
                const theLastPlay = document.getElementById('currentPlay')
                theLastPlay.innerHTML = `${getLastPlay()}`
                   
        const theDownDistanceIs = document.getElementById('theDownDistanceIs')
        theDownDistanceIs.innerHTML = `<img src=${driveTeam} width="75" height="75" align='center'> ${getDownDistance(currentPlay)}`
        //**wcurrent drive info added** theDownDistanceIs.innerHTML = `<img src=${driveTeam} width="75" height="75"> ${getDownDistance()} - (${currentDrive})`

        }
    }
    
    
        
        // scoring and other events (TD, FG, Penalties, etc) //
        // touchdown // 
        
        if (data.header.competitions[0].status.type.completed === false && data.header.competitions[0].status.type.description !== "Scheduled") {
            if (data.drives.current.result !== "TD") {
                touchdown = document.getElementById('touchdown')
                touchdown.style.display = "none"
            }
        if (data.drives.current.result === "TD")  {
            venuePhoto.style.display = 'none'
            touchdownEvent = data.drives.current.team.displayName
            touchdown = document.getElementById('touchdown')
            touchdown.innerHTML =  `TOUCHDOWN <br> <img src="${driveTeam}" width="250" height="250">`
         }  
        }
   
        
         // slow fade/flash background behind touchdown message //   
            var ofs = 0;
            var el = document.getElementById('touchdown');
            
            window.setInterval(function(){
                el.style.background = `rgba(0,0,0,${Math.abs(Math.sin(ofs))})`;
                ofs += 0.01;
            
            }, 10);

    
        // field goal //
        if (data.header.competitions[0].status.type.completed === false && data.header.competitions[0].status.type.description !== "Scheduled") {
        if (data.drives.current.result === "FG") {
            venuePhoto.style.display = 'none'
            fieldGoalEvent = data.drives.current.team.displayName
            fieldGoal = document.getElementById('scoringPlay')
            fieldGoal.innerHTML =  `Field Goal <br> <img src=${driveTeam} width="250" height="250">` 

         }
        }
        // slow fade/flash background behind touchdown message //
        var ofs2 = 0;
        var el2 = document.getElementById('touchdown');
    
        window.setInterval(function(){
        el2.style.background = `rgba(0,0,0,${Math.abs(Math.sin(ofs2))})`;
        ofs2 += 0.01;
        }, 10);

        // missed field goal //
        if (data.header.competitions[0].status.type.completed === false && data.header.competitions[0].status.type.description !== "Scheduled") {
            if (data.drives.current.result === "Missed FG") {
                venuePhoto.style.display = 'none'
                missedFieldGoalEvent = data.drives.current.team.displayName
                fieldGoal = document.getElementById('touchdown')
                fieldGoal.innerHTML =  `NO GOOD <br> <img src=${driveTeam} width="250" height="250">` 
            }
        }  
        
        var ofs2 = 0;
        var el2 = document.getElementById('touchdown');
    
        window.setInterval(function(){
        el2.style.background = `rgba(0,0,0,${Math.abs(Math.sin(ofs2))})`;
        ofs2 += 0.01;
        }, 10);


    // if data.header.competitions[0].competitors[0].winner === true, do something
    // function then render it and stuff logo.innerHTML = 
    
    // if (logo.header.competitions[0].competitors[0].possession === true) {      
     
    
 
// scoring plays //
if (data.header.competitions[0].status.type.completed === false && data.header.competitions[0].status.type.description !== "Scheduled" && data.scoringPlays !== undefined) {
const thePlays = data.scoringPlays.map((play) => {
    
    return `
    <div id="scoringPlays"><img src="${play.team.logo}" width="40" height="40" align="center"> ${play.text} | QTR${play.period.number} | ${play.clock.displayValue} | <img src="${awayDarkLogo}"width="30" height="30" align="center">  ${play.awayScore} - ${play.homeScore}  <img src="${homeDarkLogo}"width="30" height="30" align="center"></div>
    `
})



const scoringPlays = document.getElementById('scoringPlaysContainer')
    scoringPlays.innerHTML = thePlays.join('')
}   

if (data.leaders !== [] || data.leaders !== undefined || data.leaders[0] !== []) {
    let homePassingLeader = data.leaders[0].leaders[0].leaders[0].athlete.displayName
    let homePassingLeaderStats = data.leaders[0].leaders[0].leaders[0].displayValue
    let homePassingLeaderJersey = data.leaders[0].leaders[0].leaders[0].athlete.jersey
    let homePassingLeaderPosition = data.leaders[0].leaders[0].leaders[0].athlete.position.abbreviation
    
    let awayPassingLeader = data.leaders[1].leaders[1].leaders[0].athlete.displayName
    let awayPassingLeaderStats = data.leaders[1].leaders[1].leaders[0].displayValue
    let awayPassingLeaderJersey = data.leaders[1].leaders[1].leaders[0].athlete.jersey
    let awayPassingLeaderPosition = data.leaders[1].leaders[1].leaders[0].athlete.position.abbreviation
    
    if (data.leaders[0].leaders[0].leaders[0].athlete.headshot === undefined) {   
        const homePassingLeaders = document.getElementById('homePassingLeader')
        homePassingLeaders.style.color = `#${homeTeamColor}`
        homePassingLeaders.style.height = '107px'

        } else {
            let homePassingLeaderHeadshot = data.leaders[0].leaders[0].leaders[0].athlete.headshot.href
            const homePassingLeaders = document.getElementById('homePassingLeader')
            homePassingLeaders.innerHTML = `<img src="${homePassingLeaderHeadshot}" width="100" height="100"> ${homePassingLeaderPosition}${homePassingLeaderJersey}`
            homePassingLeaders.style.color = `#${homeTeamColor}`

        }
    
        
        const homePassingStats = document.getElementById('homePassingStats')
        homePassingStats.innerHTML = `${homePassingLeader} <br> ${homePassingLeaderStats}`
        homePassingStats.style.backgroundColor = `#${homeTeamColor}`
        
        if (data.leaders[1].leaders[1].leaders[0].athlete.headshot === undefined) {
            const awayPassingLeaders = document.getElementById('awayPassingLeader')
            awayPassingLeaders.style.color = `#${awayTeamColor}`
            awayPassingLeaders.style.marginTop = "76px"
            awayPassingLeaders.style.height = '107px'


        
        } else {
        
        const awayPassingLeaders = document.getElementById('awayPassingLeader')
        let awayPassingLeaderHeadshot = data.leaders[1].leaders[0].leaders[0].athlete.headshot.href
        awayPassingLeaders.innerHTML = `<img src="${awayPassingLeaderHeadshot}" width="100" height="100"> ${awayPassingLeaderPosition}${awayPassingLeaderJersey}`
        awayPassingLeaders.style.color = `#${awayTeamColor}`
        }
        
        const awayPassingStats = document.getElementById('awayPassingStats')
        awayPassingStats.innerHTML = `${awayPassingLeader} <br> ${awayPassingLeaderStats}`
        awayPassingStats.style.backgroundColor = `#${awayTeamColor}`
        }
    
        // Rushing stats container //
        if (data.leaders !== [] || data.leaders !== undefined || data.leaders[0] !== []) {
        let homeRushingLeader = data.leaders[0].leaders[1].leaders[0].athlete.displayName
        let homeRushingLeaderStats = data.leaders[0].leaders[1].leaders[0].displayValue
        let homeRushingLeaderJersey = data.leaders[0].leaders[1].leaders[0].athlete.jersey
        let homeRushingLeaderPosition = data.leaders[0].leaders[1].leaders[0].athlete.position.abbreviation
        
        let awayRushingLeader = data.leaders[1].leaders[1].leaders[0].athlete.displayName
        let awayRushingLeaderStats = data.leaders[1].leaders[1].leaders[0].displayValue
        let awayRushingLeaderJersey = data.leaders[1].leaders[1].leaders[0].athlete.jersey
        let awayRushingLeaderPosition = data.leaders[1].leaders[1].leaders[0].athlete.position.abbreviation
        
        if (data.leaders[0].leaders[1].leaders[0].athlete.headshot === undefined) {   
            const homeRushingLeaders = document.getElementById('homeRushingLeader')
            homeRushingLeaders.style.color = `#${homeTeamColor}`
            homeRushingLeaders.style.height = '107px'
    
            } else {
                let homeRushingLeaderHeadshot = data.leaders[0].leaders[1].leaders[0].athlete.headshot.href
                const homeRushingLeaders = document.getElementById('homeRushingLeader')
                homeRushingLeaders.innerHTML = `<img src="${homeRushingLeaderHeadshot}" width="100" height="100"> ${homeRushingLeaderPosition}${homeRushingLeaderJersey}`
                homeRushingLeaders.style.color = `#${homeTeamColor}`
    
            }
        
            
            const homeRushingStats = document.getElementById('homeRushingStats')
            homeRushingStats.innerHTML = `${homeRushingLeader} <br> ${homeRushingLeaderStats}`
            homeRushingStats.style.backgroundColor = `#${homeTeamColor}`
            
            if (data.leaders[1].leaders[1].leaders[0].athlete.headshot === undefined) {
                const awayRushingLeaders = document.getElementById('awayRushingLeader')
                awayRushingLeaders.style.color = `#${awayTeamColor}`
                awayRushingLeaders.style.marginTop = "76px"
                awayRushingLeaders.style.height = '107px'
    
    
            
            } else {
            
            const awayRushingLeaders = document.getElementById('awayRushingLeader')
            let awayRushingLeaderHeadshot = data.leaders[1].leaders[1].leaders[0].athlete.headshot.href
            awayRushingLeaders.innerHTML = `<img src="${awayRushingLeaderHeadshot}" width="100" height="100"> ${awayRushingLeaderPosition}${awayRushingLeaderJersey}`
            awayRushingLeaders.style.color = `#${awayTeamColor}`
            }
            
            const awayRushingStats = document.getElementById('awayRushingStats')
            awayRushingStats.innerHTML = `${awayRushingLeader} <br> ${awayRushingLeaderStats}`
            awayRushingStats.style.backgroundColor = `#${awayTeamColor}`
            }

        // Receiving stats container //
        if (data.leaders !== [] || data.leaders !== undefined || data.leaders[0] !== []) {
        let homeReceivingLeader = data.leaders[0].leaders[2].leaders[0].athlete.displayName
        let homeReceivingLeaderStats = data.leaders[0].leaders[2].leaders[0].displayValue
        let homeReceivingLeaderJersey = data.leaders[0].leaders[2].leaders[0].athlete.jersey
        let homeReceivingLeaderPosition = data.leaders[0].leaders[2].leaders[0].athlete.position.abbreviation
        
        let awayReceivingLeader = data.leaders[1].leaders[2].leaders[0].athlete.displayName
        let awayReceivingLeaderStats = data.leaders[1].leaders[2].leaders[0].displayValue
        let awayReceivingLeaderJersey = data.leaders[1].leaders[2].leaders[0].athlete.jersey
        let awayReceivingLeaderPosition = data.leaders[1].leaders[2].leaders[0].athlete.position.abbreviation  
        
        
        if (data.leaders[0].leaders[2].leaders[0].athlete.headshot === undefined) {   
        const homeReceivingLeaders = document.getElementById('homeReceivingLeader')
        homeReceivingLeaders.style.color = `#${homeTeamColor}`
        homeReceivingLeaders.style.height = '107px'

        } else {
            let homeReceivingLeaderHeadshot = data.leaders[0].leaders[2].leaders[0].athlete.headshot.href
            const homeReceivingLeaders = document.getElementById('homeReceivingLeader')
            homeReceivingLeaders.innerHTML = `<img src="${homeReceivingLeaderHeadshot}" width="100" height="100"> ${homeReceivingLeaderPosition}${homeReceivingLeaderJersey}`
            homeReceivingLeaders.style.color = `#${homeTeamColor}`
            homeReceivingLeaders.style.marginTop = "3px"

        }
    
        
        const homeReceivingStats = document.getElementById('homeReceivingStats')
        homeReceivingStats.innerHTML = `${homeReceivingLeader} <br> ${homeReceivingLeaderStats}`
        homeReceivingStats.style.backgroundColor = `#${homeTeamColor}`
        
        if (data.leaders[1].leaders[2].leaders[0].athlete.headshot === undefined) {
            const awayReceivingLeaders = document.getElementById('awayReceivingLeader')
            awayReceivingLeaders.style.color = `#${awayTeamColor}`
            awayReceivingLeaders.style.marginTop = "76px"
            awayReceivingLeaders.style.height = '107px'


        
        } else {
        
        const awayReceivingLeaders = document.getElementById('awayReceivingLeader')
        let awayReceivingLeaderHeadshot = data.leaders[1].leaders[2].leaders[0].athlete.headshot.href
        awayReceivingLeaders.innerHTML = `<img src="${awayReceivingLeaderHeadshot}" width="100" height="100"> ${awayReceivingLeaderPosition}${awayReceivingLeaderJersey}`
        awayReceivingLeaders.style.color = `#${awayTeamColor}`
        awayReceivingLeaders.style.marginTop = "3px"

        }
        
        const awayReceivingStats = document.getElementById('awayReceivingStats')
        awayReceivingStats.innerHTML = `${awayReceivingLeader} <br> ${awayReceivingLeaderStats}`
        awayReceivingStats.style.backgroundColor = `#${awayTeamColor}`
        }
    
    // end of game //
   //***********************//
   
   if (data.header.competitions[0].status.type.description === "Final") {  
    
    if (awayRank === undefined && homeRank === undefined){
        awayRank = ''
        homeRank = ''
    }

    if (awayRank === undefined) {
        awayRank = 26
    } 
        if (homeRank === undefined) {
            homeRank = 26
        
    }

           // scoring plays END OF GAME//
if (data.header.competitions[0].status.type.completed === true && data.header.competitions[0].status.type.description !== "Scheduled") {
    const thePlays = data.scoringPlays.map((play) => {
        
        return `
        <div id="scoringPlays"><img src="${play.team.logo}" width="40" height="40" align="center"> ${play.text} | QTR${play.period.number} | ${play.clock.displayValue} | <img src="${awayDarkLogo}"width="30" height="30" align="center">  ${play.awayScore} - ${play.homeScore}  <img src="${homeDarkLogo}"width="30" height="30" align="center"></div>
        `
    })
    
    
    
    const scoringPlays = document.getElementById('scoringPlaysContainer')
        scoringPlays.innerHTML = thePlays.join('')
    }   
    
    
    

    /*if (awayScore > homeScore && awayRank > homeRank) {
        awayWinner = document.getElementById('winner') 
        awayWinner.innerHTML =`UPSET!!! <br> <img src="${awayDarkLogo}" width="250 height="250"><br>${awayScore} - ${homeScore}`
        venuePhoto.style.display = 'none'
        var ofs2 = 0;
        var el2 = document.getElementById('winner');
        window.setInterval(function(){
            el2.style.background = `rgba(0,0,0,${Math.abs(Math.sin(ofs2))})`;
            ofs2 += 0.01;
        }, 10);
          
    } else {
    if (awayScore > homeScore) {
        awayWinner = document.getElementById('winner') 
        awayWinner.innerHTML =`WINNER <br> <img src="${awayDarkLogo}" width="250 height="250"><br>${awayScore} - ${homeScore}`
        venuePhoto.style.display = 'none'
        awayWinner.style.fontStretch
        var ofs2 = 0;
        var el2 = document.getElementById('winner');
        window.setInterval(function(){
            el2.style.background = `rgba(0,0,0,${Math.abs(Math.sin(ofs2))})`;
            ofs2 += 0.01;
        }, 10);
    }   
    }
    console.log(awayScore > homeScore)
    */
    
    switch (true) {
        case(!data.header.competitions[0].status.type.completed):
        document.getElementById('winner').style.display = 'none'

        case(awayScoreInt > homeScoreInt && awayRank > homeRank):
         awayWinner = document.getElementById('winner') 
         awayWinner.innerHTML =`UPSET!!! <br> <img src="${awayDarkLogo}" width="250 height="250"><br>${awayScoreInt} - ${homeScoreInt}`
         venuePhoto.style.display = 'none'
         venue.innerHTML =  `FINAL <hr><img src="${awayDarkLogo}" width='40' height='40'>${awayScoreInt} - ${homeScoreInt}<img src='${homeDarkLogo}' width='40' height='40'>`
         venue.style.background = `#${awayTeamColor}`
 
        var ofs2 = 0;
        var el2 = document.getElementById('winner');
        window.setInterval(function(){
            el2.style.background = `rgba(0,0,0,${Math.abs(Math.sin(ofs2))})`;
            ofs2 += 0.01;
        }, 10);
            break; 

        case(awayScoreInt > homeScoreInt && awayRank <= homeRank):
         awayWinner = document.getElementById('winner') 
         awayWinner.innerHTML =`WINNER <br> <img src="${awayDarkLogo}" width="250 height="250"><br>${awayScoreInt} - ${homeScoreInt}`
         venuePhoto.style.display = 'none'
         venue.innerHTML =  `FINAL <hr><img src="${awayDarkLogo}" width='40' height='40'>${awayScoreInt} - ${homeScoreInt}<img src='${homeDarkLogo}' width='40' height='40'>`
         venue.style.background = `#${awayTeamColor}`

        var ofs2 = 0;
        var el2 = document.getElementById('winner');
        window.setInterval(function(){
            el2.style.background = `rgba(0,0,0,${Math.abs(Math.sin(ofs2))})`;
            ofs2 += 0.01;
        }, 10);
            break; 

         
        case(homeScoreInt > awayScoreInt && homeRank > awayRank):
        homeWinner = document.getElementById('winner') 
        homeWinner.innerHTML =`UPSET!!! <br> <img src="${homeDarkLogo}" width="250 height="250"><br>${homeScoreInt} - ${awayScoreInt}`
        venuePhoto.style.display = 'none'
        venue.innerHTML =  `FINAL <hr><img src="${awayDarkLogo}" width='40' height='40'>${awayScoreInt} - ${homeScoreInt}<img src='${homeDarkLogo}' width='40' height='40'>`

        var ofs2 = 0;
        var el2 = document.getElementById('winner');
     
         window.setInterval(function(){
         el2.style.background = `rgba(0,0,0,${Math.abs(Math.sin(ofs2))})`;
         ofs2 += 0.01;
         }, 10);
         break;

         case(homeScoreInt > awayScoreInt && homeRank <= awayRank):
        homeWinner = document.getElementById('winner') 
        homeWinner.innerHTML =`WINNER <br> <img src="${homeDarkLogo}" width="250 height="250"><br>${homeScoreInt} - ${awayScoreInt}`
        venuePhoto.style.display = 'none'
        var ofs2 = 0;
        var el2 = document.getElementById('winner');
        venue.innerHTML =  `FINAL <hr><img src="${awayDarkLogo}" width='40' height='40'>${awayScoreInt} - ${homeScoreInt} <img src='${homeDarkLogo}' width='40' height='40'>`

     
         window.setInterval(function(){
         el2.style.background = `rgba(0,0,0,${Math.abs(Math.sin(ofs2))})`;
         ofs2 += 0.01;
         }, 10);
         break;
            
            default:
                break     

}
   
console.log(`${awayScore}-${homeScore}`)
console.log(`${homeRank} ${awayRank}`)
 
}

//post-game stats 
// passing stats container //
if (data.leaders !== []) {
    let homePassingLeader = data.leaders[0].leaders[0].leaders[0].athlete.displayName
    let homePassingLeaderHeadshot = data.leaders[0].leaders[0].leaders[0].athlete.headshot.href
    let homePassingLeaderStats = data.leaders[0].leaders[0].leaders[0].displayValue
    let homePassingLeaderJersey = data.leaders[0].leaders[0].leaders[0].athlete.jersey
    let homePassingLeaderPosition = data.leaders[0].leaders[0].leaders[0].athlete.position.abbreviation
    
    let awayPassingLeader = data.leaders[1].leaders[0].leaders[0].athlete.displayName
    let awayPassingLeaderHeadshot = data.leaders[1].leaders[0].leaders[0].athlete.headshot.href
    let awayPassingLeaderStats = data.leaders[1].leaders[0].leaders[0].displayValue
    let awayPassingLeaderJersey = data.leaders[1].leaders[0].leaders[0].athlete.jersey
    let awayPassingLeaderPosition = data.leaders[1].leaders[0].leaders[0].athlete.position.abbreviation
    
    const homeStatsContainer = document.getElementById('homeStatsContainer')
    homeStatsContainer.style.border = `5pt solid #${homeTeamColor}`
    
    const awayStatsContainer = document.getElementById('awayStatsContainer')
    awayStatsContainer.style.border = `5pt solid #${awayTeamColor}`
    
    const homePassingLeaders = document.getElementById('homePassingLeader')
    homePassingLeaders.innerHTML = `${homeTeamName} Stats <br><img src="${homePassingLeaderHeadshot}" width="100" height="100"> ${homePassingLeaderPosition}${homePassingLeaderJersey}`
    homePassingLeaders.style.color = `#${homeTeamColor}`
    
    const homePassingStats = document.getElementById('homePassingStats')
    homePassingStats.innerHTML = `${homePassingLeader} <br> ${homePassingLeaderStats}`
    homePassingStats.style.backgroundColor = `#${homeTeamColor}`
    
    const awayPassingLeaders = document.getElementById('awayPassingLeader')
    awayPassingLeaders.innerHTML = `${awayTeamName} Stats <br><img src="${awayPassingLeaderHeadshot}" width="100" height="100"> ${awayPassingLeaderPosition}${awayPassingLeaderJersey}`
    awayPassingLeaders.style.color = `#${awayTeamColor}`
    
    const awayPassingStats = document.getElementById('awayPassingStats')
    awayPassingStats.innerHTML = `${awayPassingLeader} <br> ${awayPassingLeaderStats}`
    awayPassingStats.style.backgroundColor = `#${awayTeamColor}`
    }
    
    // Rushing stats container //
    if (data.leaders !== []) {
    let homeRushingLeader = data.leaders[0].leaders[1].leaders[0].athlete.displayName
    let homeRushingLeaderStats = data.leaders[0].leaders[1].leaders[0].displayValue
    let homeRushingLeaderJersey = data.leaders[0].leaders[1].leaders[0].athlete.jersey
    let homeRushingLeaderPosition = data.leaders[0].leaders[1].leaders[0].athlete.position.abbreviation
    
    let awayRushingLeader = data.leaders[1].leaders[1].leaders[0].athlete.displayName
    let awayRushingLeaderStats = data.leaders[1].leaders[1].leaders[0].displayValue
    let awayRushingLeaderJersey = data.leaders[1].leaders[1].leaders[0].athlete.jersey
    let awayRushingLeaderPosition = data.leaders[1].leaders[1].leaders[0].athlete.position.abbreviation
    
    if (data.leaders[0].leaders[1].leaders[0].athlete.headshot === undefined) {   
        const homeRushingLeaders = document.getElementById('homeRushingLeader')
        homeRushingLeaders.style.color = `#${homeTeamColor}`
        homeRushingLeaders.style.height = '107px'
        
        
        } else {
            let homeRushingLeaderHeadshot = data.leaders[0].leaders[1].leaders[0].athlete.headshot.href
            const homeRushingLeaders = document.getElementById('homeRushingLeader')
            homeRushingLeaders.innerHTML = `<img src="${homeRushingLeaderHeadshot}" width="100" height="100"> ${homeRushingLeaderPosition}${homeRushingLeaderJersey}`
            homeRushingLeaders.style.color = `#${homeTeamColor}`
        }
        
        const homeRushingStats = document.getElementById('homeRushingStats')
        homeRushingStats.innerHTML = `${homeRushingLeader} <br> ${homeRushingLeaderStats}`
        homeRushingStats.style.backgroundColor = `#${homeTeamColor}`
        
        if (data.leaders[1].leaders[1].leaders[0].athlete.headshot === undefined) {
            const awayRushingLeaders = document.getElementById('awayRushingLeader')
            awayRushingLeaders.innerHTML = `${awayRushingLeaderPosition}${awayRushingLeaderJersey}`
        awayRushingLeaders.style.color = `#${awayTeamColor}`
        awayRushingLeaders.style.marginTop = "76px"
        awayRushingLeaders.style.height = '107px'

        
        } else {
        
        const awayRushingLeaders = document.getElementById('awayRushingLeader')
        let awayRushingLeaderHeadshot = data.leaders[1].leaders[1].leaders[0].athlete.headshot.href
        awayRushingLeaders.innerHTML = `<img src="${awayRushingLeaderHeadshot}" width="100" height="100"> ${awayRushingLeaderPosition}${awayRushingLeaderJersey}`
        awayRushingLeaders.style.color = `#${awayTeamColor}`
        }
        
        const awayRushingStats = document.getElementById('awayRushingStats')
        awayRushingStats.innerHTML = `${awayRushingLeader} <br> ${awayRushingLeaderStats}`
        awayRushingStats.style.backgroundColor = `#${awayTeamColor}`
        }
    // Receiving stats container //
    if (data.leaders !== []) {
    let homeReceivingLeader = data.leaders[0].leaders[2].leaders[0].athlete.displayName
    let homeReceivingLeaderStats = data.leaders[0].leaders[2].leaders[0].displayValue
    let homeReceivingLeaderJersey = data.leaders[0].leaders[2].leaders[0].athlete.jersey
    let homeReceivingLeaderPosition = data.leaders[0].leaders[2].leaders[0].athlete.position.abbreviation
    
    let awayReceivingLeader = data.leaders[1].leaders[2].leaders[0].athlete.displayName
    let awayReceivingLeaderStats = data.leaders[1].leaders[2].leaders[0].displayValue
    let awayReceivingLeaderJersey = data.leaders[1].leaders[2].leaders[0].athlete.jersey
    let awayReceivingLeaderPosition = data.leaders[1].leaders[2].leaders[0].athlete.position.abbreviation
    
    if (data.leaders[0].leaders[2].leaders[0].athlete.headshot === undefined) {   
        const homeReceivingLeaders = document.getElementById('homeReceivingLeader')
        homeReceivingLeaders.style.color = `#${homeTeamColor}`
        homeReceivingLeaders.style.height = '107px'
        
        
        } else {
            let homeReceivingLeaderHeadshot = data.leaders[0].leaders[2].leaders[0].athlete.headshot.href
            const homeReceivingLeaders = document.getElementById('homeReceivingLeader')
            homeReceivingLeaders.innerHTML = `<img src="${homeReceivingLeaderHeadshot}" width="100" height="100"> ${homeReceivingLeaderPosition}${homeReceivingLeaderJersey}`
            homeReceivingLeaders.style.color = `#${homeTeamColor}`
        }
        
        const homeReceivingStats = document.getElementById('homeReceivingStats')
        homeReceivingStats.innerHTML = `${homeReceivingLeader} <br> ${homeReceivingLeaderStats}`
        homeReceivingStats.style.backgroundColor = `#${homeTeamColor}`
        
        if (data.leaders[1].leaders[2].leaders[0].athlete.headshot === undefined) {
            const awayReceivingLeaders = document.getElementById('awayReceivingLeader')
            awayReceivingLeaders.innerHTML = `${awayReceivingLeaderPosition}${awayReceivingLeaderJersey}`
        awayReceivingLeaders.style.color = `#${awayTeamColor}`
        awayReceivingLeaders.style.marginTop = "76px"
        awayReceivingLeaders.style.height = '107px'

        
        } else {
        
        const awayReceivingLeaders = document.getElementById('awayReceivingLeader')
        let awayReceivingLeaderHeadshot = data.leaders[1].leaders[2].leaders[0].athlete.headshot.href
        awayReceivingLeaders.innerHTML = `<img src="${awayReceivingLeaderHeadshot}" width="100" height="100"> ${awayReceivingLeaderPosition}${awayReceivingLeaderJersey}`
        awayReceivingLeaders.style.color = `#${awayTeamColor}`
        }
        
        const awayReceivingStats = document.getElementById('awayReceivingStats')
        awayReceivingStats.innerHTML = `${awayReceivingLeader} <br> ${awayReceivingLeaderStats}`
        awayReceivingStats.style.backgroundColor = `#${awayTeamColor}`
        }

    }  
    displayData()