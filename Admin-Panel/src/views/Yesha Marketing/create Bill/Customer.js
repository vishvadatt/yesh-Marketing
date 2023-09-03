import { Grid } from "@mui/material";
import React from "react";
import "./Style.css";
const Customer = ({ formik }) => {
  return (
    <>
      <Grid item lg={12} xs={12} sm={12} className="flexContainer">
        <label htmlFor="Customer Name">Customer Name</label>
        <input
          type="text"
          placeholder="Enter Customer Name"
          className="CreateInput createName"
          onChange={(e) => {
            formik.setFieldValue(`customerName`, e?.target.value);
          }}
          name={`customerName`}
        />
      </Grid>
      <Grid container>
        <Grid item lg={4} xs={12} sm={4} className="flexContainer">
            <label htmlFor="BillNo">BillNo</label>
          <input
            type="text"
            placeholder="Enter Bill No."
            className="CreateInput createBillNo"
            onChange={(e) => {
                formik.setFieldValue(`BillNo`, e?.target.value);
            }}
            name={`BillNo`}
          />
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className="flexContainer">
            <label htmlFor="Date">Date</label>
          <input
            type="date"
            placeholder="Enter Dt."
            className="CreateInput createDt1"
            onChange={(e) => {
                formik.setFieldValue(`date`, e?.target.value);
            }}
            name={`date`}
          />
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className="flexContainer">
            <label htmlFor="challan">challan</label>
          <input
            type="text"
            placeholder="Enter Challan"
            className="CreateInput createChalan"
            onChange={(e) => {
                formik.setFieldValue(`challan`, e?.target.value);
            }}
            name={`challan`}
          />
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className="flexContainer">
        <label htmlFor="Date">Date</label>
          <input
            type="date"
            placeholder="Enter Dt."
            className="CreateInput createDt2"
            onChange={(e) => {
                formik.setFieldValue(`date1`, e?.target.value);
            }}
            name={`date1`}
          />
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className="flexContainer">
        <label htmlFor="Transaction Name">Transaction Name</label>
          <input
            type="text"
            placeholder="Enter Trans. Name"
            className="CreateInput createTrans"
            onChange={(e) => {
                formik.setFieldValue(`transactionName`, e?.target.value);
            }}
            name={`transactionName`}
          />
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className="flexContainer">
        <label htmlFor="Date">Date</label>
          <input
            type="date"
            placeholder="Enter Dt."
            className="CreateInput createDt3"
            onChange={(e) => {
                formik.setFieldValue(`date2`, e?.target.value);
            }}
            name={`date2`}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Customer;
