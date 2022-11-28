import React from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";


function Sendbutton() {
  return (
    <div>
      <Button style={{backgroundColor: "#2699c7"}} type="submit" variant="contained" endIcon={<SendIcon style={{marginTop: 0}}/>}>
        Send
      </Button>
    </div>
  );
}


export default Sendbutton;
