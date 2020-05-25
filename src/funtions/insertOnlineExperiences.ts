import createRepository from './createRepository/createRepository';
import OnlineExperiences from '../entity/OnlineExperiences';

// id를 제외한 oe의 property들
type oeObjectType = Omit<OnlineExperiences, 'id'>;

/**
 * OnlineExperiences Collection에 새로운 Document를 생성
 */
export default async (payload: oeObjectType): Promise<void> => {
  const oeRepository = createRepository<OnlineExperiences>(OnlineExperiences);

  try {
    oeRepository.save(payload);
  } catch (error) {
    console.log('저장 과정에서 문제가 생겼습니다.', error);
  }
};
