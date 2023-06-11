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
}
