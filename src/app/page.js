"use client";
import CustomBarChart from "@/components/CustomBarChart";
import CustomLineChar from "@/components/CustomLineChar";
import CustomPieChart from "@/components/CustomPieChart";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [scores, setScores] = useState({ rank: "", percentile: "", score: "" });

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    setScores((prevScores) => ({
      ...prevScores,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const updatedScores = {
      rank: Number(scores.rank),
      percentile: Number(scores.percentile),
      score: Number(scores.score),
    };

    console.log("Updated Scores:", updatedScores);
    setScores(updatedScores);
  };

  return (
    <section className="p-5 lg:p-10 w-full">
      <h2>Skill Test</h2>
      <div className="pt-5 flex min-w-full gap-5 lg:flex-row flex-col">
        {/* Skill Test */}
        <div className="lg:w-3/5 w-full gap-5 flex flex-col">
          <div className="border rounded-sm p-4 gap-2 flex justify-between items-center flex-col lg:flex-row">
            <div className="flex gap-2 flex-col lg:flex-row text-center lg:text-left items-center">
              <Image
                src={"./html5.svg"}
                alt="html5"
                width={100}
                className=""
                height={100}
              />
              <div>
                <h3 className="font-bold">Hyper Text Markup Language</h3>
                <h4>
                  Question: 08 | Duration: 15 min | Submitted on 5 June 2021
                </h4>
              </div>
            </div>
            <AlertDialog>
              <AlertDialogTrigger className="bg-blue-950 text-white px-5 py-2 rounded-lg font-bold">
                Update
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex gap-2 items-center justify-between">
                    <h2>Update scores</h2>
                    <Image
                      src={"./html5.svg"}
                      alt="html5"
                      width={30}
                      height={100}
                    />
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-black space-y-10 pt-10">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center justify-between">
                        <span className="bg-blue-900 text-white rounded-full font-bold px-2 py-0.5 ">
                          1
                        </span>
                        <h3>
                          Update your <span className="font-bold">Rank</span>
                        </h3>
                      </div>
                      <Input
                        className="w-1/2"
                        placeholder="Rank"
                        defaultValue={scores.rank || 109}
                        onChange={(e) => handleInputChange(e, "rank")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center justify-between">
                        <span className="bg-blue-900 text-white rounded-full font-bold px-2 py-0.5 ">
                          2
                        </span>
                        <h3>
                          Update your{" "}
                          <span className="font-bold">Percentile</span>
                        </h3>
                      </div>
                      <Input
                        className="w-1/2"
                        placeholder="Percentile"
                        defaultValue={scores.percentile || 30}
                        onChange={(e) => handleInputChange(e, "percentile")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center justify-between max-w-52">
                        <span className="bg-blue-900 text-white rounded-full font-bold px-2 py-0.5 ">
                          3
                        </span>
                        <h3>
                          Update your{" "}
                          <span className="font-bold">
                            Current Score (out of 15)
                          </span>
                        </h3>
                      </div>
                      <Input
                        className="w-1/2"
                        placeholder="Score"
                        defaultValue={scores.score || 4}
                        onChange={(e) => handleInputChange(e, "score")}
                      />
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="border-blue-800">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-blue-900"
                    onClick={handleSave}
                  >
                    Save <ArrowRight />
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          {/* Quick Stat */}
          <div className="border rounded-sm p-4">
            <div className="font-bold">Quick Statistics</div>
            <div className="flex justify-between flex-col lg:flex-row my-5 mx-5">
              <div className="flex justify-center xl:flex-row flex-col items-center gap-2">
                <div className="bg-gray-100 rounded-full p-3">
                  <span className="text-xl">🏆</span>
                </div>
                <div className="flex justify-center xl:items-start items-center flex-col">
                  <p className="text-xl font-bold">{scores.rank || 109}</p>
                  <span className="uppercase text-xl lg:text-xs 2xl:text-xl  text-nowrap">
                    Your Rank
                  </span>
                </div>
              </div>

              <hr className="lg:h-20 h-0 my-5 lg:w-0.5 bg-gray-200 border-gray-200" />
              <div className="flex justify-center flex-col xl:flex-row items-center gap-2">
                <div className="bg-gray-100 rounded-full p-3">
                  <span className="text-xl">📝</span>
                </div>
                <div className="flex justify-center items-center xl:items-start flex-col">
                  <p className="text-xl font-bold">
                    {scores.percentile || 30}%
                  </p>
                  <span className="uppercase text-xl lg:text-xs 2xl:text-xl  text-nowrap">
                    Percentile
                  </span>
                </div>
              </div>
              <hr className="lg:h-20 h-0 my-5 lg:w-0.5 bg-gray-200 border-gray-200" />
              <div className="flex justify-center flex-col xl:flex-row items-center gap-2">
                <div className="bg-gray-100 rounded-full p-3">
                  <span className="text-xl">✅</span>
                </div>
                <div className="flex justify-center items-center  xl:items-start flex-col">
                  <p className="text-xl font-bold">{scores.score || 4}/15</p>
                  <span className="uppercase text-xl lg:text-xs 2xl:text-xl  text-nowrap">
                    Correct Answer
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-sm p-4">
            <CustomLineChar />
          </div>
        </div>
        <div className="lg:w-2/5 space-y-5">
          <div className="border rounded-sm p-4">
            <CustomBarChart totalscore={scores.score} />
          </div>
          <div className="border rounded-sm p-4">
            <CustomPieChart totalscore={scores.score || 4} />
          </div>
        </div>
      </div>
    </section>
  );
}
