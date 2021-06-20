import {IBaseDataContainer, IBaseDataWrapper, IBaseList, IBaseSummary} from "./BaseType";
import {IImage} from "./Image";
import {IUrl} from "./Url";
import {IComicList} from "./Comic";
import {IStoryList} from "./Story";
import {ISeriesList} from "./Series";
import {IEventList} from "./Event";

export interface ICharacterDataWrapper extends IBaseDataWrapper<ICharacterDataContainer> {}

export interface ICharacterDataContainer extends IBaseDataContainer<ICharacter> {}

export interface ICharacter {
  id?: number, // The unique ID of the character resource.,
  name?: string, // The name of the character.,
  description?: string, // A short bio or description of the character.,
  modified?: string, // The date the resource was most recently modified.,
  resourceURI?: string, // The canonical URL identifier for this resource.,
  urls?: IUrl[], // A set of public web site URLs for the resource.,
  thumbnail?: IImage, // The representative image for this character.,
  comics?: IComicList, // A resource list containing comics which feature this character.,
  stories?: IStoryList, // A resource list of stories in which this character appears.,
  events?: IEventList, // A resource list of events in which this character appears.,
  series?: ISeriesList, // A resource list of series in which this character appears.
}

export interface ICharacterSummary extends IBaseSummary {
  role?: string
}

export interface ICharacterList extends IBaseList<ICharacterSummary> {}
