import {IBaseDataContainer, IBaseDataWrapper, IBaseList, IBaseSummary} from "./BaseTypes";
import {IImage} from "./Image";
import {IUrl} from "./Url";
import {IComicList} from "./Comics";
import {IStoryList} from "./Story";
import {ISeriesList} from "./Series";
import {IEventList} from "./Event";

export interface ICharacterDataWrapper extends IBaseDataWrapper<ICharacterDataContainer> {}

export interface ICharacterDataContainer extends IBaseDataContainer<ICharacter>{}

interface ICharacter {
  id?: number,
  name?: string,
  description?: string,
  modified?: Date,
  resourceURI?: string,
  urls?: IUrl[],
  thumbnail?: IImage,
  comics?: IComicList,
  stories?: IStoryList,
  events?: IEventList,
  series?: ISeriesList,
}

export interface ICharacterSummary extends IBaseSummary {
  role?: string
}

export interface ICharacterList extends IBaseList<ICharacterSummary> {}
