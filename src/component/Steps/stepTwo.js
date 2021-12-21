import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper elevation="24" square style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Account Details:",
          type: "h5",
          color: "textPrimary",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "indvORcorp",
            label: "Account Type",
            options: [
              { key: "Individual", value: "Individual" },
              { key: "Corporate", value: "Corporate" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "panNo",
            label: "PAN ",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
        {renderSelect({
            state,
            name: "indianCitizen",
            label: "Indian Citizen",
            options: [
              { key: "Yes", value: "Yes" },
              { key: "No", value: "No" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "profession",
            label: "Profession",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
       {renderInputField({
            state,
            name: "networth",
            type:"number",
            label: "Networth",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>

        <Box mt={2} mb={2}>
        {renderText({
          label: "Bank Details:",
          type: "h5",
          color: "textPrimary",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "accountName",
            label: "Account Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "accountNo",
            label: "Account Number",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
       {renderInputField({
            state,
            name: "ifsccode",
            label: "IFSC Code",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "BACK",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "NEXT", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step2;