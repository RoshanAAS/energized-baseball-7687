import React from 'react';
import "./CarLoanPage.css";
import LoanGif from "../images/loan-gif.gif";
import IntGif from "../images/interest-gif.gif"
import PfeeGif from "../images/processing-fees-gif.gif";
import { Calculator } from '../Components/calculator';

export const CarLoanPage = () => {
  return (
    <>
    <div className="int-loan">
      <div>
      <p className="heading">What is Loan ..?</p>
    <p>Definition of loan can be described as a property, money, </p>
    <p> or other material goods that is given to another party in </p>
    <p>  exchange for future repayment of the loan value plus interest</p>
    <p> and other finance charges.</p>
      </div>
   <div>
    <img className="image-loan" src={LoanGif} alt="" />
   </div>

</div> 
<br />
<br />
<br />
<br />
<div className="int-info">
  <div>
  <p className="heading">What is Interest ..?</p>
  <p>The interest rate is the amount a lender chargesa borrower </p>
  <p> and is a percentage of the principal—the amount loaned. </p>
  <p>  The interest rate on a loan is typically noted on an annual</p>
  <p>  basis known as the annual percentage rate (APR).</p>
  </div>
  <div>
  <img className="image-interest" src={IntGif} alt="" />
  </div>
 
</div>
<br />
<br />
<br />
<br />
<div className="int-fee">
  <div>
  <p className="heading">Why Processing fee will charge ..?</p>
  <p>Loan processing charges: The bank has to bear some  </p>
    <p> administrative costs while processing and sanctioning </p>
    <p>  your loan. This is usually a small amount,  </p>
    <p> which varies from bank to bank and typically</p>
    <p>costs about 0.5% to 2.50% of the total amount of the loan</p>
  </div>
  <div>
    <img className="image-fees" src={PfeeGif} alt="" />
  </div>
 
</div>


    <div className="car-loan-page">
  <div className="car-loan-info">
    <h1>Car Loan</h1>
    <p>Car loans are used to purchase a new or used car.</p>
    <p>These loans are secured loans that are given against the car that is being purchased.</p>
    <ul>
      <li>Loan amount: Up to 100% of the car value</li>
      <li>Interest rate: 7% - 14% per annum</li>
      <li>Tenure: Up to 7 years</li>
      <li>Processing fee: 0.5% - 2% of the loan amount</li>
    </ul>
  </div>
 
  <div className="calculator-container">
   
    <h2>Car Loan Calculator</h2>
    <Calculator className="calculator" />
  </div>
</div>


</>
  );
};