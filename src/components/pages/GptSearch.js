import React, { useState } from "react";
import Header from "../section/Header";
import openai from "../../util/openAi";

const GptSearch = () => {
    const [input, setInput] = useState('')
    const handleGptSearch = async() => {
        if(!input) return
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: input }],
            model: 'gpt-3.5-turbo',
          });
          console.log(chatCompletion)
    }
   return (
    <div className="bg-zinc-600 min-h-screen">
      <Header customHeaderStyle="px-8 py-1 z-50 bg-zinc-800 sticky top-0" />
      <div className="flex justify-center mt-32 h-12">
        <form className="bg-black shadow-md  hover:border-none px-2 py-2 w-1/2 h-12" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search your movies"
            className="w-3/4 h-12 px-2 rounded-sm"
            onChange={(e) => {
                setInput(e.target.value);
            }}
          />
          <button className="bg-red-600 w-1/4 h-12 text-lg text-white rounded-sm" onClick={handleGptSearch}>Search</button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
