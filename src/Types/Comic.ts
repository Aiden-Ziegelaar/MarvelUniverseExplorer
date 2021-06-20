import {IBaseDataContainer, IBaseDataWrapper, IBaseList, IBaseSummary} from "./BaseType";
import {ITextObject} from "./TextObject";
import {IUrl} from "./Url";
import {ISeriesSummary} from "./Series";
import {IImage} from "./Image";
import {ICreatorList} from "./Creator";
import {IEventList} from "./Event";
import {IStoryList} from "./Story";
import {ICharacterList} from "./Character";

export interface IComicDataWrapper extends IBaseDataWrapper<IComicDataContainer> {}

export interface IComicDataContainer extends IBaseDataContainer<IComic> {}

export interface IComic {
  id?: number, // The unique ID of the comic resource.,
  digitalId?: number, // The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.,
  title?: string, // The canonical title of the comic.,
  issueNumber?: number, // The number of the issue in the series (will generally be 0 for collection formats).,
  variantDescription?: string, // If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant.,
  description?: string | null, // The preferred description of the comic.,
  modified?: string, // The date the resource was most recently modified.,
  isbn?: string, // The ISBN for the comic (generally only populated for collection formats).,
  upc?: string //The UPC barcode number for the comic (generally only populated for periodical formats).,
  diamondCode?: string, // The Diamond code for the comic.,
  ean?: string, // The EAN barcode for the comic.,
  issn?: string, // The ISSN barcode for the comic.,
  format: string, // The publication format of the comic e.g. comic, hardcover, trade paperback.,
  pageCount?: number, // The number of story pages in the comic.,
  textObjects?: ITextObject[], // A set of descriptive text blurbs for the comic.,
  resourceURI?: string, // The canonical URL identifier for this resource.,
  urls?: IUrl[], // A set of public web site URLs for the resource.,
  series?: ISeriesSummary, // A summary representation of the series to which this comic belongs.,
  variants?: IComicSummary[], // A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).,
  collections?: IComicSummary[], // A list of collections which include this comic (will generally be empty if the comic's format is a collection).,
  collectedIssues?: IComicSummary[], // A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").,
  dates?: IComicDate[] // A list of key dates for this comic.,
  prices?: IComicPrice[], // A list of prices for this comic.,
  thumbnail?: IImage, // The representative image for this comic.,
  images?: IImage[], // A list of promotional images associated with this comic.,
  creators?: ICreatorList, // A resource list containing the creators associated with this comic.,
  characters?: ICharacterList, // A resource list containing the characters which appear in this comic.,
  stories?: IStoryList, // A resource list containing the stories which appear in this comic.,
  events?: IEventList, // A resource list containing the events in which this comic appears.
}

export interface IComicDate {
  type?: string, // A description of the date (e.g. onsale date, FOC date).,
  date?: string, // The date.
}
export interface IComicPrice {
  type?: string, // A description of the price (e.g. print price, digital price).,
  price?: number, // The price (all prices in USD).
}

export interface IComicList extends IBaseList<IComicSummary> {}

export interface IComicSummary extends IBaseSummary {}