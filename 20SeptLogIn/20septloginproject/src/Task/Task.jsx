import { TextField, Button, Container } from "@mui/material";
import { useState } from "react";

const Task = () => {
  const [inputVal, setInputVal] = useState("");
  const ansArr = [];
  const calcFactors = (e) => {


    for (let i = 1; i <= inputVal; i++) {
      if (inputVal === 0) {
        return inputVal;
      } else if (inputVal % i === 0) {
        ansArr.push(i);
      }
    }
    console.log(ansArr);
  };

  return (
    <>
      <Container>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <br />
        <Button onClick={(e) => calcFactors(e)}>Click Here</Button>
      </Container>
    </>
  );
};

export default Task;
