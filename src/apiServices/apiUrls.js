import { serverBase, codeBase, imagesBase, recruiterUrl } from "./urlConfig";

//NOTE :: Individual export urls
export const getLocation = (size) =>
  `${serverBase}/suggestions/v2/suggestions/location?input={input}&size=${size}`

export default urls;
