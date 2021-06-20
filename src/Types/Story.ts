import {IBaseList, IBaseSummary} from "./BaseTypes";

export interface IStoryList extends IBaseList<IStorySummary> {}

export interface IStorySummary extends IBaseSummary {}