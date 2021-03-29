import { instance } from '../common/axios';
import factory from './factory';

export default {
  ...factory(instance, '/posts'),

  getLatest(max) {
    return instance.get(`/posts?_limit=${max}&_sort=id&_order=desc`);
  }
};
