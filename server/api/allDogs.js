const router = require('express').Router()
const axios = require('axios')
const {getToken} = require('../../utils')
module.exports = router

// ALL DOGS ROUTE: '/api/dogs
// TODO: ask sarah about loading more dogs when making the request. Ask about SDK.
router.get('/', getToken, async (req, res, next) => {
  try {
    const {data} = await axios.get(
      'https://api.petfinder.com/v2/animals?type=dog&limit=100&status=adoptable',
      {headers: {Authorization: process.env.BEARER_TOKEN}}
    )
    console.log('get Data:', data)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

// SINGLE DOGS ROUTE: '/api/dogs/:dogId
router.get('/:dogId', getToken, async (req, res, next) => {
  try {
    const {data} = await axios.get(
      `https://api.petfinder.com/v2/animals/${req.params.dogId}`,
      {headers: {Authorization: process.env.BEARER_TOKEN}}
    )
    console.log('get single dog data:', data)
    res.json(data).status(200)
  } catch (error) {
    next(error)
  }
})