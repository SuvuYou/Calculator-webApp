import React, { useState } from "react";
import GridBtn from "./gridBtn";

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [firstDecimal, setFirstDecimal] = useState(false);
  const [secondNumber, setsecondNumber] = useState("");
  const [secondDecimal, setSecondDecimal] = useState(false);
  const [operation, setoperation] = useState("");

  function handleClick(e) {
    const symbol = e.target.closest("div").getAttribute("name");
    const classlist = e.target.closest("div").classList;
    const type = classlist[classlist.length - 1];

    function pickFirstNum(num) {
      setFirstNumber((prev) => {
        return +prev.concat(num) + "";
      });
    }

    function pickSecondNum(num) {
      setsecondNumber((prev) => {
        return +prev.concat(num) + "";
      });
    }

    function pickoperation(operation) {
      setoperation(operation);
    }

    function calc() {
      const fn = +firstNumber;
      const sn = +secondNumber;

      let resoult = fn + sn;
      if (operation === "-") resoult = fn - sn;
      else if (operation === "x") resoult = fn * sn;
      else if (operation === "/") resoult = fn / sn;

      //if resoult is decimal setFirstDecimal to true
      setFirstDecimal(() => !Number.isInteger(resoult));
      setSecondDecimal(false);
      setFirstNumber(resoult + "");
      setsecondNumber("");
      setoperation("");
    }

    function reset() {
      setFirstNumber("0");
      setsecondNumber("");
      setoperation("");
    }

    function del() {
      if (secondNumber === "") {
        if (operation === "") {
          setFirstNumber((prev) => {
            const newNum = prev.length > 1 ? prev.slice(0, -1) : "0";
            return newNum;
          });
        } ///////////////////////////
        else {
          setoperation("");
        }
      } /////////////////////
      else {
        setsecondNumber((prev) => {
          const newNum = prev.length > 1 ? prev.slice(0, -1) : "";
          return newNum;
        });
      }
    }

    function decimal() {
      if (secondNumber !== "" && !secondDecimal) {
        setsecondNumber((prev) => prev + ".");
        setSecondDecimal(true);
      } /////////////////
      else if (secondNumber === "" && !firstDecimal && operation === "") {
        setFirstNumber((prev) => prev + ".");
        setFirstDecimal(true);
      } /////////////////
      else if (operation !== "") {
        setoperation("");
        if (!firstDecimal) {
          setFirstNumber((prev) => prev + ".");
          setFirstDecimal(true);
        }
      }
    }

    switch (type) {
      case "num":
        if (operation === "") {
          pickFirstNum(symbol);
        } else {
          pickSecondNum(symbol);
        }
        break;

      case "operation":
        if (secondNumber !== "") calc();

        pickoperation(symbol);

        break;

      case "calc":
        calc();
        break;

      case "reset":
        reset();
        break;

      case "del":
        del();
        break;

      case "decimal":
        decimal();
        break;
    }
  }

  return (
    <div className="calculator">
      <div className="monitor">
        <h1>
          {firstNumber} {operation} {secondNumber}
        </h1>
      </div>
      <div className="buttons">
        <GridBtn
          placeHolder="9"
          class="grid-btn num"
          name="9"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="8"
          class="grid-btn num"
          name="8"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="7"
          class="grid-btn num"
          name="7"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="DEL"
          class="gray-key grid-btn del"
          name="DEL"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="6"
          class="grid-btn num"
          name="6"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="5"
          class="grid-btn num"
          name="5"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="4 "
          class="grid-btn num"
          name="4"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="+"
          class="grid-btn operation"
          name="+"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="3"
          class="grid-btn num"
          name="3"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="2"
          class="grid-btn num"
          name="2"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="1"
          class="grid-btn num"
          name="1"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="-"
          class="grid-btn operation"
          name="-"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="."
          class="grid-btn decimal"
          name="."
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="0"
          class="grid-btn num"
          name="0"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="/"
          class="grid-btn operation"
          name="/"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="x"
          class="grid-btn operation"
          name="x"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="RESET"
          class="grid-btn gray-key last-row-first reset"
          name="RESET"
          onClick={handleClick}
        />
        <GridBtn
          placeHolder="="
          class="red-key grid-btn last-row-last calc"
          name="="
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
