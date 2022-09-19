const axios = require('axios')

const getRawTransfersList = async (competition) => {
  const options = {
    method: 'GET',
    url: 'https://transfermarket.p.rapidapi.com/transfers/list',
    params: {competitionID: competition, limit: '10', offset: '0'},
    headers: {
      'X-RapidAPI-Key': '9c42f8f996mshba4a73f6f9e5356p10c804jsn127318f1d51a',
      'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
    },
  }

  return await axios.request(options)
}

const getTransfersList = async (competition) => {
  const raw_list = await getRawTransfersList(competition)
  const result_list = []
  for (let i = 0; i < raw_list.data.player.length; i++) {
    const player = raw_list.data.player[i]
    const playerProfile = await getPlayerProfile(player['playerID'])
    const from_team_profile = await getTeamProfile(player['fromClubID'])
    const to_team_profile = await getTeamProfile(player['toClubID'])
    const transfer = {
      player: playerProfile['data']['playerProfile']['playerFullName'],
      image: playerProfile['data']['playerProfile']['playerImage'],
      from_team: from_team_profile['data']['mainFacts']['fullName'],
      to_team: to_team_profile['data']['mainFacts']['fullName'],
    }
    result_list.push(transfer)
  }
  return result_list
}

const getPlayerProfile = async (playerID) => {
  const options = {
    method: 'GET',
    url: 'https://transfermarket.p.rapidapi.com/players/get-profile',
    params: {id: playerID},
    headers: {
      'X-RapidAPI-Key': '9c42f8f996mshba4a73f6f9e5356p10c804jsn127318f1d51a',
      'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
    },
  }

  return await axios.request(options)
}

const getTeamProfile = async (club_id) => {
  const options = {
    method: 'GET',
    url: 'https://transfermarket.p.rapidapi.com/clubs/get-profile',
    params: {id: club_id},
    headers: {
      'X-RapidAPI-Key': '9c42f8f996mshba4a73f6f9e5356p10c804jsn127318f1d51a',
      'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
    },
  }

  return await axios.request(options)
}

module.exports = {getTransfersList}
