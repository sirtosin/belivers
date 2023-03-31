import React from 'react'
import Button from './Button';
import {FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon} from "react-share";
const Result = ({ score, question, setShowQuestion, setDiffculty }) => {
  const back = () => {
    setShowQuestion(false);
    setDiffculty("");
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-6">
      <h1 className=" text-2xl text-blue-500 font-bold">
        Here is your result:
      </h1>
      <p className="text-xl font-semibold">
        {score}/{question.length}
      </p>
      <Button
        onPress={back}
        disabled={false}
        className={`rounded py-2 px-6  text-white w-max capitalize font-semibold mt-4 bg-blue-500`}
        text={"Play again"}
      />

      <p className="font-semibold text-sm text-gray-500 capitalize">share on</p>
      <div className="flex items-center space-x-10">
        <FacebookShareButton
          url={"https://www.facebook.com/profile.php?id=100085041733989"}
          quote={`Your Quiz score is ${score}`}
          hashtag="#quiz"
          className={``}
        >
          <FacebookIcon size={36} className="rounded-full" />
        </FacebookShareButton>
        <TwitterShareButton
          url={"http://www.camperstribe.com"}
          title={`Your Quiz score is ${score}`}
          hashtag="#quiz"
          className=""
        >
          <TwitterIcon className={`rounded-full`} size={36} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={"http://www.camperstribe.com"}
          title={`Your Quiz score is ${score}`}
          separator=":: "
          className=" "
        >
          <WhatsappIcon className={`rounded-full`} size={36} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Result