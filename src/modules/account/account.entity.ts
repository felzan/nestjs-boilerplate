import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'accounts',
})

/** payload
{
    "name": "felzan",
    "password": "123456",
    "secret": "easy",
    "type": 2,
    "premdays": 90,
    "mail": "luisfelipe.zanatto@gmail.com"
}
 */

export class Account {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32 })
  name: string

  @Column({ length: 40 })
  password: string

  @Column({ length: 16 })
  secret: string

  @Column()
  type: number

  @Column()
  premdays: number

  @Column({ nullable: true })
  lastday: number

  @Column({ nullable: true, length: 355 })
  email: string

  @Column({ nullable: true })
  creation: number
}
