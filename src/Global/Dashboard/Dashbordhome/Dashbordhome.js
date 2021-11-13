import { Grid } from "@mui/material";
import * as React from "react";
import MyOrder from "./../../../Pages/MyOrder/MyOrder";

const Dashbordhome = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MyOrder></MyOrder>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashbordhome;
