import { instance } from '../common/axios';
import factory from './factory';

export default {
  ...factory(instance, '/postsviews'),

  getByDate(start, end, postId) {
    const wPostId = (postId) ? `&postId=${postId}` : '';
    return instance.get(`/postsviews?createdAt_gte=${start}&createdAt_lte=${end}${wPostId}`);
  },
};
