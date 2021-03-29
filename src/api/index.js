import PostsRepo from './PostsRepo';
import PostsViewsRepo from './PostsViewsRepo';

const repositories = {
  'posts': PostsRepo,
  'postsviews': PostsViewsRepo,
};

export default {
  get(name) {
    return repositories[name];
  },
};
