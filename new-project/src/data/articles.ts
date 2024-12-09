import { NewsProps } from '../types/News/newstype';

const dummyArticles: NewsProps['articles'] = [
  {
    title: 'Breaking: New Feature Launched!',
    description: 'Discover the latest updates on our platform.',
    url: '/news/list',
  },
  {
    title: 'Community Event Coming Soon!',
    description: 'Join us for an exciting event this weekend.',
    url: '/news/list',
  },
];

export default dummyArticles;
