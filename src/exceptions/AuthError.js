const ClientError = require('./ClientError')

class AuthError extends ClientError {
  constructor(message) {
    super(message, 401)
    this.name = 'Authentication Error'
  }
}

module.exports = AuthError
