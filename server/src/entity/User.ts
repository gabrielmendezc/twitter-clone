import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { MinLength, IsEmail } from 'class-validator'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column({ unique: true })
  username: string

  @Field()
  @Column('text')
  @IsEmail()
  email: string

  @Field()
  @Column({ default: 'user' })
  role: string

  @Column()
  @MinLength(6)
  password: string

  @Field()
  @Column('bool', { default: false })
  confirmed: boolean

  @Field()
  @Column('bool', { default: true })
  active: boolean

  @Field()
  @Column('text', { default: new Date().toString() })
  joinedAt: string

  @Field()
  @Column('text', {
    default:
      'https://res.cloudinary.com/dkvjiivlg/image/upload/v1575887412/samples/user_qvsrsn.png'
  })
  profilePicture: string

  @Column('int', { default: 0 })
  tokenVersion: number
}
