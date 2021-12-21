
import React from 'react';
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  // renderSelect,
  renderText,
} from "../common/DisplayComponent";
import { useSelector, shallowEqual } from "react-redux";
import { kycDataForID,kycDataForAddress,kycDataForBank} from "../../reducer/kycUserDataReducer";

function Step3({ state, handleChange, handleNext, handlePrev }) {
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
 
  return (
    <Paper style={styles.steps}>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderText({
            label: "ID Proof:",
            type: "h5",
            color: "textPrimary",
          })}
          {renderInputField({
            state,
            name: "idProof",
            type: "file",
           
            onChange: handleChange,
          })}
          <img src={kycData.idHashValue }></img>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderText({
            label: "Address Proof:",
            type: "h5",
            color: "textPrimary",
          })}
          {renderInputField({
            state,
            name: "addressProof",
            type: "file",
            onChange: handleChange,
          })}
           <img src={kycDataAddress.addressHashValue }></img>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderText({
            label: "Bank Cheque:",
            type: "h5",
            color: "textPrimary",
          })}
          {renderInputField({
            state,
            name: "bankCheque",
            type: "file",
            onChange: handleChange,
          })}
           <img src={kycDataBank.bankChequHashValue }></img>
        </Grid>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
   
  );
};
export default Step3;