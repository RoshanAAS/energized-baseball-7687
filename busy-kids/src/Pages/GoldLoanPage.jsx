import React from 'react';
import { Calculator } from '../Components/calculator';
import "./GoldLoanPage.css";
import LoanGif from "../images/loan-gif.gif";
import IntGif from "../images/interest-gif.gif"
import PfeeGif from "../images/processing-fees-gif.gif";

export const GoldLoanPage = () => {
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


    <div className='gold-loan-page'>
    <div className='gold-loan-info'>
      <h1>Gold Loan</h1>
      <p>Gold loans are a popular type of secured loan in India</p>
      <p>  that are given against gold as collateral. </p>
      <p> These loans are generally taken by people who need</p>
      <p>  quick cash for personal or business reasons.</p>
      <ul>
        <li>Loan amount: Up to 75% of the value of gold</li>
        <li>Interest rate: 7% - 29% per annum</li>
        <li>Tenure: Up to 24 months</li>
        <li>Processing fee: 0.5% - 2% of the loan amount</li>
      </ul>
    </div>
    <div className="calculator-container-gold">
   
   <h2>Gold Loan Calculator</h2>
  <Calculator className="calculator" />
 </div>
    </div >
    </>
  );
};