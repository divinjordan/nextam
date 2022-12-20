import axios from "axios";
import env from "../.env.json";

const apiUrl = (url: string) => {
  return `${env.api_url}/${url}`;
};

const get = (url:string ) => {
  return axios.get(apiUrl(url), {});
};

const post = (url:string, data:any) => {
  return axios.post(apiUrl(url), data);
};

const destroy = (url:string) => {
  return axios.delete(apiUrl(url));
};

const put = (url:string, data:any) => {
  return axios.put(apiUrl(url), data);
};

export default {
  get,
  post,
  put,
  delete: destroy,
};
