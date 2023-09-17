// Import the function that creates the PDF
import poPDF from "./poPDF.js";

// Select the po-list element to obtain information for the PDF
const poListEl = document.querySelector(".po-list");

// Get the company information from the po-list element dataset.
const companyName = poListEl.dataset.companyname;
const companAddress = poListEl.dataset.companyaddress;
const companyCity = poListEl.dataset.companycity;
const companyState = poListEl.dataset.companystate;
const companyZip = poListEl.dataset.companyzip;
const companyPhone = poListEl.dataset.companyphone;

const renderPDF = async (element) => {
  //   event.preventDefault();

  // Get the PO, Invoice, and Vendor information from the SELECTED ELEMENT'S DATASET.
  const date = element.dataset.date;
  const poNumber = element.dataset.ponumber;
  const vendorInvoice = element.dataset.vendorinvoice;
  const vendorName = element.dataset.vendorname;
  const vendorAddress = element.dataset.vendoraddress;
  const vendorCity = element.dataset.vendorcity;
  const vendorState = element.dataset.vendorstate;
  const vendorZip = element.dataset.vendorzip;
  const vendorGoods = element.dataset.vendorgoods;
  const vendorDescription = element.dataset.vendordescription;
  const vendorCost = element.dataset.vendorcost;

  // Call the poPDF function to create the PDF
  poPDF(
    companyName,
    companAddress,
    companyCity,
    companyState,
    companyZip,
    companyPhone,
    date,
    poNumber,
    vendorInvoice,
    vendorName,
    vendorAddress,
    vendorCity,
    vendorState,
    vendorZip,
    vendorGoods,
    vendorDescription,
    vendorCost
  );
  return
};

// Add an event listener to the po-list element that only listens for when you click on a PDF button.
document.querySelector(".po-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("pdf")) {
    renderPDF(event.target);
  } else {
    return;
  }
});