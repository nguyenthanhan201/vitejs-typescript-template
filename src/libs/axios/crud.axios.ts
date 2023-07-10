import { CookiesKeys, getCookie } from "@/shared/hooks/useCookie";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponseHeaders } from "axios";

export const titleErrorRefreshTokenExpired = `error parsing token: token has invalid claims: token is expired`;

export interface AxiosResponse<T = never> {
  data: T;
  // status: number;
  // statusText: string;
  // headers: Record<string, string>;
  // config: AxiosRequestConfig<T>;
  // request?: any;
  code: number;
  message: string;
  meta?: {
    total: number;
    page: number;
    page_size: number;
    total_pages: number;
  };
  error?: string;
}

export abstract class CRUDAxios {
  abstract baseURL: string;

  request() {
    const cookie = getCookie(CookiesKeys.eLynet_seller_info);

    // config axios
    const instance = axios.create({
      baseURL: this.baseURL,
      headers: {
        "x-access-token": "",
        ...(cookie?.token
          ? {
              Authorization: `Bearer ${cookie.token}`,
              // Authorization: expiredToken,
            }
          : {}),
      },
      timeout: 10000, // 10s
    });

    instance.interceptors.response.use(undefined, async (errorResponse: AxiosError) => {
      if (errorResponse?.response?.status !== 401) return Promise.reject(errorResponse);
      // const originalRequest = errorResponse.config;

      // handle access token expired
      // return await UserService.getToken().then(async (rs) => {
      //   // handle refresh token expired
      //   if (rs.error) {
      //     removeCookie(CookiesKeys.eLynet_user_info);
      //     return Promise.reject(rs);
      //   }

      //   const { token: newToken } = await rs.data;
      //   const cookieUser = getCookie(CookiesKeys.eLynet_user_info);

      //   setCookie(CookiesKeys.eLynet_user_info, {
      //     ...cookieUser,
      //     token: newToken,
      //   });

      //   instance.defaults.headers["Authorization"] = `Bearer ${newToken}`;

      //   // Create a new instance with updated headers
      //   const newRequestInstance = axios.create({
      //     ...instance.defaults,
      //     headers: {
      //       ...instance.defaults.headers,
      //       Authorization: `Bearer ${newToken}`,
      //     },
      //   });

      //   // call expired api again
      //   return await newRequestInstance
      //     .request({
      //       ...originalRequest,
      //       headers: {
      //         ...originalRequest?.headers,
      //         Authorization: `Bearer ${newToken}`,
      //       },
      //     })
      //     .then(
      //       (res) => {
      //         return res;
      //       },
      //       (error) => {
      //         return Promise.reject(error);
      //       },
      //     );
      // });
    });

    return instance;
  }

  async getReq<T = never, R = AxiosResponse<T>>(
    path: string,
    option?: AxiosRequestConfig,
  ): Promise<R> {
    const response: AxiosResponse = await this.request().get(path, option);
    return response?.data;
  }
  async postReq<T = never, R = AxiosResponse<T>>(
    path: string,
    data: any,
    option?: AxiosRequestConfig,
  ): Promise<R> {
    const response: AxiosResponseHeaders = await this.request().post(path, data, option);
    return response.data;
  }
  async putReq<T = never, R = AxiosResponse<T>>(
    path: string,
    data?: any,
    option?: AxiosRequestConfig,
  ): Promise<R> {
    const response: AxiosResponse = await this.request().put(path, data, option);
    return response.data;
  }
  async deleteReq<T = never, R = AxiosResponse<T>>(
    path: string,
    option: AxiosRequestConfig,
  ): Promise<R> {
    const response: AxiosResponse = await this.request().delete(path, option);
    return response.data;
  }
}
