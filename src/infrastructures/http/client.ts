interface RequestConfig {
  params?: any;
  headers?: HeadersInit;
  signal?: AbortSignal;
}

export interface IHttp {
  get<T>(
    url: string,
    config?: RequestConfig
  ): Promise<{ data: T; headers: Headers }>;
  post<T>(
    url: string,
    body?: any,
    config?: RequestConfig
  ): Promise<{ data: T; headers: Headers }>;
}

export class Http implements IHttp {
  private readonly baseUrl: string;
  constructor() {
    this.baseUrl = "http://localhost:5173";
  }
  async get<T>(url: string, config: RequestConfig = {}) {
    const res = await fetch(this.baseUrl.concat(url), {
      method: "GET",
      headers: {
        ...(config?.headers ?? {}),
      },
    });
    const data: T = await res.json();
    const { headers } = res;
    return {
      data,
      headers,
    };
  }
  async post<T>(url: string, body?: any, config: RequestConfig = {}) {
    const res = await fetch(this.baseUrl.concat(url), {
      method: "POST",
      headers: {
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...(config.headers ?? {}),
      },
      signal: config.signal,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data: T = await res.json();
    if (res.ok) {
      const { headers } = res;
      return {
        data,
        headers,
      };
    } else {
      return Promise.reject(data);
    }
  }
}
