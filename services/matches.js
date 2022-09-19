const axios = require('axios')

const getRawMatchesList = async () => {
  const options = {
    method: 'GET',
    url: 'https://transfermarket.p.rapidapi.com/matches/list-by-date',
    headers: {
      'X-RapidAPI-Key': '9c42f8f996mshba4a73f6f9e5356p10c804jsn127318f1d51a',
      'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
    },
  }

  return await axios.request(options)
}

const getMatchesList = async () => {
  const raw_list = await getRawMatchesList()
  const liveMatchesList = raw_list.data.liveMatches
  const chosenLiveMatches = [
    liveMatchesList.L1,
    liveMatchesList.FR1,
    liveMatchesList.ES1,
    liveMatchesList.NL1,
    liveMatchesList.GB2,
    liveMatchesList.IT2,
  ]
  const updatedChosenLiveMatches = []
  for (let i = 0; i < chosenLiveMatches.length; i++) {
    if (chosenLiveMatches[i]) {
      updatedChosenLiveMatches.push(chosenLiveMatches[i])
    }
  }
  return updatedChosenLiveMatches.map((match) => {
    if (match) {
      return {
        competitionName: match[0].competitionName,
        competitionImage: match[0].competitionImage,
        fullMatchDate: match[0].fullMatchDate,
        matchTime: match[0].matchTime,
        homeClubName: match[0].homeClubName,
        homeClubImage: match[0].homeClubImage,
        awayClubName: match[0].awayClubName,
        awayClubImage: match[0].awayClubImage,
      }
    }
  })
}

module.exports = {getMatchesList}
