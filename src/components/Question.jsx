import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Button from "./Button";
import Result from "./Result";
import Timer from "./Timer";

const Question = ({ question, setShowQuestion, setDiffculty }) => {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(30);
  const [color, setColor] = useState("");
  const [option, setOption] = useState([]);
  const [selected, setSelected] = useState();
  const [showResult, setShowResult] = useState(false);

  const next = () => {
    count !== question?.length - 1 ? setCount(count + 1) : setCount(count);
    setTime(30);
  };

  const skip = () => {
    count !== question?.length - 1 ? setCount(count + 1) : setCount(count);
    setTime(30);
  };

  const prev = () => {
    count === 0 ? setCount(count) : setCount(count - 1);
    setTime(30);
  };
  const submit = () => {
    setShowResult(true);
  };

  useEffect(() => {
    time === 0 && count < question.length - 1 && next();
    time === 0 && count === question.length - 1 && submit();
  }, [time]);

  const handleSelect = (i) => {
    if (selected === i && selected === question[count].correct_answer){
    //   toast.error();
      setColor("select");

    }
    else if (i === question[count].correct_answer){
    //   toast.error();
      setColor("select");

    } 
    else {
      setColor("wrong");
      toast.success(`correct answer: ${question[count].correct_answer}`);

    }
  };

  const handleCheck = (i) => {
    handleSelect(i);
    setSelected(i);
    if (i === question[count].correct_answer) setScore(score + 1);
  };

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setSelected("");
    setOption(() =>
      handleShuffle([
        question[count]?.correct_answer,
        ...question[count]?.incorrect_answers,
      ])
    );
  }, [count, question]);

  return (
    <>
      {showResult ? (
        <Result
          score={score}
          question={question}
          setShowQuestion={setShowQuestion}
          setDiffculty={setDiffculty}
        />
      ) : (
        <div className="mt-10 w-2/3 mx-auto">
          <Timer time={time} setTime={setTime} />

          <p className="font-semibold text-sm text-blue-500">
            Your Score : {score}
          </p>
          <div
            style={{
              width: `${count * question?.length}%`,
            }}
            className={` bg-blue-500 h-2 rounded-full `}
          />
          <section className="">
            {
              <>
                <h2 className="font-bold text-sm">
                  Question ({count + 1} / {question?.length}) :{" "}
                  {question && question[count]?.question}
                </h2>

                {option &&
                  option.map((item, i) => (
                    <>
                      <button
                        key={item}
                        onClick={() => handleCheck(item)}
                        disabled={selected}
                        style={{
                          background:
                            color === "select" && selected === item
                              ? "green"
                              : color === "wrong" && selected === item
                              ? "red"
                              : "",
                          color:
                            color === "select" && selected === item
                              ? "white"
                              : color === "wrong" && selected === item
                              ? "white"
                              : "",
                        }}
                        className={` p-3 flex items-center space-x-3 w-max rounded-xl m-3 cursor-pointer hover:bg-[#dfdfdf]
                     `}
                      >
                        {i + 1}
                        {".  "}
                        <p
                          className="text-sm ml-3"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </button>
                    </>
                  ))}
              </>
            }
          </section>
          <div className="flex space-x-4 items-center mt-10">
            <Button
              onPress={prev}
              disabled={false}
              className={`rounded py-2 px-6  text-white w-max capitalize font-semibold text-xs
        bg-blue-500
          `}
              text={"prev"}
            />

            <Button
              onPress={next}
              disabled={false}
              className={`rounded py-2 px-6  text-white w-max capitalize font-semibold text-xs
        bg-blue-500
          `}
              text={"next"}
            />
            {count === question?.length - 1 ? (
              <Button
                onPress={submit}
                disabled={false}
                className={`rounded py-2 px-6 w-max text-white capitalize font-semibold text-xs
        bg-green-500
          `}
                text={"submit"}
              />
            ) : (
              <Button
                onPress={skip}
                disabled={false}
                className={`rounded py-2 px-6 w-max capitalize font-semibold text-xs
        bg-[#dfdfdf]
          `}
                text={"skip"}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
