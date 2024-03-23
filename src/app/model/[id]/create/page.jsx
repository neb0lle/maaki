"use client";
import "@radix-ui/themes/styles.css";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import styles from "../../../../styles/create.module.css";

const Create = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedButtons, setExpandedButtons] = useState([]);

  const buttonData = {
    text: ["Text 1", "Text 2", "Text 3", "Text 4"],
    audio: ["Audio 1", "Audio 2", "Audio 3", "Audio 4"],
    image: ["Image 1", "Image 2", "Image 3", "Image 4"],
    video: ["Video 1", "Video 2", "Video 3", "Video 4"],
  };

  const toggleExpansion = (type) => {
    setIsExpanded(!isExpanded);
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
          onClick={() => toggleExpansion("audio")}
        >
          Audio
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
          onClick={() => toggleExpansion("video")}
        >
          Video
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
