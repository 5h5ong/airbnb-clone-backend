import express from 'express';
import getOnlineExperiences from '../../funtions/getOnlineExperiences/getOnlineExperiences';
import insertOnlineExperiences from '../../funtions/insertOnlineExperiences';

interface OnlineExperiencesType {
  image: string;
  country: string;
  name: string;
  price: number;
}

const onlineExperiencesArray: OnlineExperiencesType[] = [
  {
    image:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1693868-media_library/original/aee63310-9aa8-49d3-871a-3f496300468e.jpeg?aki_policy=poster',
    country: '미국',
    name: '음팜바 아펨베',
    price: 1000000,
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1693868-media_library/original/aee63310-9aa8-49d3-871a-3f496300468e.jpeg?aki_policy=poster',
    country: '미국',
    name: '음팜바 아펨베',
    price: 1000000,
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1693868-media_library/original/aee63310-9aa8-49d3-871a-3f496300468e.jpeg?aki_policy=poster',
    country: '한국',
    name: '송준엽',
    price: 1200,
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1693868-media_library/original/aee63310-9aa8-49d3-871a-3f496300468e.jpeg?aki_policy=poster',
    country: '영국',
    name: '존 도',
    price: 10000,
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1693868-media_library/original/aee63310-9aa8-49d3-871a-3f496300468e.jpeg?aki_policy=poster',
    country: '중국',
    name: '왕장오',
    price: 1000000,
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1693868-media_library/original/aee63310-9aa8-49d3-871a-3f496300468e.jpeg?aki_policy=poster',
    country: '아프리카',
    name: '알롤라 엘렐레',
    price: 510000,
  },
];

export default async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  // onlineExperiencesArray.forEach(async (e) => {
  //   await insertOnlineExperiences({
  //     country: e.country,
  //     image: e.image,
  //     name: e.name,
  //     price: e.price,
  //   });
  // });
  const returnOeObject = await getOnlineExperiences();

  res.json(returnOeObject);
};
