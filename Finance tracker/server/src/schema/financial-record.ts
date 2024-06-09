import mongoose from "mongoose";

//Financial record interface
interface FinancialRecord {
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

//Financial record schema
const financialRecordSchema = new mongoose.Schema<FinancialRecord>({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

//Link with mongoDb database
const FinancialRecordModel = mongoose.model<FinancialRecord>(
  "financialrecords",
  financialRecordSchema
);

export default FinancialRecordModel;
