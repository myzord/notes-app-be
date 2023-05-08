const InvariantError = require('../../exceptions/InvariantError')
const { PostAuthenticationPayloadSchema, PutAuthenticationPayloadSchema, DeleteAuthenticationPayloadSchema } = require('./schema')

const AuthsValidator = {
  validatePostAuthPayload: (payload) => {
    const validationResult = PostAuthenticationPayloadSchema.validate(payload)
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },

  validatePutAuthPayload: (payload) => {
    const validationResult = PutAuthenticationPayloadSchema.validate(payload)
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },

  validateDeleteAuthPayload: (payload) => {
    const validationResult = DeleteAuthenticationPayloadSchema.validate(payload)
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
}

module.exports = AuthsValidator
