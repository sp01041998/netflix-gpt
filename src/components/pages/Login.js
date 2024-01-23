import React, { useState } from "react";
import Header from "../section/Header";
import { useRef } from "react";
import {
  isEmailValid,
  isPasswordValid,
  isValidFullName,
} from "../../util/helper/validator";
import { regComponentMap } from "../../util/const";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../util/firebase";
import { PHOTO_URL } from "../../util/const";

const Login = () => {
  const [error, setError] = useState();
  const [regComponent, setRegComponent] = useState("signUp");
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const changeRegComponent = () => {
    if (regComponent === "signUp") {
      setRegComponent("login");
    } else {
      setRegComponent("signUp");
    }
  };

  const handleSubmitLogin = () => {
    setError("");
    if (regComponent === "signUp") {
      const nameCheck = isValidFullName(fullName.current.value);
      if (nameCheck) {
        setError(nameCheck);
        return;
      }
    }
    const emailCheck = isEmailValid(email.current.value);
    if (emailCheck) {
      setError(emailCheck);
      return;
    }

    const passCheck = isPasswordValid(password.current.value);
    if (passCheck) {
      setError(passCheck);
      return;
    }
    if (regComponent === "signUp") {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: fullName.current.value, photoURL: PHOTO_URL
          }).then(() => {
          }).catch((error) => {
            setError(error?.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode+errorMessage)
        });
    }
  };

  return (
    <div>
      <Header customHeaderStyle = "absolute" />
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.9) 100%), url('https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg')`,
          backgroundSize: "100% 100%",
        }}
      >
        <form
          className="bg-black bg-opacity-75 flex flex-col h-auto px-16 py-14 w-4/12  text-white"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-white text-3xl mb-8 font-sans font-semibold">
            {regComponentMap[regComponent]}
          </p>
          {regComponent === "signUp" && (
            <input
              className="mb-6 rounded-md bg-gray-800 px-8 py-4 w-full"
              placeholder="Full Name"
              ref={fullName}
            />
          )}
          <input
            className="mb-6 rounded-md bg-gray-800 px-8 py-4 w-full"
            placeholder="Email or Phone Number"
            ref={email}
          />
          <input
            className="mb-12 rounded-md bg-gray-800 px-8 py-4"
            placeholder="Password"
            ref={password}
          />
          {error && <p className="text-orange-500 text-base">{error}</p>}
          <button
            className="bg-red-600 py-3 rounded-md text-white font-medium text-xl mt-2"
            onClick={handleSubmitLogin}
          >
            {regComponentMap[regComponent]}
          </button>
          <div className="flex mt-8">
            <p className="text-gray-600">
              {regComponent === "signUp"
                ? "Registered User?"
                : "New to Netflix?"}
            </p>
            <p className="ml-2 cursor-pointer" onClick={changeRegComponent}>
              {regComponent === "signUp" ? "Login In." : "Sign up now."}
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
