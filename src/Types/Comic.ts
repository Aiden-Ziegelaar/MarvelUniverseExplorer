import {IBaseList, IBaseSummary} from "./BaseTypes";

export interface IComicList extends IBaseList<IComicSummary> {}

export interface IComicSummary extends IBaseSummary {}