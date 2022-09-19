const {getMatchesList} = require('../services/matches')

const getMatches = async (req, res, next) => {
  try {
    const result = await getMatchesList()
    if (!result) {
      return res.status(404).send('This matches does not exist')
    } else {
      return res.status(200).send(result)
    }
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  getMatches,
}
