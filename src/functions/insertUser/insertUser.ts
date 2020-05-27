import Users from '../../entity/Users';
import createRepository from '../createRepository/createRepository';

// id를 제외한 insertUser의 property들
export type userObjectType = Omit<Users, 'id'>;

/**
 * 새로운 User Document를 생성
 */
export default async (payload: userObjectType): Promise<void> => {
  const userRepository = createRepository<Users>(Users);

  try {
    await userRepository.save(payload);
    /* eslint-disable */
    console.log('[유저 생성]', payload);
    /* eslint-enable */
  } catch (error) {
    throw new Error('저장 과정에서 문제가 생겼습니다.');
  }
};
