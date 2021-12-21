import React , {useEffect} from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderText,
  renderSelectRelationship,
}from "../common/DisplayComponent";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getRelationshipData } from "../../action/registrationUserAction";
import { regUserAddPartyRelationshipSuccess } from "../../reducer/regUserReducer";


const Step4 = ({ state, handleChange, handleNext, handlePrev }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const relationshipData = useSelector(
    (state) => regUserAddPartyRelationshipSuccess(state.RegUserReducer),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;
    let data = {
      
      codeTypeId: 7,
      limit: -1,
    };
   
    dispatch(getRelationshipData(data))

  }, []
  
  )

  return (
    <Paper  elevation="24" square style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Please Fill Nominee Details:",
          type: "h5",
          color: "textPrimary",
         
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomfirstName",
            label: "First Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomlastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelectRelationship({
            state,
            name: "nomRelationship",
            label: "Nominee Relationship",
            options:[relationshipData],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomphone",
            type: "number",
            label: "Phone",
            onChange: handleChange,
          })}
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
            name: "nomaddress1",
            label: "Apartment/Suite/etc",
            onChange: handleChange,
          })}
        </Grid>
       
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomaddress2",
            label: "Address/Locality/etc",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomcity",
            label: "City",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomstate",
            label: "State",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomcountry",
            label: "Country/Region",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            type: "number",
            name: "nompin",
            label: "Postal Code",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "allocation",
            type: "number",
            label: "% Allocation",
            onChange: handleChange,
          })}
          </Grid>
          </Grid>

          <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        + ADD NOMINEE
      </Button>
      <Paper>

      <Dialog open={open} onClose={handleClose}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Please Fill Nominee Details:",
          type: "h5",
          color: "textPrimary",
         
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={6} sm={6}>
          {renderInputField({
            state,
            name: "nomfirstName1",
            label: "First Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomlastName1",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelectRelationship({
            state,
            name: "nomRelationship1",
            label: "Nominee Relationship",
            options:[relationshipData],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomphone1",
            type: "number",
            label: "Phone",
            onChange: handleChange,
          })}
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
            name: "nomaddress1_1",
            label: "Apartment/Suite/etc",
            onChange: handleChange,
          })}
        </Grid>
       
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomaddress2_1",
            label: "Address/Locality/etc",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomcity1",
            label: "City",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomstate1",
            label: "State",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nomcountry1",
            label: "Country/Region",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            type: "number",
            name: "nompin1",
            label: "Postal Code",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "allocation1",
            type: "number",
            label: "% Allocation",
            onChange: handleChange,
          })}
          </Grid>
          </Grid>
      <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
      </Paper>

    </div>
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

export default Step4;