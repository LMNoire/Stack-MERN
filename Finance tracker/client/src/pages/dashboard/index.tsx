import { useUser } from "@clerk/clerk-react";
import { useMemo } from "react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordlist } from "./financial-record-list";
import { useFinancialRecords } from "../../contexts/financial-record-context";

export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  /*Total amount for month*/
  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    })
    return totalAmount;
  }, [records])

  return (
    <div className="dashboard-container">
      {/* Display username */}
      <h1>Welcome {user?.firstName}! Here are your Finances :</h1>
      {/* Display record form */}
      <FinancialRecordForm />
      <div>Total Monthly : €{totalMonthly}</div>
      {/* Display records list */}
      <FinancialRecordlist />
    </div>
  );
};
