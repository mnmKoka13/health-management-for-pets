'use client'

import { useState } from "react";
import ReactDatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css";
import "../styles/datePickerStyle.css";

export default function DatePicker() {
  
  const [startDate, setStartDate] = useState(new Date());

  const onHandleDateChange = (date: any) => {
    setStartDate(date);
  };
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={onHandleDateChange}
      dateFormat='yyyy/MM/dd'
    />
  );
}
