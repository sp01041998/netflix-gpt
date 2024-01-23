import React from "react";
import Header from "../section/Header";

const SignUp = () => {
  return (
    <div>
      <Header btnText="sign In" style="bg-red-600 w-20 h-8 rounded-lg text-white" customHeaderStyle = "absolute" />
      <section
        className="h-screen bg-cover bg-center  flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.9) 100%), url('https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg')`,
          backgroundSize: "100% 100%",
        }}
      >
        <div>
          <h1 className="font-bold text-5xl text-white">
            Unlimited movies, TV shows and more
          </h1>
          <h3 className="text-white text-center text-2xl mt-4">
            Watch anywhere. Cancel anytime.
          </h3>
          <h3 className="text-white text-center text-xl mt-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="mt-2 flex justify-center">
            <input
              type="email"
              className="w-1/3 h-14 rounded-sm px-4 bg-transparent border border-gray-500 border-opacity-70  focus:border-4 focus:outline-none focus:border-white-900 shadow-md text-white font-bold font-sans"
              placeholder="Email Address"
            />
            <button className="h-14 bg-red-800 ml-2 rounded-sm text-white hover:bg-red-700 text-xl px-4 py-1">
              Get Started →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
