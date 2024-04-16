import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import jwt from 'jsonwebtoken'
import { compose, Secret } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare full_name: string

  @column()
  declare magic_link_token: string | null

  @column()
  declare last_reset_date: string | null

  @column()
  declare magic_link_token_expires_at: string | null

  @column()
  declare subscription_active: string | null

  @column({
    prepare: (access_token: Secret<any>) => access_token.release(),
    consume: (access_token) => new Secret(access_token),
  })
  declare access_token: Secret<any>

  @column({
    prepare: (refresh_token: Secret<any>) => refresh_token.release(),
    consume: (refresh_token) => new Secret(refresh_token),
  })
  declare refresh_token: Secret<any>

  @column()
  declare google_id: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  async generateToken() {
    const token: string = jwt.sign({ id: this.id }, 'access_token', { expiresIn: '1h' })
    return token
  }
}
