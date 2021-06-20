import {ICharacter} from "../Types/Character";
import {IComic} from "../Types/Comic";
import {ICreator} from "../Types/Creator";
import {IEvent} from "../Types/Event";
import {ISeries} from "../Types/Series";
import {IStory} from "../Types/Story";
import {isICharacter, isIComic, isICreator, isIEvent, isISeries, isIStory, isTitled} from "./Predicates";

interface ICardInfo {
  title: string;
  image: string;
  link: string;
}


function normaliseForCard (data: ICharacter | IComic | ICreator | IEvent | ISeries | IStory): ICardInfo {
  const image = data.thumbnail ? `${data.thumbnail?.path}.${data.thumbnail?.extension}` : process.env.REACT_APP_IMAGE_NOT_FOUND || '';
  let title = "No Title"
  let link = ""

  if(isTitled(data)) {
    title = data.title || "No Title"
  }

  if(isICreator(data)) {
    title = data.fullName || "No Name"
    link = `/creators/${data.id}`
    return {title,image,link}
  }

  if(isICharacter(data)) {
    title = data.name || "No Name"
    link = `/characters/${data.id}`
    return {title,image,link}
  }

  if(isIComic(data)) {
    link = `/comics/${data.id}`
    return {title,image,link}
  }

  if(isIEvent(data)) {
    link = `/events/${data.id}`
    return {title,image,link}
  }

  if(isISeries(data)) {
    link = `/series/${data.id}`
    return {title,image,link}
  }

  if(isIStory(data)) {
    link = `/stories/${data.id}`
    return {title,image,link}
  }

  return {
    title,
    image,
    link
  }
}

export default normaliseForCard