import React from "react";
import "./Style.css";
import { Button, Grid } from "@mui/material";
import { Field, FieldArray } from "formik";

const BillItem = ({ formik,arrayhelper,index,data }) => {
  const { values } = formik;
  console.log("for,,", index);
  return (
    <>
      <h3>List Item</h3>
      <Grid container spacing={1} className="billListContain">
      <Grid item lg={4} xs={12} sm={12} className="flexContainer">
        <input
        type="number"
        min={0}
        placeholder="Enter Sr.No"
        className="CreateInput createSrno"
        onChange={(e) => {
            console.log("e..",e.target.value);
            formik.setFieldValue(`Item[${index}].srno`,e?.target.value);
        }}
        />
    </Grid>
        <Grid item lg={8} xs={12} sm={12}>
          <input
            type="text"
            placeholder="Enter Particulars"
            className="CreateInput createParticular"
          />
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <input
            type="text"
            placeholder="Enter MFG Name"
            className="CreateInput createMfg"
          />
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <input
            type="text"
            placeholder="Enter Batch No."
            className="CreateInput createBatchNo"
          />
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <input
            type="date"
            placeholder="Enter Exp Date."
            className="CreateInput createExpDate"
          />
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <input
            type="text"
            placeholder="Enter Packing."
            className="CreateInput createPacking"
          />
        </Grid>

        <Grid item lg={3} xs={12} sm={12}>
          <input
            type="number"
            min={0}
            placeholder="Enter Qty."
            className="CreateInput createQty"
          />
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <input
            type="text"
            placeholder="Enter Rate."
            className="CreateInput createRate"
          />
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <input
            type="number"
            min={0}
            placeholder="Enter Amount."
            className="CreateInput createAmount"
          />
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <input
            type="text"
            placeholder="Enter Ps."
            className="CreateInput createPs"
          />
        </Grid>
      </Grid>
      <Grid item lg={12} xs={12} sm={12} pt={1}>
        <Button variant="contained" fullWidth>
          Submit
        </Button>
      </Grid>
    </>
  );
};

export default BillItem;
