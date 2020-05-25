import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity({ name: 'Users' })
class Users {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  lastName!: string;

  @Column()
  firstName!: string;

  @Column()
  birthYear!: number;

  @Column()
  birthMonth!: number;

  @Column()
  birthDay!: number;
}

export default Users;
