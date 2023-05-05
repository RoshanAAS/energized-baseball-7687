import React from "react";
import styled from "styled-components";
import style from "styled-components";
const Pricing = () => {
  return (
    <DIV>
      <div className="Banner">
        <h2 className="Mainhead">bankaroo for schools – pricing update</h2>
      </div>
      <div className="para">
        <p>
          Thank you for being part of the bankaroo community! <br />
          <br />
          As you may know, bankaroo is a family-run project fueled with passion
          and purpose. Dani came up with the idea at the age of 10, and in the
          ten years since, we helped over 500,000 kids, families, and teachers.{" "}
          <br />
          <br />
          Based on recent changes in the cost of running the service for the
          growing community, and feedback we got from hundreds of educators,
          teachers, and school administrators, we decided to release a new
          version of the family and school edition and update the pricing to
          make it more affordable
          <br />
          <br />. Existing schools with paid plans can continue without change
          for now. <br />
          <br />
          As of Sep 2021, bankaroo’s pricing will be as follows:
        </p>
      </div>
    </DIV>
  );
};

export default Pricing;

const DIV = styled.div`
  .Banner {
    width: 90%;
    height: 200px;
    border: 1px solid red;
    margin: auto;
    font-family: sans-serif, Arial, sans-serif;
    font-size: 28px;
    font-size: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .MainHead {
    margin-top: 40%;
  }
  .para {
    /* Font & Text */
    font-family: HelveticaNeueDeskInterface, sans-serif;
    font-size: 25px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 40px;
    text-decoration: none solid rgb(119, 119, 119);
    text-align: start;
    text-indent: 0px;
    text-transform: none;
    /* vertical-align: baseline; */
    white-space: normal;
    word-spacing: 0px;

    /* Color & Background */
    background-attachment: scroll;
    background-color: rgba(0, 0, 0, 0);
    background-image: none;
    background-position: 0% 0%;
    background-repeat: repeat;
    color: rgb(119, 119, 119);

    /* Box */
    height: auto;
    width: 90%;
    border: 0px none rgb(119, 119, 119);
    border-top: 0px none rgb(119, 119, 119);
    border-right: 0px none rgb(119, 119, 119);
    border-bottom: 0px none rgb(119, 119, 119);
    border-left: 0px none rgb(119, 119, 119);
    margin: auto;
    padding: 0px;
    max-height: none;
    min-height: 0px;
    max-width: none;
    min-width: 0px;

    /* Positioning */
    position: static;
    top: auto;
    bottom: auto;
    right: auto;
    left: auto;
    float: none;
    display: block;
    clear: none;
    z-index: auto;

    /* List */
    list-style-image: none;
    list-style-type: disc;
    list-style-position: outside;

    /* Table */
    border-collapse: separate;
    border-spacing: 0px 0px;
    caption-side: top;
    empty-cells: show;
    table-layout: auto;

    /* Miscellaneous */
    overflow: visible;
    cursor: auto;
    visibility: visible;

    /* Effects */
    transform: none;
    transition: all 0s ease 0s;
    outline: rgb(255, 0, 0) dashed 1px;
    outline-offset: 0px;
    box-sizing: border-box;
    resize: none;
    text-shadow: none;
    text-overflow: clip;
    word-wrap: break-word;
    box-shadow: none;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;
