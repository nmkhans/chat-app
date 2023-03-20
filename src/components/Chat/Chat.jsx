import React from "react";

const Chat = () => {
  return (
    <div class="w-full lg:col-span-2 lg:block">
      <div class="w-full grid conversation-row-grid">
        <div class="relative flex items-center p-3 border-b border-gray-300">
          <img
            class="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
            alt="username"
          />
          <span class="block ml-2 font-bold text-gray-600">Emma</span>
          <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
        </div>
        <div class="relative w-full p-6 overflow-y-auto">
          <ul class="space-y-2">
            <li class="flex justify-start">
              <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                <span class="block">Hi</span>
              </div>
            </li>
            <li class="flex justify-end">
              <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                <span class="block">Hiiii</span>
              </div>
            </li>
            <li class="flex justify-end">
              <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                <span class="block">how are you?</span>
              </div>
            </li>
            <li class="flex justify-start">
              <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                <span class="block">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div class="flex items-center justify-between w-full p-3 border-t border-gray-300">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="Message"
            class="block w-full py-2 pl-4 mx-3 bg-gray-100 focus:ring focus:ring-violet-500 rounded-full outline-none focus:text-gray-700"
            name="message"
            required
          />
          <button type="submit">
            <svg
              class="w-5 h-5 text-gray-500 origin-center transform rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
