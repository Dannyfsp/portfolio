import express from "../assets/express.png";
import golang from "../assets/golang.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import postgres from "../assets/postgres.png";
import rabbitmq from "../assets/rabbitmq.png";
import react from "../assets/react.png";
import redis from "../assets/redis.png";
import ts from "../assets/ts.png";
import Marquee from "react-fast-marquee";

export default function Technologies() {
  return (
    <div>
      <div className="flex justify-center items-center text-xl">
        <h1>My Tech Stack 😎</h1>
      </div>
      <div className="bg-gray-200">
        <Marquee pauseOnHover={true}>
          <div>
            <img src={nodejs} alt="nodejs" className="w-[150px] h-[75px]" />
          </div>
          <div>
            <img src={express} alt="express" className="w-[150px] h-[75px]" />
          </div>
          <div>
            <img src={golang} alt="golang" className="w-[150px] h-[75px]" />
          </div>
          <div>
            <img src={ts} alt="ts" className="w-[150px] h-[75px]" />
          </div>
          <div>
            <img src={postgres} alt="postgres" className="w-[150px] h-[75px]" />
          </div>
          <div>
            <img src={mysql} alt="mysql" className="w-[150px] h-[75px]" />
          </div>
          <div>
            <img src={mongodb} alt="mongodb" className="w-[150px] h-[75px]" />
          </div>
          <div className="mx-4">
            <img src={redis} alt="redis" className="w-[150px] h-[75px]" />
          </div>
          <div>
            <img src={rabbitmq} alt="rabbitmq" className="w-[150px] h-[75px]" />
          </div>
          <div>
            <img src={react} alt="react" className="w-[150px] h-[75px]" />
          </div>
          <div className="mx-4">
            <img src={nextjs} alt="nextjs" className="w-[150px] h-[75px]" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
