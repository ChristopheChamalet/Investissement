import logo_project from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <header>
        <img src={logo_project} alt="img" />
        <h1>React Investment Calculator</h1>
      </header>
    </div>
  );
}
