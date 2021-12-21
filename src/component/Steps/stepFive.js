import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@mui/material";
import { ListItemText } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, shallowEqual } from "react-redux";
import { regData } from "../../reducer/regUserReducer";
import {kycDataForID,kycDataForAddress,kycDataForBank} from "../../reducer/kycUserDataReducer";
import {regUserAddPartyGenderSuccess} from "../../reducer/regUserReducer";
import {regUserAddPartyRelationshipSuccess} from "../../reducer/regUserReducer";

const Step5 = ({
  handleNext,
  handlePrev,
}) => {
  const regData1 = useSelector(
    (state) => regData(state.RegUserReducer),
    shallowEqual
  );
  const kycData = useSelector(
    (state) => kycDataForID(state.KycUserDataReducer),
    shallowEqual
    
  );
  const kycDataAddress = useSelector(
    (state) => kycDataForAddress(state.KycUserDataReducer),
    shallowEqual
    
  );
  const kycDataBank = useSelector(
    (state) => kycDataForBank(state.KycUserDataReducer),
    shallowEqual
    
  );
  const genderData = useSelector(
    (state) => regUserAddPartyGenderSuccess(state.RegUserReducer),
    shallowEqual
  );
  const result=genderData.filter(data => data.codeValueId===regData1.gender);

  const relationshipData = useSelector(
    (state) => regUserAddPartyRelationshipSuccess(state.RegUserReducer),
    shallowEqual
  );
  const result1=relationshipData.filter(data => data.codeValueId===regData1.nomRelationship );

  return (
    <Paper  style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Review:",
          type: "h5",
          color: "textPrimary",
        })}
      </Box>

      <RenderAccordion summary="Personal Details" details={[
        { 'First Name': regData1.FirstName },
        { 'Last Name': regData1.LastName },
        { 'Gender': result[0].codeValue },
        { 'Phone': regData1.Phone },
        { 'Date Of Birth': regData1.dob },
        { 'Apartment/Suite/etc': regData1.address1 },
        { 'Address/Locality/etc': regData1.address2 },
        { 'Country': regData1.country },
        { 'City': regData1.city },
        { 'State': regData1.state },
        { 'Postal Code': regData1.pin },
      ]} />
      <RenderAccordion summary="Account Details" details={[
        { 'Account Type': regData1.indvORcorp },
        { 'PAN': regData1.panNo },
        { 'Indian Citizen': regData1.indianCitizen },
        { 'Profession': regData1.profession },
        { 'Networth': regData1.networth },
        { 'Account Name': regData1.accountName },
        { 'Account Number': regData1.accountNo },
        { 'IFSC Code': regData1.ifsccode },
      ]} />
      <RenderAccordion summary="Upload KYC doc" details={[
        { 'ID Proof:': kycData.idName },
        { 'Address Proof:':  kycDataAddress.addressDocName },
        { 'Bank Cheque:': kycDataBank.bankChequeDocName },
      ]} />
      <RenderAccordion summary="Nomination Details" details={[
        { 'First Name': regData1.nomfirstName },
        { 'Last Name': regData1.nomlastName },
        { 'Nominee Relationship': result1[0].codeValue },
        { 'Phone': regData1.nomphone },
        { 'Apartment/Suite/etc': regData1.nomaddress1 },
        { 'Address/Locality/etc': regData1.nomaddress2 },
        { 'Country': regData1.nomcountry },
        { 'City': regData1.nomcity },
        { 'State': regData1.nomstate },
        { 'Postal Code': regData1.nompin },
        { '% Allocation': regData1.allocation },

        { 'First Name': regData1.nomfirstName1 },
        { 'Last Name': regData1.nomlastName1 },
        { 'Nominee Relationship': result1[0].codeValue },
        { 'Phone': regData1.nomphone1 },
        { 'Apartment/Suite/etc': regData1.nomaddress1_1 },
        { 'Address/Locality/etc': regData1.nomaddress2_1},
        { 'Country': regData1.nomcountry1 },
        { 'City': regData1.nomcity1 },
        { 'State': regData1.nomstate1 },
        { 'Postal Code': regData1.nompin1},
        { '% Allocation': regData1.allocation1 },
       
      ]} />
      
      
     


      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "BACK",
            color: "primary",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({ label: "SUBMIT", onClick: handleNext })}
        </Box>
      </Grid>
      
    </Paper>
  );
};

const RenderAccordion = ({ summary, details }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        })}
      </div>
    </AccordionDetails>
  </Accordion>
)

export default Step5;