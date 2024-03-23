"use client";
import "@radix-ui/themes/styles.css";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import styles from "../../../../styles/create.module.css";

const Create = () => {
  const [isExpanded, setIsExpanded] = useState("");
  const [expandedButtons, setExpandedButtons] = useState([]);

  const buttonData = {
    text: [
      "Token Classification",
      "Sentiment Analysis",
      "Named Entity Recognition Tagging",
      "Natural Language Understanding",
    ],
    image: ["Single Label Classification", "Multi Label Classification"],
    tabular: [],
    video: [],
    audio: [],
  };

  const toggleExpansion = (type) => {
    if (isExpanded == type) setIsExpanded("");
    else setIsExpanded(type);
    setExpandedButtons(buttonData[type]);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.indexBox} ${isExpanded ? styles.expanded : ""}`}
      >
        <Button size="3" variant="soft" onClick={() => toggleExpansion("text")}>
          Text
        </Button>
        <Button
          size="3"
          variant="soft"
          onClick={() => toggleExpansion("image")}
        >
          Image
        </Button>
        <Button
          size="3"
          variant="soft"
          onClick={() => toggleExpansion("audio")}
        >
          Audio
        </Button>
        <Button
          size="3"
          variant="soft"
          onClick={() => toggleExpansion("video")}
        >
          Video
        </Button>
        <Button
          size="3"
          variant="soft"
          onClick={() => toggleExpansion("tabular")}
        >
          Tabular
        </Button>
      </div>
      {isExpanded && (
        <div className={styles.overlay}>
          {expandedButtons.map((buttonLabel, index) => (
            <Button
              key={index}
              size="3"
              variant="soft"
              onClick={() => console.log(`${buttonLabel} clicked`)}
            >
              {buttonLabel}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Create;