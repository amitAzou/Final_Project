const {getTransfersList} = require('../services/transfers')

const getTransfers = async (req, res, next) => {
  try {
    const result = await getTransfersList(req.params.countryId)
    console.log(result)
    if (!result) {
      return res.status(404).send('No Transfers')
    } else {
      return res.status(200).send(result)
    }
  } catch (err) {
    return next(err)
  }
}

module.exports = {getTransfers}
