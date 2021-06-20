import {ICharacter} from "../Types/Character";
import {IComic} from "../Types/Comic";
import {ICreator} from "../Types/Creator";
import {IEvent} from "../Types/Event";
import {ISeries} from "../Types/Series";
import {IStory} from "../Types/Story";
import {isDescribed, isICharacter, isICreator, isTitled} from "./Predicates";

export interface IDetailsInfo {
  title: string;
  image: string;
  description: string;
}


export function normaliseForDetails (data: ICharacter | IComic | ICreator | IEvent | ISeries | IStory): IDetailsInfo {
  const image = data.thumbnail ? `${data.thumbnail?.path}.${data.thumbnail?.extension}` : process.env.REACT_APP_IMAGE_NOT_FOUND || '';
  let title = "No Title"
  let description = ""

  if(isTitled(data)) {
    title = data.title || "No Title"
  }

  if(isICreator(data)) {
    title = data.fullName || "No Name"
  }

  if(isICharacter(data)) {
    title = data.name || "No Name"
  }

  if(isDescribed(data)) {
    description = data.description || "No Description Available"
  }

  return {
    title,
    image,
    description
  }
}