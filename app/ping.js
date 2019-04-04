'use strict'

const getSuccessMessage = () => {
  const date = new Date()

  return JSON.stringify({
    message: `Ping successfuly executed, process-time: ${date.toTimeString()}.`
  })
}

const ping = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: getSuccessMessage(),
  }

  callback(null, response);
}

module.exports = ping
