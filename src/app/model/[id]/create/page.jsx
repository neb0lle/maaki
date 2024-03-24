"use client";
import "@radix-ui/themes/styles.css";
import { Button, Box, Card, Inset, Strong, Text } from "@radix-ui/themes";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/create.module.css";
import Header from "../../../../../components/header";

const Create = () => {
    const [isExpanded, setIsExpanded] = useState("");
    const [expandedButtons, setExpandedButtons] = useState([]);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    const buttonData = {
        text: [
            { label: "Sentiment Analysis", url: "./create/sa" },
            { label: "Named Entity Recognition Tagging", url: "./create/nert" },
            { label: "Text Classification", url: "./create/tc" },
        ],
        image: [
            {
                label: "Single Label Classification",
                url: "./create/slc",
            },
            {
                label: "Multi Label Classification",
                url: "./create/mlc",
            },
        ],
        audio: [],
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
        <div className={styles.home}>
            <Header />
            <div className={styles.container}>
                <div
                    className={`${styles.indexBox} ${isExpanded ? styles.expanded : ""}`}
                >
                    <div
                        onClick={() => {
                            toggleExpansion("text");
                        }}
                        className={isExpanded == "" ? "" : styles.boxes}
                    >
                        <Box maxWidth="100px">
                            <Card size="1">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src="/sushi3.png"
                                        alt="Bold typography"
                                        style={{
                                            display: 'block',
                                            height: 140,
                                            width: '250px',
                                            backgroundColor: 'var(--gray-5)',
                                        }}
                                    />
                                </Inset>
                                <Text as="p" size="3">
                                    <Strong>Text</Strong><br />
                                    Click to start making your own<br/> text model
                                </Text>
                            </Card>
                        </Box>
                    </div>
                    <Button
                        size="4"
                        variant="soft"
                        onClick={() => {
                            toggleExpansion("text");
                        }}
                        className={isExpanded !="" ? "": styles.notSelected}
                    >
                        Text
                    </Button>
                    <div
                        onClick={() => {
                            toggleExpansion("image");
                        }}
                        className={isExpanded == "" ? "" : styles.boxes}
                    >
                        <Box maxWidth="100px">
                            <Card size="1">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src="/sushi4.png"
                                        alt="Bold typography"
                                        style={{
                                            display: 'block',
                                            height: 140,
                                            width: '250px',
                                            backgroundColor: 'var(--gray-5)',
                                        }}
                                    />
                                </Inset>
                                <Text as="p" size="3">
                                    <Strong>Image</Strong><br />
                                    Click to start making your own<br/> image model
                                </Text>
                            </Card>
                        </Box>
                    </div>
                    <Button
                        size="4"
                        variant="soft"
                        onClick={() => {
                            toggleExpansion("image");
                        }}
                        className={isExpanded !="" ? "": styles.notSelected}
                    >
                       Image 
                    </Button>
                    <div
                        onClick={() => {
                            toggleExpansion("audio");
                        }}
                        className={isExpanded == "" ? "" : styles.boxes}
                    >
                        <Box maxWidth="100px">
                            <Card size="1">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src="/sushi5.png"
                                        alt="Bold typography"
                                        style={{
                                            display: 'block',
                                            height: 140,
                                            width: '250px',
                                            backgroundColor: 'var(--gray-5)',
                                        }}
                                    />
                                </Inset>
                                <Text as="p" size="3">
                                    <Strong>Audio</Strong><br />
                                    Click to start making your own<br/> audio model
                                </Text>
                            </Card>
                        </Box>
                    </div>
                    <Button
                        size="4"
                        variant="soft"
                        onClick={() => {
                            toggleExpansion("audio");
                        }}
                        className={isExpanded !="" ? "": styles.notSelected}
                    >
                      Audio 
                    </Button>
                    <div
                        onClick={() => {
                            toggleExpansion("tabular");
                        }}
                        className={isExpanded == "" ? "" : styles.boxes}
                    >
                        <Box maxWidth="100px">
                            <Card size="1">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src="/sushi6.png"
                                        alt="Bold typography"
                                        style={{
                                            display: 'block',
                                            height: 140,
                                            width: '250px',
                                            backgroundColor: 'var(--gray-5)',
                                        }}
                                    />
                                </Inset>
                                <Text as="p" size="3">
                                    <Strong>Tabular</Strong><br />
                                    Click to start making your own<br/> tabular model
                                </Text>
                            </Card>
                        </Box>
                    </div>
                    <Button
                        size="4"
                        variant="soft"
                        onClick={() => {
                            toggleExpansion("tabular");
                        }}
                        className={isExpanded !="" ? "": styles.notSelected}
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
        </div>
    );
};

export default Create;
