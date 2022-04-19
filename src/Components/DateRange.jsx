import {React,useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const DateRange = () => {
 
        const [startDate, setStartDate] = useState(new Date("2022/02/08"));
        const [endDate, setEndDate] = useState(new Date("2022/02/10"));
        return (
          <>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
             // showDisabledMonthNavigation
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
            
          </>
        
  )
}
