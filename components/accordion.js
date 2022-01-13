import React, { useState, useRef } from "react";
import Chevron from "../assets/Icons/chevron";

// import "./Accordion.css";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Accordion = ({ title, children }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotation, setRotation] = useState("accordion__icon");


  // const contentChildren = useRef();
  const content = useRef();
  const sensitive = useRef();

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`,
      // contentChildren === "active" ? "0px" : `${contentChildren.current.scrollHeight}px`
    );
    setRotation(
      active === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  useOnClickOutside(sensitive, () => {
    setActive("");
    setHeight("0px");
    setRotation("accordion__icon");
  });

  return (
    <div className="accordion__section" ref={sensitive}>
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <Chevron width={6} fill={"#777"} className={`${rotation}`} />
        <div className="accordion__title">{title}</div>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content">
        <div className="accordion__text" style={{ maxHeight: `${height}` }}>
        {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
