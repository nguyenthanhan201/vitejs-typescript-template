import { CRUDAxios } from "./crud.axios";

class BaseAxios extends CRUDAxios {
  baseURL = "https://jsonplaceholder.typicode.com/todos";
}

export const Axios = new BaseAxios();
