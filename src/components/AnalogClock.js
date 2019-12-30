import React from "react";

const AnalogClock = () => {
  const date = new Date();
  const topHourPos = 110
  const topMinHourPos = 90
  const leftMinHourPos = 105
  const TRANSFORM_ORIGIN = "0% 0%"
  const POSITION_RELATIVE = "relative"
  const dial = {
    borderColor: "black",
    borderRadius: "50%",
    borderStyle: "solid",
    left: 0,
    height: 200,
    position: POSITION_RELATIVE,
    top: 0,
    width: 200
  };

  const hoursHand = {
    backgroundColor: "blue",
    border: "1px solid blue",
    left: leftMinHourPos - 5,
    height: 10,
    position: POSITION_RELATIVE,
    top: topHourPos,
    transform: `rotate(${(date.getHours() / 12 * 360 - 90).toLocaleString()}deg)`,
    transformOrigin: TRANSFORM_ORIGIN,
    width: "30%"
  };

  const minutesHand = {
    backgroundColor: "red",
    border: "1px solid red",
    left: leftMinHourPos,
    height: 4,
    position: POSITION_RELATIVE,
    top: topMinHourPos + 5,
    transform: `rotate(${(date.getMinutes() / 60 * 360 - 90).toLocaleString()}deg)`,
    transformOrigin: TRANSFORM_ORIGIN,
    width: "39%"
  };

  const secondsHand = {
    backgroundColor: "green",
    border: "1px solid green",
    left: leftMinHourPos,
    height: 1,
    position: "relative",
    top: topMinHourPos,
    transform: `rotate(${(date.getSeconds() / 60 * 360 - 90).toLocaleString()}deg)`,
    transformOrigin: TRANSFORM_ORIGIN,
    width: "45%"
  };

  return (
    <div>
       <div className="_12">  </div>
      <div style={dial}>
        <div style={hoursHand}></div>
        <div style={minutesHand}></div>
        <div style={secondsHand}></div>
      </div>
    </div>
  );
};

export default AnalogClock;
