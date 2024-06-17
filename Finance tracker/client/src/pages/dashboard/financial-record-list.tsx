import { useFinancialRecords } from "../../contexts/financial-record-context"

//List to see your records
export const FinancialRecordlist = () => {

    const { records } = useFinancialRecords();
    
    return <div>Record List</div>
}