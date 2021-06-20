import {IBaseDataContainer, IBaseDataWrapper, IBaseList, IBaseSummary} from "./BaseType";
import {IUrl} from "./Url";
import {IImage} from "./Image";
import {IComicList} from "./Comic";
import {IStoryList} from "./Story";
import {IEventList} from "./Event";
import {ICharacterList} from "./Character";
import {ICreatorList} from "./Creator";

export interface ISeriesDataWrapper extends IBaseDataWrapper<ISeriesDataContainer> {}

export interface ISeriesDataContainer extends IBaseDataContainer<ISeries> {}

export interface ISeries {
  id?: number, // The unique ID of the series resource.,
  title?: string, // The canonical title of the series.,
  description?: string, // A description of the series.,
  resourceURI?: string, // The canonical URL identifier for this resource.,
  urls?: IUrl[], // A set of public web site URLs for the resource.,
  startYear?: number, // The first year of publication for the series.,
  endYear?: number, // The last year of publication for the series (conventionally, 2099 for ongoing series) .,
  rating?: string, // The age-appropriateness rating for the series.,
  modified?: string, // The date the resource was most recently modified.,
  thumbnail?: IImage, // The representative image for this series.,
  comics?: IComicList, // A resource list containing comics in this series.,
  stories?: IStoryList, // A resource list containing stories which occur in comics in this series.,
  events?: IEventList, // A resource list containing events which take place in comics in this series.,
  characters?: ICharacterList, // A resource list containing characters which appear in comics in this series.,
  creators?: ICreatorList, // A resource list of creators whose work appears in comics in this series.,
  next?: ISeriesSummary, // A summary representation of the series which follows this series.,
  previous?: ISeriesSummary, // A summary representation of the series which preceded this series.
}

export interface ISeriesList extends IBaseList<ISeriesSummary> {}

export interface ISeriesSummary extends IBaseSummary {}