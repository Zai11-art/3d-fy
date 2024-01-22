import React from "react";
import PageLayout from "../../layout/page-layout";

const Error = () => {
  return (
    <PageLayout>
      <div className=" w-full h-screen flex justify-center">
        <div className="px-5 flex items-center justify-center gap-5 md:flex-row flex-col">
          <div>
            <h1 className="text-6xl font-bold md:text-none text-center">Page does not exist.</h1>
          </div>
          <div className="flex items-center justify-center w-[300px] h-[300px] rounded-full bg-orange-600">
            <h1 className="text-8xl text-normal font-bold text-white">404</h1>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Error;
