export const FinancialRecordForm = () => {

    return <div className="form-container">
        <form>
            <div className="form-field">
                <label>Description :</label>
                <input type="text" required className="input" />
            </div>
            <div className="form-field">
                <label>Amount :</label>
                <input type="number" required className="input" />
            </div>
            <div className="form-field">
                <label>Category :</label>
                <select required className="input">
                    <option value=""></option>
                    <option value="Food"></option>
                    <option value="Rent"></option>
                    <option value="Salary"></option>
                    <option value="Utilities"></option>
                    <option value="Entertainment"></option>
                    <option value="Other"></option>
                </select>
            </div>
            <div className="form-field">
                <label>Payment Method :</label>
                <select required className="input">
                    <option value=""></option>
                    <option value="Credit Card"></option>
                    <option value="Cash"></option>
                    <option value="Bank Transfer"></option>
                </select>
            </div>
            <button type="submit" className="button">
                Add Record
            </button>
        </form>
    </div>
}