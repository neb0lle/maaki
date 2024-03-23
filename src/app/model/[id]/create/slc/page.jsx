"use client";
import { useState } from "react";
import { TextField, Button } from "@radix-ui/themes";
import styles from "../../../../../styles/form.module.css";
const Slc = () => {
    const [formData, setFormData] = useState({
        field1: "",
        field2: "",
        field3: "",
        field4: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputWrapper}>
                    <TextField.Input
                        placeholder="Field 1"
                        name="field1"
                        value={formData.field1}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <TextField.Input
                        placeholder="Field 2"
                        name="field2"
                        value={formData.field2}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <TextField.Input
                        placeholder="Field 3"
                        name="field3"
                        value={formData.field3}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <TextField.Input
                        placeholder="Field 4"
                        name="field4"
                        value={formData.field4}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <Button color="indigo" variant="soft">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Slc;

