let codeBase = process.env.NEXT_PUBLIC_BASE_URL;
let serverBase = `${process.env.NEXT_PUBLIC_BASE_URL}/jsapi`;
let recruiterUrl = process.env.BIGSHYFT_RECRUITER_BASE_URL;
let imagesBase = process.env.BIGSHYFT_IMAGE_BASE_URL;

// NOTE :: Uncomment for later use
// if (
//   window !== undefined &&
//   window.location.hostname === "assessments.bigshyft.com"
// ) {
//   serverBase = "https://assessments.bigshyft.com/jsapi";
//   codeBase = "https://assessments.bigshyft.com";
// }

export { serverBase, codeBase, imagesBase, recruiterUrl };
