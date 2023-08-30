import React, { useState } from "react";
// import "./Style.css"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import BillItem from "./BillItem";
import Customer from "./Customer";
import { FieldArray, Formik } from "formik";
const Index = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container className="mainBillContainer">
      <Grid item lg={12} xs={12} sm={12} className="createNewBill">Create New Bill</Grid>
      {/* <Grid container> */}
              <Formik
                initialValues={{
                  customerName: "",
                  BillNo: "",
                  date: "",
                  challan: "",
                  date1: "",
                  transactionName: "",
                  date2: "",
                  Item: [
                    {
                      srno: "",
                      particulars: "",
                      mfgName: "",
                      batchNo: "",
                      date: "",
                      packing: "",
                      qty: "",
                      rate: "",
                      amount: "",
                      ps: "",
                    },
                  ],
                }}
                
                onSubmit={(values) =>{
                  // call api here
                  console.log("Call Api..",values);
                }}
              >
                {(formik) => {
                  return (
                    <>
                      <Customer formik={formik} />
                      <FieldArray
                        name="Item"
                        render={(arrayhelper) => {
                          return (
                            <>
                              {formik.values?.Item?.map((data, index) => {
                                return (
                                  <Grid key={index} container>
                                    {index > 0 && (
                                      <>
                                        <Grid item lg={12}>
                                          <Button
                                            onClick={() =>
                                              arrayhelper.remove(index)
                                            }
                                          >
                                            Remove Particulars
                                          </Button>
                                        </Grid>
                                      </>
                                    )}
                                    <br />
                                    <Grid item lg={12}>
                                      {/* <BillItem formik={formik} arrayhelper={arrayhelper} index={index} data={data}/> */}
                                     

                                      <Grid
                                        container
                                        spacing={1}
                                        className="billListContain"
                                      >
                                        <Grid
                                          item
                                          lg={2}
                                          xs={12}
                                          sm={12}
                                          className="flexContainer"
                                        >
                                          
                                          <input
                                            type="number"
                                            min={0}
                                            placeholder="Enter Sr.No"
                                            className="CreateInput createSrno"
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `Item[${index}].srno`,
                                                e?.target.value
                                              );
                                            }}
                                            name={`Item[${index}].srno`}
                                          />
                                        </Grid>
                                        <Grid item lg={7} xs={12} sm={12}>
                                          <input
                                            type="text"
                                            placeholder="Enter Particulars"
                                            className="CreateInput createParticular"
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `Item[${index}].particulars`,
                                                e?.target.value
                                              );
                                            }}
                                            name={`Item[${index}].particulars`}
                                          />
                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={12}>
                                          <input
                                            type="text"
                                            placeholder="Enter MFG Name"
                                            className="CreateInput createMfg"
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `Item[${index}].mfgName`,
                                                e?.target.value
                                              );
                                            }}
                                            name={`Item[${index}].mfgName`}
                                          />
                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={12}>
                                          <input
                                            type="text"
                                            placeholder="Enter Batch No."
                                            className="CreateInput createBatchNo"
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `Item[${index}].batchNo`,
                                                e?.target.value
                                              );
                                            }}
                                            name={`Item[${index}].batchNo`}
                                          />
                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={12}>
                                          <input
                                            type="date"
                                            placeholder="Enter Exp Date."
                                            className="CreateInput createExpDate"
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `Item[${index}].date`,
                                                e?.target.value
                                              );
                                            }}
                                            name={`Item[${index}].date`}
                                          />
                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={12}>
                                          <input
                                            type="text"
                                            placeholder="Enter Packing."
                                            className="CreateInput createPacking"
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `Item[${index}].packing`,
                                                e?.target.value
                                              );
                                            }}
                                            name={`Item[${index}].packing`}
                                          />
                                        </Grid>

                                        <Grid item lg={3} xs={12} sm={12}>
                                          <input
                                            type="number"
                                            min={0}
                                            placeholder="Enter Qty."
                                            className="CreateInput createQty"
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `Item[${index}].qty`,
                                                e?.target.value
                                              );
                                            }}
                                            name={`Item[${index}].qty`}
                                          />
                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={12}>
                                          <input
                                            type="text"
                                            placeholder="Enter Rate."
                                            className="CreateInput createRate"
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `Item[${index}].rate`,
                                                e?.target.value
                                              );
                                            }}
                                            name={`Item[${index}].rate`}
                                          />
                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={12}>
                                          <input
                                            type="number"
                                            min={0}
                                            placeholder="Enter Amount."
                                            className="CreateInput createAmount"
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `Item[${index}].amount`,
                                                e?.target.value
                                              );
                                            }}
                                            name={`Item[${index}].amount`}
                                          />
                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={12}>
                                          <input
                                            type="text"
                                            placeholder="Enter Ps."
                                            className="CreateInput createPs"
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `Item[${index}].ps`,
                                                e?.target.value
                                              );
                                            }}
                                            name={`Item[${index}].ps`}
                                          />
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    <br />
                                  </Grid>
                                );
                              })}
                              <Grid item lg={12}>
                                <Button
                                  onClick={() => {
                                    arrayhelper.insert(
                                      formik.values.Item.length + 1,
                                      {
                                        srno: "",
                                        particulars: "",
                                        mfgName: "",
                                        batchNo: "",
                                        date: "",
                                        packing: "",
                                        qty: "",
                                        rate: "",
                                        amount: "",
                                        ps: "",
                                      }
                                    );
                                  }}
                                >
                                  Add New Particulars
                                </Button>
                              </Grid>
                             
                            </>
                          );
                        }}
                      />
                       <Button type="submit" variant="contained" fullWidth>Submit Data</Button>
                    </>
                  );
                 
                }}
              </Formik>
            {/* </Grid> */}
      {/* <Dialog
        fullWidth
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Create New Bill"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button type="submit" variant="gradient" onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}
    </Grid>
  );
};

export default Index;
