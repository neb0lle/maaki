"use client";
import "@radix-ui/themes/styles.css";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import Link from "next/link";
import styles from "../../../../styles/create.module.css";

const Create = () => {
  const [isExpanded, setIsExpanded] = useState("");
  const [expandedButtons, setExpandedButtons] = useState([]);

  const buttonData = {
    text: [
      { label: "Token Classification", url: "./create/token-classification" },
      { label: "Sentiment Analysis", url: "/sentiment-analysis" },
      { label: "Named Entity Recognition Tagging", url: "/ner-tagging" },
      { label: "Natural Language Understanding", url: "/nlu" },
    ],
    image: [
      {
        label: "Single Label Classification",
        url: "/single-label-classification",
      },
      {
        label: "Multi Label Classification",
        url: "/multi-label-classification",
      },
    ],
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
          {expandedButtons.map((button, index) => (
            <Link key={index} href={button.url}>
              <Button
                size="3"
                variant="soft"
                onClick={() => console.log(`${button.label} clicked`)}
              >
                {button.label}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Create;
