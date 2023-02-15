export enum TypeRequest {
  params = 'params',
  process = 'process',
}

export interface ActionRequest {
  action: TypeRequest;
}

export interface ParamsResponse {
  count: string;
  delay: string;
}

export interface ProcessResponse {
  status: string;
}
