import React from "react";

const GettingStartedSection = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-32 gap-4">
      <div className="font-semibold text-3xl">Getting started is easy</div>
      <div>Earn Stars and get rewarded in a few easy steps.</div>
      <div className="flex flex-col md:flex-row mt-2 p-2 w-full justify-center items-start gap-3 lg:container">
        <div className="flex md:flex-col justify-center items-start md:items-center gap-2">
          <span className="rounded-full h-12 w-12 flex items-center justify-center border-[#2D8F67] border-2 text-[#015D3F] font-bold p-4">
            1
          </span>
          <div className="flex flex-col gap-3 md:items-center">
              <div className="font-semibold text-xl">Create an account</div>
              <div>To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</div>
          </div>
        </div>
        <div className="flex md:flex-col justify-center items-start md:items-center gap-2">
          <span className="rounded-full h-12 w-12 flex items-center justify-center border-[#2D8F67] border-2 text-[#015D3F] font-bold p-4">
            2
          </span>
          <div className="flex flex-col gap-3 md:items-center">
              <div className="font-semibold text-xl">Order and pay how you’d like</div>
              <div>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</div>
          </div>
        </div>
        <div className="flex md:flex-col justify-center items-start md:items-center gap-2">
          <span className="rounded-full h-12 w-12 flex items-center justify-center border-[#2D8F67] border-2 text-[#015D3F] font-bold p-4">
            3
          </span>
          <div className="flex flex-col gap-3 md:items-center">
              <div className="font-semibold text-xl">Earn Stars, get Rewards</div>
              <div>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
