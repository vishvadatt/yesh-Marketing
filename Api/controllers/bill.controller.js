const db = require("../index");
const billing = db.collection("Billing");
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require('../query/query');
const { generatePassword } = require("../helpers/commonfile");
const {ObjectId} = require('mongodb');


const createBill = async (req,res,next) => {
    try {
        const reqbody = req.body;
        const result = await query.insert(billing,reqbody);
        if (result.ops.length > 0) {
            const obj = resPattern.successPattern(
            httpStatus.OK,
            result.ops[0],
            `success`
            );
            return res.status(obj.code).json({
            ...obj,
            });
        
        } else {
            const message = `Something went wrong, Please try again.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
    } catch (e) {
        console.log(e);
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const getAllBills = async (req,res,next) => {
    try {
        const {pageNo,limit,searchText} = req.query;
        const Limit = parseInt(limit)
        const PageNo = parseInt(pageNo)

        const result = await query.findByPagination(billing,
            
                {
                    customerName : {
                        $regex: ".*" + searchText + ".*",
                        $options: "i",
                    }
                },
                {},
                PageNo,Limit,{ "createdAt": -1 })
            console.log("result..",result);
            const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const findOneBill = async (req,res,next) => {
    try {
        const id = req.params.id;

        const result = await billing.aggregate([
            {
                $match: {
                    _id : ObjectId(id)
                }
            }, 
            {
                $project: {
                    customerName : 1,
                    BillNo : 1,
                    Date : 1,
                    challan : 1,
                    transactionName : 1,
                    Item : {
                        $map : {
                            input : "$Item",
                            as : "data",
                            in : {
                            srno : "$$data.srno",
                            particulars : "$$data.particulars",
                            mfgName : "$$data.mfgName",
                            batchNo : "$$data.batchNo",
                            expDate : "$$data.expDate",
                            packing : "$$data.packing",
                            qty : "$$data.Qty",
                            rate : "$$data.rate",
                            totalAmount : {$multiply : ["$$data.Qty","$$data.rate"]},
                            ps : "$$data.ps",
                            }
                        }
                    }
                }
            },
            {
                $unwind: {
                    path: "$Item",
                    preserveNullAndEmptyArrays: false
                }
            }, 
            {
                $group: {
                    _id: "$_id",
                        totalSum : {
                        $sum : "$Item.totalAmount"
                    },
                    customerName : {
                        $first : "$customerName"
                    },
                    BillNo : {
                        $first : "$BillNo"
                    },
                    Date : {
                        $first : "$Date"
                    },
                    challan : {
                        $first : "$challan"
                    },
                    transactionName : {
                        $first : "$transactionName"
                    },
                    Item : {
                        $push : "$Item"
                    },
                }
            }
        ]).toArray()
        const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log("e...",e);
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}
module.exports = {
    createBill,
    findOneBill,
    getAllBills
}