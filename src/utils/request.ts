
export enum EMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export interface IRequest {
  method?: EMethod,
  path: string,
  raw?: boolean
}

export const request = async ({ method = EMethod.GET, path, raw = false }: IRequest): Promise<any> => {
  try {
    const response = await fetch(path, { method });
    if (raw) {
      return response
    }
    const parsed = await response.json();
    return parsed
  } catch (error) {
    console.error(`[http request error]: ${error}`);
    throw error;
  }
}