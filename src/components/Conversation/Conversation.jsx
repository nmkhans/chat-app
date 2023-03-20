import React from "react";

const Conversation = () => {
  return (
    <div class="w-[100px] border-r border-t-0 border-gray-300 lg:col-span-1 md:w-full">
      <div class="h-[65px] text-center text-grey-500 p-4 border-b border-gray-300 flex md:justify-end justify-center">
        <svg viewBox="0 0 194.436 194.436" class="w-5 h-5 text-grey-500">
          <path
            d="M192.238,34.545L159.894,2.197C158.487,0.79,156.579,0,154.59,0c-1.989,0-3.897,0.79-5.303,2.196l-32.35,32.35
                        c-0.004,0.004-0.008,0.01-0.013,0.014L54.876,96.608c-1.351,1.352-2.135,3.166-2.193,5.076l-1.015,33.361
                        c-0.063,2.067,0.731,4.068,2.193,5.531c1.409,1.408,3.317,2.196,5.303,2.196c0.076,0,0.153-0.001,0.229-0.004l33.36-1.018
                        c1.909-0.058,3.724-0.842,5.075-2.192l94.41-94.408C195.167,42.223,195.167,37.474,192.238,34.545z M154.587,61.587L132.847,39.85
                        l21.743-21.743l21.738,21.741L154.587,61.587z M89.324,126.85l-22.421,0.685l0.682-22.422l54.655-54.656l21.741,21.738
                        L89.324,126.85z"
          />
          <path
            d="M132.189,117.092c-4.142,0-7.5,3.357-7.5,7.5v54.844H15.001V69.748h54.844c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5
                        H7.501c-4.142,0-7.5,3.357-7.5,7.5v124.687c0,4.143,3.358,7.5,7.5,7.5h124.687c4.142,0,7.5-3.357,7.5-7.5v-62.344
                        C139.689,120.449,136.331,117.092,132.189,117.092z"
          />
        </svg>
      </div>
      <ul class="overflow-auto">
        <li>
          <a class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
            <img
              class="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
              alt="username"
            />
            <div class="w-full pb-2 hidden md:block">
              <div class="flex justify-between">
                <span class="block ml-2 font-semibold text-gray-600">
                  Jhon Don
                </span>
                <span class="block ml-2 text-sm text-gray-600">25 minutes</span>
              </div>
              <span class="block ml-2 text-sm text-gray-600">bye</span>
            </div>
          </a>
          <a class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
            <img
              class="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
              alt="username"
            />
            <div class="w-full pb-2 hidden md:block">
              <div class="flex justify-between">
                <span class="block ml-2 font-semibold text-gray-600">Same</span>
                <span class="block ml-2 text-sm text-gray-600">50 minutes</span>
              </div>
              <span class="block ml-2 text-sm text-gray-600">Good night</span>
            </div>
          </a>
          <a class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
            <img
              class="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
              alt="username"
            />
            <div class="w-full pb-2 hidden md:block">
              <div class="flex justify-between">
                <span class="block ml-2 font-semibold text-gray-600">Emma</span>
                <span class="block ml-2 text-sm text-gray-600">6 hour</span>
              </div>
              <span class="block ml-2 text-sm text-gray-600">Good Morning</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Conversation;