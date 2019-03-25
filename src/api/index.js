import axios from 'axios';

// 对api的整体封装
export function groundStore() {
    return axios({
      url: `http://jsonplaceholder.typicode.com/posts`,
      method: 'get',
      headers: {
        loadingTag: 'activity:delete'
      }
    });
  }