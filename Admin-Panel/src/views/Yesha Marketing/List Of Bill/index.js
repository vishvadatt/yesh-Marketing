import React, { useEffect, useState } from 'react'
import "./Style.css"
import { Grid } from '@mui/material'
import axios from "axios";
import { Link, } from 'react-router-dom';

const Index = () => {

    
     const [listOfBills,setOfBills] = useState([]);
    // const [totalCount,setTotalCount] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8001/api/Billing/Bills?searchText=&limit=10&pageNo=1`)
        .then((response) =>{
            setOfBills(response.data?.data?.list)
            // setTotalCount(response.data?.data?.totalCount)
        })
        .catch((e) => {
            console.log("e..",e);
        })
    },[]);
  return (
    <Grid container>
        <Grid item lg={12} xs={12} sm={12}>
        <div className='ourcustomer'>
            <h3>Our Customer</h3>
        </div>
        <div className='searchItem'>
            <input type="text" placeholder='Search Bill here...' className='createSearchInput createSearch'/>
        </div>
        <table style={{overflowX : "auto"}}>
            <thead>
                <tr>
                    <th>CustomerName</th>
                    <th>Bill No</th>
                    <th>Date</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
              {
                listOfBills.map((data,index) => {
                    return(
                        <tr key={index}>
                            <td>{data.customerName}</td>
                            <td>{data.BillNo}</td>
                            <td>{data.Date}</td>
                            <td>Edit</td>
                            <td>
                                <Link to={`/Bill?ID=${data._id}`}>View</Link>
                            </td>
                        </tr>
                    )
                })
              }
            </tbody>
        </table>
        </Grid>
    </Grid>
  )
}

export default Index