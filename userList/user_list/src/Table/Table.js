import React, { useMemo } from "react";
import {useTable} from "react-table"
import  { COLUMNS } from "./Columns"
import useAxios from "../useAxios";

export const Table = () => {
    // const {data} = ;
    const data =useMemo( () => { useAxios("https://jsonplaceholder.typicode.com/posts") }, [])
    if(data){
        const columns =useMemo( () => COLUMNS,[])
        useTable({
            columns : COLUMNS,
            data    : data
        })
    }
    return (
        <div className="Table">

        </div>
    );

}
 
export default Table;