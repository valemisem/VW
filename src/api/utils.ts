export const VW_API_INIT_VALUES: {
  baseUrl: string;
} = {
  baseUrl: "",
};

export type VWAPIInitOptions = {
  baseUrl: string;
};

export interface PaginationOptions {
  pageNo: number;
  pageSize: number;
}

export interface SortOptions {
  sortColumn?: string;
}

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type APIAction = "notes";

type URLGetterParams = {
  action: APIAction;
  path?: string;
  pagination?: PaginationOptions;
  sortOptions?: SortOptions;
  queryParams?: Record<string, string | string[]>;
  withAuth?: boolean;
  versioning?: boolean;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export class APIError extends Error {
  public error: any;
  public status: number;

  constructor(error: any, status: number) {
    super(error);
    this.status = status;
  }
}

export const getURL = ({
  action,
  path = "",
  pagination,
  sortOptions,
  queryParams,
}: URLGetterParams) => {
  let queryParamsString = pagination || queryParams ? "?" : "";
  if (pagination) {
    queryParamsString += `&_page=${pagination.pageNo}&_limit=${pagination.pageSize}`;
  }
  if (sortOptions) {
    if (sortOptions.sortColumn)
      queryParamsString += `&_sort=${sortOptions.sortColumn}`;
  }
  if (queryParams) {
    const params = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (Array.isArray(value)) value.forEach((v) => params.append(key, v));
      else params.append(key, value);
    });
    queryParamsString += `&${params.toString()}`;
  }

  return `${VW_API_INIT_VALUES.baseUrl}/${action}${path}${queryParamsString}`;
};

export const getHeaders = (formData: boolean) => {
  const headers: Record<string, string> = formData
    ? {}
    : {
        "Content-Type": "application/json",
      };
  return headers;
};

export type FetchRequestData = URLGetterParams & {
  method?: Method;
  body?: Record<string, unknown>[] | Record<string, unknown> | FormData;
};

export const fetchData = async ({
  method = "GET",
  body,
  ...props
}: FetchRequestData) => {
  const options: RequestInit = {
    method,
    headers: getHeaders(body instanceof FormData),
  };
  if (body)
    options.body = body instanceof FormData ? body : JSON.stringify(body);
  const response = await fetch(`${getURL({ ...props })}`, options);
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.indexOf("application/json") !== -1;
  if (!response.ok) {
    const error = isJson ? await response.json() : "Error";
    throw new APIError(error, response.status);
  }
  if (isJson) {
    const json = await response.json();
    return json;
  }
};

export const initAPI = (params: VWAPIInitOptions) => {
  const { baseUrl } = params;
  VW_API_INIT_VALUES.baseUrl = baseUrl;
};
