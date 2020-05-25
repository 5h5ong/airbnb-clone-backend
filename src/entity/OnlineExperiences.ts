import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'OnlineExperiences' })
class OnlineExperiences {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  image!: string;

  @Column()
  country!: string;

  @Column()
  name!: string;

  @Column()
  price!: number;
}

export default OnlineExperiences;
