"use client";
import "@/styles/stars.sass";
import "@radix-ui/themes/styles.css";
import styles from "@/styles/index.module.css";
import {
  Button,
  Text,
  HoverCard,
  Box,
    Card,
    Inset,
    Strong,
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
      <Link className={styles.link} href={`/model/${id}/create`}>
      <Box maxWidth="10px">
  <Card size="1">
    <Inset clip="padding-box" side="top" pb="current">
      <img
        src="/sushi1.png"
        alt="Bold typography"
        style={{
          display: 'block',
          height: 140,
            width:'250px',
          backgroundColor: 'var(--gray-5)',
        }}
      />
    </Inset>
    <Text as="p" size="3">
      <Strong>Create Model</Strong><br/> 
      Make your own Model using<br/>
      Our 0 experience algorithim 
    </Text>
  </Card>
</Box>
      </Link>
      <Box maxWidth="100px">
  <Card size="1">
    <Inset clip="padding-box" side="top" pb="current">
      <img
        src="/sushi2.png"
        alt="Bold typography"
        style={{
          display: 'block',
          height: 140,
            width:'250px',
          backgroundColor: 'var(--gray-5)',
        }}
      />
    </Inset>
    <Text as="p" size="3">
      <Strong>Use Model</Strong><br/> 
      Run your models under test<br/>
     cases 
    </Text>
  </Card>
</Box>
        </div>
      </div>
    </div>
  );
};
export default App;
