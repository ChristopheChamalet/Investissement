export default function UserBoard({ onChangeInput, inputnb }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">
            Initial Investissment
            <input
              type="number"
              required
              value={inputnb.initialInvestissement}
              onChange={(e) =>
                onChangeInput("initialInvestissement", e.target.value)
              }
            />
          </label>
        </p>
        <p>
          <label htmlFor="annual">
            Annual Investissment
            <input
              type="number"
              required
              value={inputnb.annualInvestissement}
              onChange={(e) =>
                onChangeInput("annualInvestissement", e.target.value)
              }
            />
          </label>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected">
            Expected result
            <input
              type="number"
              required
              value={inputnb.expectedResults}
              onChange={(e) => onChangeInput("expectedResults", e.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="duration">
            Duration
            <input
              type="number"
              required
              value={inputnb.duration}
              onChange={(e) => onChangeInput("duration", e.target.value)}
            />
          </label>
        </p>
      </div>
    </section>
  );
}
