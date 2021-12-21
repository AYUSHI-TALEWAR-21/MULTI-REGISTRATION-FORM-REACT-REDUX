import React, { useEffect,useState } from "react";
import { Box, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import { renderText } from "../common/DisplayComponent";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addPartyForRegUser } from "../../action/registrationUserAction";
import { addPartyAddressForRegUser, addPartyAttributeForRegUser,  addPartyDocumentIDProofforregUser,addPartyDocumentAddressProofforregUser,addPartyDocumentBankChequeforregUser } from "../../action/registrationUserAction"
import { addPartyNomineeForRegUser , addPartyNomineeAddressForRegUser} from "../../action/registrationUserAction";
import { completeUserregistration, regData} from "../../reducer/regUserReducer"
import {kycDataForBank,kycDataForAddress,kycDataForID} from "../../reducer/kycUserDataReducer";
import { WindowSharp } from "@mui/icons-material";

const FinalStep = ({ }) => {
  const dispatch = useDispatch();

  const registrationCompleted = useSelector(
    (state) => completeUserregistration(state.RegUserReducer),
    shallowEqual
  );

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
  
  useEffect(() => {
  
    localStorage.removeItem("idName");
    localStorage.removeItem("addressDocName");
    localStorage.removeItem("bankChequeDocName");

    const payloadForRegUserAddParty = {
      salutation: "",
      FirstName: regData1.firstName,
      LastName: regData1.lastName,
      Gender: regData1.Gender,
      MiddleName: regData1.middleName,
      CompanyName: regData1.companyName,
      Phone: regData1.Phone,
      ContactEmail: regData1.contactNo, 
      isActive: "1",
      partyTypeId: "102",
      ownerId: "1"
    } 
    dispatch(addPartyForRegUser(payloadForRegUserAddParty, _res => {
    
      if(_res.data.status==="success"){
      

        const payloadForRegUserAddAddress = [{
          addressType: 401,
            "appId": 11101,
            "buId": "1",
            "subBuId": "0",
            partyId:_res.data.responseListObject[0].partyId,  
            "street2": "",
            postalCode: "",
            city: regData1.city,
          state: regData1.state,
          country: regData1.country,
          createdBy: 1,
          isActive: ""
        }]
        dispatch(addPartyAddressForRegUser(payloadForRegUserAddAddress, _res => {
          
          if(_res.data.status==="success"){

        const payloadForRegUserAddPartyAttribute = {
         
          partyTypeId:102,
          ownerId: 1,
          partyId:_res.data.responseListObject[0].partyId,  
          partyAttribute:[{  
            
            "tag": "pan",
            "value":regData1.panNo
        },
        {
          tag: "ClientType",
            value:regData1.indvORcorp
        },
        {
           tag: "Profession",
          value:regData1.profession
        },
      {
        tag: "Networth",
        value:regData1.networth
        },
        {
          tag: "IFSC",
      value:regData1.ifscCode
          },
        {
         tag: "Account No",
          value:regData1.accountNo
         },
        {
        tag: "Account Name",
           value:regData1.accountName
        },
        {
          "tag": "Indian Citizen",
          "value":regData1.indianCitizen
        },]
        }
        
        dispatch(addPartyAttributeForRegUser(payloadForRegUserAddPartyAttribute, _res => {

          if(_res.data.status==="success"){
            localStorage.setItem("partyIdForApiCall",_res.data.responseListObject[0].partyId)

            const payloadForRegUserAddKyc = {
              
                storageLocation: "AWS",
                documentType: "Image",
                partyId: _res.data.responseListObject[0].partyId,  
                documentKey: "Image",
                documentName:kycData.idName,
                replaceIfExists: 1,
                buId: "1",
                bucketTag: "thor-project-pawan",
                documentTag: "",
                documentHash: kycData.idHashValue,
            }
          
            dispatch(addPartyDocumentIDProofforregUser(payloadForRegUserAddKyc, _res => {
              
              if(_res.data.status==="success"){

          const payloadForRegUserAddKyc ={
            
              storageLocation: "AWS",
              documentType: "Image",
              partyId:localStorage.getItem("partyIdForApiCall"),  
              documentKey: "Image",
              documentName: kycDataAddress.addressDocName,
              replaceIfExists: 1,
              buId: "1",
              bucketTag: "thor-project-pawan",
              documentTag: "",
              documentHash: kycDataAddress.addressHashValue,
           
          }
        
          dispatch(addPartyDocumentAddressProofforregUser(payloadForRegUserAddKyc, _res => {
    
            if(_res.data.status==="success"){

              const payloadForRegUserAddKyc = {
            
                storageLocation: "AWS",
                documentType: "Image",
                partyId:localStorage.getItem("partyIdForApiCall"),  
                documentKey: "Image",
                documentName:
                kycDataBank.bankChequeDocName,
                replaceIfExists: 1,
                buId: "1",
                bucketTag: "thor-project-pawan",
                documentTag: "",
                documentHash: kycDataBank.bankChequHashValue,
             
            }
          
            dispatch(addPartyDocumentBankChequeforregUser(payloadForRegUserAddKyc, _res => {
          

              if(_res.data.status==="success"){

                const payloadForRegNomineeAddParty = {
                  salutation: "",
                  FirstName: regData1.nomfirstname,
                  // LastName: regData1.lastName,
                  // NomineeRelationship: regData1.nomRelationship,
                  // MiddleName: regData1.middleName,
                  // CompanyName: regData1.companyName,
                  // Phone: regData1.Phone,
                  // ContactEmail: regData1.contactNo, 
                  // isActive: "1",
                  partyTypeId: "102",
                  ownerId: "1"
                } 
                dispatch(addPartyNomineeForRegUser(payloadForRegNomineeAddParty, _res => {
              
                  if(_res.data.status==="success"){
                    
                    const payloadForRegNomineeAddAddress = [{
                      addressType: 401,
                        "appId": 11101,
                        "buId": "1",
                        "subBuId": "0",
                        partyId:localStorage.getItem("partyIdForApiCall"),   
                        "street2": "",
                        postalCode: "",
                        city: regData1.nomcity,
                        state: regData1.nomstate,
                        country: regData1.nomcountry,
                        createdBy: 1,
                        isActive: ""
                    }]
                    dispatch(addPartyNomineeAddressForRegUser(payloadForRegNomineeAddAddress, _res => {
          
                      if(_res.data.status==="success"){
                        localStorage.removeItem("partyIdForApiCall"); //remove one item
                
                      // window.location.reload();
    
                      }}));

                    }}));
                  }}));
    
    
                  }}));
    
                }}));
            
            }
    
            }));
          }
        }));
          }
        }));  
      }, []
      
      )
  
  return (
    <>
      {registrationCompleted ? <Paper style={styles.steps}>
        <Box mt={2} mb={2}>
          {renderText({
            label: "REGISTRATION COMPLETED",
            type: "h6",
            color: "primary",
            align: "center",
          })}
        </Box>

        {/* {JSON.stringify(regData1, null, 6)}  */}
      </Paper> : <Paper style={styles.steps}>
        <Box mt={2} mb={2}>
          {renderText({
            label: "REGISTRATION IN PROCESS...",
            type: "h5",
            color: "primary",
            align: "center",
          })}
        </Box>

      </Paper>}
    </>

  );
};

export default FinalStep;