// import React from "react";
import record from "../assets/images/record.png";
import voice from "../assets/images/voice.png";
import date from "../assets/images/date.png";
import lock from "../assets/images/lock.png";
import bg2 from "../assets/images/bg2.png";
import handarrow from "../assets/images/handdraw.png";

const WhyClearLink = () => {
  return (
    <div className="mb-20">
      <div className="mx-20 space-y-5  font-inter">
        <p className="text-blue-500 font-semibold text-md">
          The ClearLink Advantage
        </p>
        <h2 className="text-3xl text-gray-800 font-semibold ">
          Why choose ClearLink?
        </h2>
        <p className="text-gray-500 font-normal max-w-xl ">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <section className="mx-20 mt-20">
        <div className="flex w-full justify-between flex-wrap ">
          <div className="flex w-2/4 gap-10 flex-wrap">
            <div className="space-y-5">
              <img src={record} alt="record" />
              <div className="space-y-2">
                <h2 className="font-medium text-gray-900 text-xl ">
                  Crystal-clear HD video
                </h2>
                <p className="font-normal text-gray-600 max-w-64 text-md">
                  No more pixelation or blurriness – just stunning, lifelike
                  clarity that brings your team closer in meetings.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <img src={voice} alt="voice" />
              <div className="space-y-2">
                <h2 className="font-medium text-gray-900 text-xl ">
                  Noise-cancelling audio
                </h2>
                <p className="font-normal text-gray-600 max-w-64 text-md">
                  Say goodbye to distractions with our advanced audio tech for
                  crisp, interruption-free conversations.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <img src={date} alt="date" />
              <div className="space-y-2">
                <h2 className="font-medium text-gray-900 text-xl ">
                  Scheduling made easy
                </h2>
                <p className="font-normal text-gray-600 max-w-64 text-md">
                  Streamline your agenda with ClearLink&apos;s intuitive
                  scheduling. Set up meetings, send invitations, and receive
                  reminders in one place.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <img src={lock} alt="lock" />
              <div className="space-y-2">
                <h2 className="font-medium text-gray-900 text-xl ">
                  Bank-grade security
                </h2>
                <p className="font-normal text-gray-600 max-w-64 text-md">
                  Your privacy is our priority with bank-grade security
                  protocols safeguarding your meetings and data from unwanted
                  intruders.
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/5 relative">
            <img
              className="absolute top-0 left-0 w-full h-full"
              src={bg2}
              alt="section-image"
            />
            <img
              className="absolute top-5 left-1/4 transform -translate-x-1/3 -translate-y-full"
              src={handarrow}
              alt="handarrow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyClearLink;
