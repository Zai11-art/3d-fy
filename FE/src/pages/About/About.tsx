import { FaGithub, FaReddit, FaXTwitter } from "react-icons/fa6";

import Divider from "../../components/divider";
import PageLayout from "../../layout/page-layout";

const About = () => {
  return (
    <PageLayout>
      <div className="h-screen w-full flex flex-col gap-10 justify-center items-center py-16">
        <div className="flex flex-col gap-12 items-center justify-center w-full my-5 ">
          <div className="h-64 w-64 border-green-500 shadow-2xl shadow-green-300 hover:shadow-green-200 transition-all ease-in-out border-[3px] rounded-full">
            <img
              className="rounded-full flex border-[1px] "
              src="https://avatars.githubusercontent.com/u/66768290?v=4"
              alt="dev"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-xl">Zycod</h1>

            <div className="flex gap-3">
              <FaGithub />
              <FaXTwitter />
              <FaReddit />
            </div>
            <Divider />
          </div>
        </div>

        <div className="text-xl font-thin">About</div>
        <div className="w-[600px] h-full text-normal text-center font-light">
          <p>
            Hi! Zycod here, I created this app to help share the cool world of
            3d. I'd like a place where 3d artists could hangout, share and learn
            stuff about 3d as it's as vast as it could be. Site is still under
            development. SO YEAH, HOPE I CAN FINISH THIS PROJECT. (YES I HAVE SO
            MANY UNFINISHED ONES)
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
