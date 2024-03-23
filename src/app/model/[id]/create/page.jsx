"use client";
import "@radix-ui/themes/styles.css";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/create.module.css";

const Create = () => {
  const [isExpanded, setIsExpanded] = useState("");
  const [expandedButtons, setExpandedButtons] = useState([]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const buttonData = {
    text: [
      { label: "Sentiment Analysis", url: "./create/sa" },
      { label: "Named Entity Recognition Tagging", url: "./create/NERT" },
      { label: "Natural Language Understanding", url: "./create/NLU" },
    ],
    image: [
      {
        label: "Single Label Classification",
        url: "./create/slc",
      },
      {
        label: "Multi Label Classification",
        url: "./create/MLC",
      },
    ],
    audio: [],
    video: [],
    tabular: [],
  };

  const toggleExpansion = (type) => {
    if (isExpanded === type) {
      setIsExpanded("");
      setSelectedButtonIndex(null);
    } else {
      setIsExpanded(type);
      setExpandedButtons(buttonData[type]);
    }
  };
  const handleButtonClick = (type) => {
    if (selectedButtonIndex === type) {
      setSelectedButtonIndex(null);
    } else {
      setSelectedButtonIndex(type);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={`${styles.indexBox} ${isExpanded ? styles.expanded : ""}`}
      >
        <Button
          size="4"
          variant="soft"
          onClick={() => {
            toggleExpansion("text");
          }}
          className={isExpanded === "text" ? styles.selected : ""}
        >
          Text
        </Button>
        <Button
          size="4"
          variant="soft"
          onClick={() => {
            toggleExpansion("image");
          }}
          className={isExpanded === "image" ? styles.selected : ""}
        >
          Image
        </Button>
        <Button
          size="4"
          variant="soft"
          onClick={() => {
            toggleExpansion("audio");
          }}
          className={isExpanded === "audio" ? styles.selected : ""}
        >
          Audio
        </Button>
        <Button
          size="4"
          variant="soft"
          onClick={() => {
            toggleExpansion("video");
          }}
          className={isExpanded === "video" ? styles.selected : ""}
        >
          Video
        </Button>
        <Button
          size="4"
          variant="soft"
          onClick={() => {
            toggleExpansion("tabular");
          }}
          className={isExpanded === "tabular" ? styles.selected : ""}
        >
          Tabular
        </Button>
      </div>
      {isExpanded && (
        <div className={styles.overlay}>
          {expandedButtons.map((button, index) => (
            <Link key={index} href={button.url}>
              <Button
                size="4"
                variant="soft"
                onClick={() => handleButtonClick(button.label)}
                className={
                  selectedButtonIndex === button.label ? styles.selected : ""
                }
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
