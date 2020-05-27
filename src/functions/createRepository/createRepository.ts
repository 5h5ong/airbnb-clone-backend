import { getRepository, Repository, ObjectType } from 'typeorm';

export default <T>(entity: ObjectType<T>): Repository<T> => {
  const repository = getRepository(entity);

  return repository;
};
