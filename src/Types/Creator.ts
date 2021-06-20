import {IBaseDataContainer, IBaseDataWrapper, IBaseList, IBaseSummary} from "./BaseType";
import {IUrl} from "./Url";
import {IImage} from "./Image";
import {IEventList} from "./Event";
import {IComicList} from "./Comic";
import {IStoryList} from "./Story";
import {ISeriesList} from "./Series";

export interface ICreatorDataWrapper extends IBaseDataWrapper<ICreatorDataContainer> {}

export interface ICreatorDataContainer extends IBaseDataContainer<ICreator> {}

export interface ICreator {
  id?: number, // The unique ID of the creator resource.,
  firstName?: string, // The first name of the creator.,
  middleName?: string, // The middle name of the creator.,
  lastName?: string, // The last name of the creator.,
  suffix?: string, // The suffix or honorific for the creator.,
  fullName?: string, // The full name of the creator (a space-separated concatenation of the above four fields).,
  modified?: string, // The date the resource was most recently modified.,
  resourceURI?: string, // The canonical URL identifier for this resource.,
  urls?: IUrl[], // A set of public web site URLs for the resource.,
  thumbnail?: IImage, // The representative image for this creator.,
  series?: ISeriesList, // A resource list containing the series which feature work by this creator.,
  stories?: IStoryList, // A resource list containing the stories which feature work by this creator.,
  comics?: IComicList, // A resource list containing the comics which feature work by this creator.,
  events?: IEventList, // A resource list containing the events which feature work by this creator.
}

export interface ICreatorList extends IBaseList<ICreatorSummary> {}

export interface ICreatorSummary extends IBaseSummary {}