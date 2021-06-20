import {IBaseList, IBaseSummary} from "./BaseTypes";

export interface IEventList extends IBaseList<IEventSummary> {}

export interface IEventSummary extends IBaseSummary {}