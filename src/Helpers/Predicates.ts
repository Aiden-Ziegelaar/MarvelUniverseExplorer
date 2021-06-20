import {ICharacter} from "../Types/Character";
import {IComic} from "../Types/Comic";
import {ICreator} from "../Types/Creator";
import {IEvent} from "../Types/Event";
import {ISeries} from "../Types/Series";
import {IStory} from "../Types/Story";

export function isICharacter(test: ICharacter | IComic | ICreator | IEvent | ISeries | IStory): test is ICharacter {
  const arr = test.resourceURI?.split("/") || [""]
  return arr[arr.length-2].toLowerCase() === "characters"
}

export function isICreator(test: ICharacter | IComic | ICreator | IEvent | ISeries | IStory): test is ICreator {
  const arr = test.resourceURI?.split("/") || [""]
  return arr[arr.length-2].toLowerCase() === "creators"
}

export function isIComic(test: ICharacter | IComic | ICreator | IEvent | ISeries | IStory): test is IComic {
  const arr = test.resourceURI?.split("/") || [""]
  return arr[arr.length-2].toLowerCase() === "comics"
}

export function isIEvent(test: ICharacter | IComic | ICreator | IEvent | ISeries | IStory): test is IEvent {
  const arr = test.resourceURI?.split("/") || [""]
  return arr[arr.length-2].toLowerCase() === "events"
}

export function isISeries(test: ICharacter | IComic | ICreator | IEvent | ISeries | IStory): test is ISeries {
  const arr = test.resourceURI?.split("/") || [""]
  return arr[arr.length-2].toLowerCase() === "series"
}

export function isIStory(test: ICharacter | IComic | ICreator | IEvent | ISeries | IStory): test is IStory {
  const arr = test.resourceURI?.split("/") || [""]
  return arr[arr.length-2].toLowerCase() === "stories"
}

export function isTitled(test: ICharacter | IComic | ICreator | IEvent | ISeries | IStory): test is IComic | IEvent | ISeries | IStory {
  return "title" in test
}

export function isDescribed(test: ICharacter | IComic | ICreator | IEvent | ISeries | IStory): test is ICharacter | IComic | IEvent | ISeries | IStory {
  return "description" in test
}
