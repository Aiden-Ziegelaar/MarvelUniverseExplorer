export interface IBaseSummary {
  resourceURI?: string,
  name?: string
}

export interface IBaseList <T> {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items?: T[]
}

export interface IBaseDataWrapper <T> {
  code?: number,
  status?: string,
  copyright?: string,
  attributionText?: string,
  attributionHTML?: string,
  data?: T
  etag?: string
}

export interface IBaseDataContainer <T> {
  offset?: number,
  limit?: number,
  total?: number,
  count?: number,
  data?: T[]
}