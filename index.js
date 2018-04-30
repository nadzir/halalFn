const vandium = require('vandium')
const querystring = require('querystring')
const {isHalal} = require('./src/main')

exports.handler = vandium.generic()
    .handler(async (event, context, cb) => {
      context.callbackWaitsForEmptyEventLoop = false
      const query = querystring.unescape(event['pathParameters']['query'])
      const result = await isHalal(query.toLowerCase())
      const res = {'statusCode': 200, 'body': JSON.stringify(result)}
      cb(null, res)
    })
