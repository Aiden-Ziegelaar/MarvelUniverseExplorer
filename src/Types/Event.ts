import {IBaseDataContainer, IBaseDataWrapper, IBaseList, IBaseSummary} from "./BaseType";
import {ITextObject} from "./TextObject";
import {IUrl} from "./Url";
import {IImage} from "./Image";
import {IComicList} from "./Comic";
import {IStoryList} from "./Story";
import {ISeriesList} from "./Series";
import {ICharacterList} from "./Character";
import {ICreatorList} from "./Creator";

export interface IEventDataWrapper extends IBaseDataWrapper<IEventDataContainer> {}

export interface IEventDataContainer extends IBaseDataContainer<IEvent> {}

export interface IEvent {
  id?: number, // The unique ID of the event resource.,
  title?: string, // The title of the event.,
  description?: string, // A description of the event.,
  resourceURI?: string, // The canonical URL identifier for this resource.,
  urls?: IUrl[], // A set of public web site URLs for the event.,
  modified?: string, // The date the resource was most recently modified.,
  start?: string, // The date of publication of the first issue in this event.,
  end?: string, // The date of publication of the last issue in this event.,
  thumbnail?: IImage, // The representative image for this event.,
  comics?: IComicList, // A resource list containing the comics in this event.,
  stories?: IStoryList, // A resource list containing the stories in this event.,
  series?: ISeriesList, // A resource list containing the series in this event.,
  characters?: ICharacterList, // A resource list containing the characters which appear in this event.,
  creators?: ICreatorList, // A resource list containing creators whose work appears in this event.,
  next?: IEventSummary, // A summary representation of the event which follows this event.,
  previous?: IEventSummary, // A summary representation of the event which preceded this event.
}

export interface IEventList extends IBaseList<IEventSummary> {}

export interface IEventSummary extends IBaseSummary {}