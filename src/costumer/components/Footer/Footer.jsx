import { Button, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        containersx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1 className=" text-4xl font-bold">BuildZilla</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button className="pb-5" variant="h6" gutterBottom>
            {" "}
            About
          </Button>
          <Button className="pb-5" variant="h6" gutterBottom>
            {" "}
            Blog
          </Button>
          <Button className="pb-5" variant="h6" gutterBottom>
            {" "}
            Contact
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <p>All right reserved @2024 buildzilla</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
