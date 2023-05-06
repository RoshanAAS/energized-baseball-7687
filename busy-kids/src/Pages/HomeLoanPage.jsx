import React from 'react';
import { Calculator } from '../Components/calculator';
import "./HomeLoanPage.css"
import LoanGif from "../images/loan-gif.gif";
import IntGif from "../images/interest-gif.gif"
import PfeeGif from "../images/processing-fees-gif.gif";

export const HomeLoanPage = () => {
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


  <div className="home-loan-page">
    <div className='home-loan-info'>
      <h1>Home Loan</h1>
      <p>Home loans are used to purchase or construct a house. </p>
        <p> These loans are secured loans that are given against the property </p>
          <p>  that is being purchased.</p>
     
        <p>Loan amount: Up to 80% of the property value</p>
        <p>Interest rate: 6.5% - 9% per annum</p>
        <p>Tenure: Up to 30 years</p>
        <p>Processing fee: 0.25% - 2% of the loan amount</p>
     
    </div>
    <div class="calculator-container-home">
   
   <h2>Home Loan Calculator</h2>
  <Calculator className="calculator" />
 </div>
  </div>
  </>
  );
  
};