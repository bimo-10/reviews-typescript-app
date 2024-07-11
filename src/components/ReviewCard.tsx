"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import reviews from "@/lib/data";
import Image from "next/image";

export default function ReviewCard() {
  const [index, setIndex] = useState(0);

  const people = reviews[index];

  const handleNext = () => {
    setIndex((index: number) => {
      const newValue = (index + 1) % reviews.length;
      return newValue;
    });
  };

  const handlePrevious = () => {
    setIndex((index: number) => {
      const newValue = (index - 1 + reviews.length) % reviews.length;
      return newValue;
    });
  };

  const handleRandom = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }

    const newIndex = randomIndex % reviews.length;

    setIndex(newIndex);
  };

  return (
    <>
      <Card className="w-96 text-center">
        <CardHeader className="relative">
          <Image
            src={people.image}
            alt={people.name}
            width={200}
            height={200}
            className="rounded-full h-44 w-44 mx-auto"
          />
        </CardHeader>
        <CardContent>
          <div className="space-y-1 mb-4">
            <CardTitle>{people.name}</CardTitle>
            <CardDescription className="text-blue-500">
              {people.job}
            </CardDescription>
          </div>
          <CardDescription>{people.text}</CardDescription>
          <div className="flex justify-center my-8 gap-8">
            <Button onClick={handlePrevious} variant="outline">
              {"<"}
            </Button>
            <Button onClick={handleNext} variant="outline">
              {">"}
            </Button>
          </div>
          <Button onClick={handleRandom} className="bg-blue-500">
            Suprise Me
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
