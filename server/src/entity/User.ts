import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { MinLength, IsEmail } from 'class-validator'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  username: string

  @Column('text')
  @IsEmail()
  email: string

  @Column({ default: 'user' })
  role: string

  @Column()
  @MinLength(6)
  password: string

  @Column('bool', { default: false })
  confirmed: boolean

  @Column('bool', { default: true })
  active: boolean
}
