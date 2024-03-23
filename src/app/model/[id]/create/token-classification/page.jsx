"use client";
import { useState } from "react";
import { TextField } from "@radix-ui/themes";
const MyForm = () => {
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
    // Do something with the form data, like submitting it to a backend
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField.Input
          placeholder="Field 1"
          name="field1"
          value={formData.field1}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField.Input
          placeholder="Field 2"
          name="field2"
          value={formData.field2}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField.Input
          placeholder="Field 3"
          name="field3"
          value={formData.field3}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField.Input
          placeholder="Field 4"
          name="field4"
          value={formData.field4}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
