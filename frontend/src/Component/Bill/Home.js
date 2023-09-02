import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Style.css"
import CustomerInfo from "./CustomerInfo/index"
import Table from "./Table/index"
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Home = () => {
  const {id} = useParams()
  const [billDetail,setBillDetails] = useState([])
  useEffect(() => {
    if(id !== undefined){
      axios.get(`http://localhost:8001/api/Billing/findOne-Bill/${id}`)
      .then((response) => {
        console.log("re....",response.data.data[0]);
        setBillDetails(response.data.data[0])
      })
      .catch((e) => {
        console.log(e);
      })
    }
  },[id])
  return (
    <Grid container className='mainContainer'>
      <Grid item className='mobileContainer'>
        <span className='mobileNo'>Mo. 94268 82731</span>
      </Grid>
      <Grid item className='headingContainer'>
          <h1 className='headingName'>YESHA MARKETING</h1>
      </Grid>
      <Grid item className='paragraphContainer'>
        <span className='paragraph'>Pharmaceutical Distributors,All kind of Medicines & Surgical Goods.</span>
      </Grid>
      <Grid item className='addressContainer'>
        <h3 className='address'>Opp. Police Station, Jhagadia, Dist, Bharuch.<br />GST.NO. 24DBJPP9684L1ZP</h3>
      </Grid>
     <CustomerInfo billDetail={billDetail}/>
     <Table billDetail={billDetail}/>
     <Grid item className='termAndConditionContainer'>
      <div className='termAndCondition'>
        <h3>TERMS :-</h3>
        <h3>For, YESHA MARKETING</h3>
      </div>
      <ul className='listTerms'>
        <li>Delayed Payment Would attact interest.</li>
        <li>Subject to JHAGADIA Jurisdiction.</li>
        <li>Once Goods Sold Will not taken back.</li>
        <li>Payment to be made with in___days by demand draft or cash only.</li>
        <li>No. discont will be allowed after this ___ stipulated period.</li>
      </ul>
     </Grid>
    </Grid>
  )
}
