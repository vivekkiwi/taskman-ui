import AboutImg from "../../../assets/images/png/about.png";
import GlobalHeader from "../../organisms/GlobalHeader";
const AboutUs = () => {
  return (
    <div className="h-screen flex flex-col">
      <GlobalHeader />
      <div className="grow flex">
        <div class="sm:flex items-center max-w-full">
          <div class="sm:w-1/2 p-10">
            <div class="image object-center text-center">
              <img
                src={AboutImg}
                height="auto"
                width="100%"
                alt="about"
                className="mr-0"
              />
            </div>
          </div>
          <div class="sm:w-1/2 p-5 flex flex-col">
            <div class="text">
              <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">
                About us
              </span>
              <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
                About <span class="text-indigo-600">The Hindi Buddy</span>
              </h2>
              <p class="text-gray-700">
                The collective community of learners and educators who make up
                the educational ecosystem. On this platform, we can discuss the
                importance of collaboration and shared learning experiences in
                the process of education. This website can highlight the
                different roles that students, teachers, and other stakeholders
                play in creating a supportive and effective learning
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
