import { Post } from '@/types/ResponseType';
import ApiClient from './api.ts';

export interface ResponseType {
  status: number;
  data: Post[];
}

interface Url {
  [key: string]: string;
}

interface UrlsType {
  get: Url;
  post: Url;
  put: Url;
  delete: Url;
}

const urls: UrlsType = {
  get: {
    channel: 'posts/channel',
    author: 'posts/author'
  },
  post: {
    create: 'posts/create'
  },
  put: {
    update: 'posts/update'
  },
  delete: {
    delete: 'posts/delete'
  }
};

export class PostApi extends ApiClient {
  constructor(baseURL: string) {
    super(baseURL);
  }

  public async getPosts(
    id: string,
    path: string,
    offset?: number,
    limit?: number
  ): Promise<ResponseType> {
    return this.get({
      url: `/${urls.get[path]}/${id}`,
      data: {
        offset,
        limit
      }
    });
  }

  public async createPosts(
    path: string,
    channelId: number,
    title: string,
    image?: string
  ): Promise<ResponseType> {
    return this.post({
      url: `/${urls.post[path]}`,
      data: {
        title,
        channelId,
        image
      },
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  }
}
