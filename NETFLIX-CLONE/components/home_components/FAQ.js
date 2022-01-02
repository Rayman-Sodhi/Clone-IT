import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const arr = [
  {
    title: "What is Netflix?",
    desc: [
      `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.`,
      `You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    ],
  },
  {
    title: "How much doses Netflix cost?",
    desc: [
      `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`,
    ],
  },
  {
    title: "Where can I watch?",
    desc: [
      `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
          `,
      `You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    ],
  },
  {
    title: "How do I cancel?",
    desc: [
      `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    ],
  },
  {
    title: "What can I watch on Netflix?",
    desc: [
      `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    ],
  },
  {
    title: "Is Netflix good for kids?",
    desc: [
      `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
          `,
      `Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    ],
  },
];

export default function FAQ() {
  const [curr, setCurr] = useState(-1);
  return (
    <div className="text-white bg-black px-4 sm:px-20 md:px-32 lg:px-48 py-20">
      <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center">
        Frequently Asked Questions
      </p>
      {arr.map((e, index) => {
        return (
          <Card
            key={index}
            data={e}
            idx={index}
            setCurr={setCurr}
            curr={curr}
          />
        );
      })}
    </div>
  );
}

const Card = (props) => {
  const { title, desc } = props.data;
  const { idx, setCurr, curr } = props;
  const help = () => {
    if (curr === -1) {
      return idx;
    } else {
      if (curr === idx) {
        return -1;
      }
      return idx;
    }
  };
  return (
    <>
      <div
        className="flex bg-[#303030] p-4 mt-3 cursor-pointer justify-between items-center"
        onClick={() => setCurr(help)}
      >
        <p className="font-semibold text-lg sm:text-xl">{title}</p>
        <div>
          {curr !== idx ? <AiOutlinePlus className="text-3xl" /> : <ImCross className="font-light" />}
        </div>
      </div>
      {curr === idx && (
        <div className="bg-[#303030] p-4 mt-1 flex flex-col space-y-4">
          {desc?.map((e, index) => {
            return (
              <p className="font-medium" key={index}>
                {e}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
};
