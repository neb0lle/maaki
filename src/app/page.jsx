"use client";
import "@/styles/stars.sass";
import "@radix-ui/themes/styles.css";
import styles from "@/styles/index.module.css";
import {
  Button,
  Text,
  HoverCard,
  Avatar,
  Flex,
  Box,
  Heading,
} from "@radix-ui/themes";
import Link from "next/link";
import Header from "../../components/header";
const id = "abcd";
const App = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.indexBox}>
        <div className={styles.homeBox}>
          <Text>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Button size="4" variant="soft">
                  <Link className={styles.link} href={`/model/${id}/create`}>
                    Create Model
                  </Link>
                </Button>
              </HoverCard.Trigger>
              <HoverCard.Content>
                <Text size="2" style={{ maxWidth: 300 }} mt="3">
                  Create your own model using our cwazy Ml
                </Text>
              </HoverCard.Content>
            </HoverCard.Root>
          </Text>
          <Button size="4" variant="soft">
            Use Model
          </Button>
        </div>
      </div>
    </div>
  );
};
export default App;
