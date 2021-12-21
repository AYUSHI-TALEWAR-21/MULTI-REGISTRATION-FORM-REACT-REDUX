import React ,{ useEffect} from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderText,
  renderSelectGender
} from "../common/DisplayComponent";
import { TextField } from "@material-ui/core";
import { Stack } from '@mui/material';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getGenderData } from "../../action/registrationUserAction";
import { regUserAddPartyGenderSuccess } from "../../reducer/regUserReducer";

 export const Step1 = ({ state, handleChange, handleNext }) => {

  const genderData = useSelector(
    (state) => regUserAddPartyGenderSuccess(state.RegUserReducer),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;
    let data = {
      
      codeTypeId: 5,
     limit: -1,
    };
   
    dispatch(getGenderData(data))

  }, []
  
  )
     
  return (
    <Paper elevation="24" square style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Please Fill Personal Details:",
          type: "h5",
          color: "textPrimary",
         
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            
            state,
            name: "FirstName",
            label: "First Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "LastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelectGender({
            state,
            name: "gender",
            label: "Gender",
            options:[genderData],
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Phone",
            type: "number",
            label: "Phone",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
            <Stack component="form" noValidate spacing={2}>
            <TextField
                name="dob"
                label="Date Of Birth"
                type="date"
                variant= 'outlined'
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
                onChange= {handleChange}
                state
                />
             </Stack>
        </Grid>
    </Grid>

      <Box mt={2} mb={2}>
        {renderText({
          label: "Address:",
          type: "h5",
          color: "textPrimary",
         
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "address1",
            label: "Address",
            onChange: handleChange,
          })}
        </Grid>
       
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "address2",
            label: "Apartment/Suite/floor/etc",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "country",
            label: "Country",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "state",
            label: "State",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "city",
            label: "City",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            type: "number",
            name: "pin",
            label: "Postal Code",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        {renderButton({ label: "NEXT", onClick: handleNext })}
        
      </Grid>
      
    </Paper>
  );
};

export default Step1;