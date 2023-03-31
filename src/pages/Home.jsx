import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Question from "../components/Question";
import music from "../assets/sample-9s.mp3";

const Home = () => {
  const [difficulty, setDiffculty] = useState("");
  const [questions, setQuestions] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const start = () => {
    if (difficulty) {
      setLoading(true);

      axios
        .get(
          `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`
        )
        .then((res) => {
          setQuestions(res.data.results);
          setLoading(false);
          setShowQuestion(true);
        })
        .catch((err) => {
          console.log("err", err);
          setLoading(false);
        });
    } else {
      toast.error("Select Difficulty");
    }
  };

  const quit = () => {
    navigate("/");
  };

  useEffect(() => (user ? navigate("/home") : navigate("/")), [user, navigate]);

  return (
    <div className=" flex flex-col items-center justify-center m-4 ">
      <audio src={music} autoPlay loop />
      <h2 className="text-2xl font-bold  text-center mt-10">
        Welcome, <span className="text-blue-500 capitalize">{user}</span>
      </h2>
      {!showQuestion ? (
        <>
          <h3 className="capitalize my-3 font-semibold text-sm">
            select difficulty to start game
          </h3>
          <select
            name="mode"
            className="p-2 border-blue-200 border-2 rounded capitalize"
            onChange={(e) => setDiffculty(e.target.value)}
          >
            <option value="mode">choose mode</option>
            <option value="easy">choose easy</option>
            <option value="medium">choose medium</option>
            <option value="hard">choose hard</option>
          </select>
          <div className="flex items-center space-x-5">
            <Button
              onPress={start}
              disabled={false}
              className={`rounded py-2 px-6  text-white w-max capitalize font-semibold mt-4
        bg-blue-500
          `}
              text={"start game"}
            />
            <Button
              onPress={quit}
              disabled={false}
              className={`rounded py-2 px-6  text-white w-max capitalize font-semibold mt-4
        bg-red-500
          `}
              text={"quit game"}
            />
          </div>

          {loading && " starting game..."}
        </>
      ) : (
        <Question
          question={questions}
          setShowQuestion={setShowQuestion}
          setDiffculty={setDiffculty}
        />
      )}
    </div>
  );
};

export default Home;
