import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const data = calculateInvestmentResults(input);
  console.log(data);
  const init =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest Year</th>
            <th> Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ydata) => {
            const totalInterest =
              ydata.valueEndOfYear - ydata.annualInvestment * ydata.year - init;
            const AmountTotalInvest = ydata.valueEndOfYear - totalInterest;
            return (
              <tr key={ydata.year}>
                <td>{ydata.year}</td>
                <td>{formatter.format(ydata.valueEndOfYear)}</td>
                <td>{formatter.format(ydata.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(AmountTotalInvest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
