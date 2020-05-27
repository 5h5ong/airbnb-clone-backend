import OnlineExperiences from '../../entity/OnlineExperiences';
import createRepository from '../createRepository/createRepository';

export default async (): Promise<OnlineExperiences[]> => {
  const oeRepository = createRepository<OnlineExperiences>(OnlineExperiences);

  const oe = await oeRepository.find();
  return oe;
};
