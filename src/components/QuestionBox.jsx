import React from 'react'

const QuestionBox = ({ count, question, option, handleCheck ,selected,color}) => {
  return (
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
  );
};

export default QuestionBox