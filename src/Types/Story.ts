import {IBaseDataContainer, IBaseDataWrapper, IBaseList, IBaseSummary} from "./BaseType";
import {IImage} from "./Image";
import {IComicList, IComicSummary} from "./Comic";
import {ISeriesList} from "./Series";
import {IEventList} from "./Event";
import {ICharacterList} from "./Character";
import {ICreatorList} from "./Creator";

export interface IStoryDataWrapper extends IBaseDataWrapper<IStoryDataContainer> {}

export interface IStoryDataContainer extends IBaseDataContainer<IStory> {}

export interface IStory {
  id?: number, // The unique ID of the story resource.,
  title?: string, // The story title.,
  description?: string, // A short description of the story.,
  resourceURI?: string, // The canonical URL identifier for this resource. ,
  type?: string, // The story type e.g. interior story, cover, text story.,
  modified?: string, // The date the resource was most recently modified.,
  thumbnail?: IImage, // The representative image for this story.,
  comics?: IComicList, // A resource list containing comics in which this story takes place.,
  series?: ISeriesList, // A resource list containing series in which this story appears.,
  events?: IEventList, // A resource list of the events in which this story appears.,
  characters?: ICharacterList, // A resource list of characters which appear in this story.,
  creators?: ICreatorList, // A resource list of creators who worked on this story.,
  originalissue?: IComicSummary, // A summary representation of the issue in which this story was originally published.
}

export interface IStoryList extends IBaseList<IStorySummary> {}

export interface IStorySummary extends IBaseSummary {}