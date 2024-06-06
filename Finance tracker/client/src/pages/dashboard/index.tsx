import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordlist } from "./financial-record-list";

export const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="dashboard-container">
      {/* Display username */}
      <h1>Welcome {user?.firstName}! Here are your Finances :</h1>
      {/* Display record form */}
      <FinancialRecordForm />
      {/* Display records list */}
      <FinancialRecordlist />
    </div>
  );
};
