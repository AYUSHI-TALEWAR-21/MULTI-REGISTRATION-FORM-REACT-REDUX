import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Paper,
  withStyles,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import Step1 from "./Steps/stepOne";
import Step2 from "./Steps/stepTwo";
import Step3 from "./Steps/stepThree";
import Step4 from "./Steps/stepFour";
import Step5 from "./Steps/stepFive";
import FinalStep from "./Steps/FinalStep";
import { renderText } from "./common/DisplayComponent";
import { styles } from "./common/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { storeRegData } from "../action/registrationUserAction"
import { regData } from "../reducer/regUserReducer";
import { kycDataForID, kycDataForAddress, kycDataForBank } from "../reducer/kycUserDataReducer";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { storeKYCDataIdProof, storeKYCDataForBank, storeKYCDataForAddress } from "../action/kycStoreDataAction";
toast.configure()
// function GeeksforGeeks(){
// function which is called when
// button is clicked
const notify = () => {
  // Calling toast method by passing string
  toast('Hello Geeks')
}
// 
// export default GeeksforGeeks;idName

const mapStateToProps = (state) => ({
  regData: regData(state.RegUserReducer),
  kycDataForID: kycDataForID(state.KycUserDataReducer),
  kycDataForAddress: kycDataForAddress(state.KycUserDataReducer),
  kycDataForBank: kycDataForBank(state.KycUserDataReducer),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      storeRegData: storeRegData,
      storeKYCDataIdProof: storeKYCDataIdProof,
      storeKYCDataForAddress: storeKYCDataForAddress,
      storeKYCDataForBank: storeKYCDataForBank

    },
    dispatch
  );

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

const FormComponent = connectFunction(
  class extends Component {
    state = {
      data: {
        FirstName: "",
        LastName: "",
        gender: "",
        Phone: "",
        dob: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        pin: "",


        indvORcorp: "",
        panNo: "",
        indianCitizen: "",
        profession: "",
        networth: "",
        accountName: "",
        accountNo: "",
        ifsccode: "",

        idProofValue: "",
        addressProofValue: "",
        bankChequeValue: "",

        nomfirstName: "",
        nomlastName: "",
        nomRelationship: "",
        nomphone: "",
        nomaddress1: "",
        nomaddress2: "",
        nomcity: "",
        nomstate: "",
        nomcountry: "",
        nompin: "",
        allocation: "",

        nomfirstName1: "",
        nomlastName1: "",
        nomRelationship1: "",
        nomphone1: "",
        nomaddress1_1: "",
        nomaddress2_1: "",
        nomcity1: "",
        nomstate1: "",
        nomcountry1: "",
        nompin1: "",
        allocation1: "",
      },


      errors: {},


      steps: [
        { label: "Personal Details" },
        { label: "Account Details" },
        { label: "Uploads KYC" },
        { label: "Nominee" },
        { label: "Preview" },
      ],
      stepCount: 0,
      move_to_next_page_flag: false,
      move_to_next_page_flag_2: false,
      move_to_next_page_flag_3: false,
      move_to_next_page_flag_4: false,
      pressdBackButton: false,
    };



    render() {

      const { classes } = this.props;

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
      };

      function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
      const handleOnChange = ({ target }) => {
        debugger;

        if (target.name === "idProof") {
          let idName, idHashValue;
          idName = target.files[0].name;
          let fsize = target.files[0].size;
          let file = Math.round(fsize / 1024);
          if (file >= 2000) {
            alert(
              "Exceeds the file size, Please select a file less than 200KB"
            );
          }
          else {
            let file = target.files;
            getBase64(file[0]).then(data => {
              idHashValue = data;
              const dataTOStore = { idHashValue, idName };
              this.props.storeKYCDataIdProof(dataTOStore);
            })
          }

        }
        else if (target.name === "addressProof") {
          let addressDocName, addressHashValue;
          addressDocName = target.files[0].name;
          let fsize = target.files[0].size;
          let file = Math.round(fsize / 1024);
          if (file >= 2000) {
            alert(
              "Exceeds the file size, Please select a file less than 200KB"
            );
          }
          else {
          let file = target.files;
          getBase64(file[0]).then(data => {
            addressHashValue = data;
            const dataTOStore = { addressHashValue, addressDocName };
            this.props.storeKYCDataForAddress(dataTOStore);
          })
        }
        }
        else if (target.name === "bankCheque") {
          let bankChequeDocName, bankChequHashValue;
          bankChequeDocName = target.files[0].name;
          let fsize = target.files[0].size;
          let file = Math.round(fsize / 1024);
          if (file >= 2000) {
            alert(
              "Exceeds the file size, Please select a file less than 200KB"
            );
          }
          else {
          let file = target.files;
          getBase64(file[0]).then(data => {
            bankChequHashValue = data;

            const dataTOStore = { bankChequHashValue, bankChequeDocName };
            this.props.storeKYCDataForBank(dataTOStore);
          })
        }
        }
        else {
          const { data, errors } = this.state;
          target.value.length <= 1
            ? (errors[target.name] = `${target.name} cannot be empty`)
            : (errors[target.name] = "");

          data[target.name] = target.value;
          this.setState({ data, errors });
          this.props.storeRegData(data);
        }

      };

      const handleNextStep = () => {
    
        if (this.state.pressdBackButton && this.state.move_to_next_page_flag && this.state.move_to_next_page_flag_2 && this.state.move_to_next_page_flag_3) {
          this.props.storeRegData(this.state.data);
          let { stepCount } = this.state;
          console.log("stepCount", stepCount);
          stepCount = stepCount + 1;
          this.setState({ stepCount });

        }
        else {
          let { stepCount } = this.state;

          if (this.state.data.FirstName.length > 0) {
            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('First Name Required.', { position: toast.POSITION.TOP_LEFT })
            return
          }

          //Validation For Last Name
          if (this.state.data.LastName.length > 0) {
            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('Last Name Required.')
          }

        //Validation For Gender
          if (this.state.data.gender.toString().length > 0) {

            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('Gender is Required.', { position: toast.POSITION.TOP_LEFT })
            return
          }

         //Validation For Phone no.
          if (this.state.data.Phone.length >0) {
            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('Phone No. is Required.')
            return
          }
          var patternS = /^[0-9]+$/;
          if (patternS.test(this.state.data.Phone)) {
            this.state.move_to_next_page_flag= true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('Please enter the Phone in numbers!.')
            return
          }

          //Validation For Date Of Birth
          if (this.state.data.dob.length > 0) {
            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('Date Of Birth is Required.', { position: toast.POSITION.TOP_LEFT })
            return
          }

           //Validation For Address
          if (this.state.data.address1.length > 0) {
            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('Address is Required.', { position: toast.POSITION.TOP_LEFT })
          }

           //Validation For Address 2
          if (this.state.data.address2.length > 0) {
            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('Apartment no. is Required.')
            return
          }

           //Validation For Country
          if (this.state.data.country.length > 0) {
            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('Country is Required.', { position: toast.POSITION.TOP_LEFT })
            return
          }

           //Validation For State
          if (this.state.data.state.length > 0) {
            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('State is Required.')
            return
          }

           //Validation For City
          if (this.state.data.city.length > 0) {
            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('City is Required.', { position: toast.POSITION.TOP_LEFT })
            return
          }

           //Validation For Postal Code
          if (this.state.data.pin.length > 0) {
            this.state.move_to_next_page_flag = true
          }
          else {
            this.state.move_to_next_page_flag = false
            toast.error('Postal Code is Required.')
            return
          }

          if (this.state.move_to_next_page_flag) {
            if (stepCount == 0) {
              stepCount = stepCount + 1;
              this.setState({ stepCount });
            }
          }

          //Validation For Account Type
          if (this.state.data.indvORcorp.length > 0) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('Account Type is Required.')
            return
          }

          //Validation For Pan No.
          if (this.state.data.panNo.length > 0) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('Pan Number is Required.')
            return

          }
          var pattern = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/;
          if (pattern.test(this.state.data.panNo)) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('Pan input type : Please enter 5 characters, 4 digits and 1 character! Characters must be Uppercase!')
            return
          }

          //Validation For Indian Citizen
          if (this.state.data.indianCitizen.length > 0) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('Please select the Indian Citizen.')
            return
          }

          //Validation For Profession
          if (this.state.data.profession.length > 0) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('Profession is Required.')
            return
          }

          //Validation For Net Worth
          if (this.state.data.networth.length > 0) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('Net Worth is Required.')
            return
          }
          var patternS = /^[0-9]+$/;
          if (patternS.test(this.state.data.networth)) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('Please enter the Networth(Rs) in numbers!.')
            return
          }


           //Validation For IFSC Code
          if (this.state.data.ifsccode.length > 0) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('IFSC Code is Required.')
            return
          }


          var patternSS = /^[A-Z]{4}0[A-Z0-9]{6}$/;
          if (patternSS.test(this.state.data.ifsccode)) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('IFSC input type: Please enter 4 characters, zero(0) and 6 aplhanumeric! Characters must be Uppercase!')
            return
          }

           //Validation For Account No.
          if (this.state.data.accountNo.length > 0) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('Account No. is Required.')
            return
          }

          var patternSSS = /^[0-9]+$/;
          if (patternSSS.test(this.state.data.accountNo)) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('Account No. is Required.')
            return
          }
          //Validation For Account Name.
          if (this.state.data.accountName.length > 0) {
            this.state.move_to_next_page_flag_2 = true
          }
          else {
            this.state.move_to_next_page_flag_2 = false
            toast.error('Account Name. is Required.')
            return
          }
          //console.log("this.state.move_to_next_page_flag_2:-",this.state.move_to_next_page_flag_2)

          if (this.state.move_to_next_page_flag_2) {
            if (stepCount == 1) {
              stepCount = stepCount + 1;
              this.setState({ stepCount });
            }
          }
          if ((this.props.kycDataForID.idHashValue || "").length > 0) {
            this.state.move_to_next_page_flag_3 = true

          }
          else {
            this.state.move_to_next_page_flag_3 = false
            toast.error('Id Proof Document. is Required.')
            return
          }
          // console.log("this.state.move_to_next_page_flag_3:-",this.state.move_to_next_page_flag_3)

          if ((this.props.kycDataForAddress.addressHashValue || "").length > 0 > 0) {
            this.state.move_to_next_page_flag_3 = true

          }
          else {
            this.state.move_to_next_page_flag_3 = false
            toast.error('Address Proof Document. is Required.')
            return
          }

          if ((this.props.kycDataForBank.bankChequHashValue || "").length > 0) {
            this.state.move_to_next_page_flag_3 = true

          }
          else {
            this.state.move_to_next_page_flag_3 = false
            toast.error('Bank Cheque Document. is Required.')
            return
          }

          if (this.state.move_to_next_page_flag_3) {
           
            if (stepCount == 2) {
              stepCount = stepCount + 1;
              this.setState({ stepCount });
            }
          }
          //Validation for Nominee First Name
          if (this.state.data.nomfirstName.length > 0) {
            this.state.move_to_next_page_flag_4 = true
          }
          else {
            this.state.move_to_next_page_flag_4 = false
            toast.error(' Nominee First Name is required')
            return
          }

          //Validation for Nominee Last Name
          if (this.state.data.nomlastName.length > 0) {
            this.state.move_to_next_page_flag_4 = true
          }
          else {
            this.state.move_to_next_page_flag_4 = false
            toast.error('Nominee Last Name is required')
            return
          }

          //  //Validation For Nominee Relationship
          //  if (this.state.data.nomRelationship.toString().length > 0) {

          //   this.state.move_to_next_page_flag_4 = true
          // }
          // else {
          //   this.state.move_to_next_page_flag_4 = false
          //   toast.error('Nominee Relationship is Required.', { position: toast.POSITION.TOP_LEFT })
          //   return
          // }
          //  //Validation For Nominee Phone no.
          //  if (this.state.data.nomphone.length >0) {
          //   this.state.move_to_next_page_flag_4 = true
          // }
          // else {
          //   this.state.move_to_next_page_flag_4 = false
          //   toast.error('Nominee Phone No. is Required.')
          //   return
          // }
          // var patternS = /^[0-9]+$/;
          // if (patternS.test(this.state.data.nomphone)) {
          //   this.state.move_to_next_page_flag_4= true
          // }
          // else {
          //   this.state.move_to_next_page_flag_4 = false
          //   toast.error('Please enter the Phone in numbers!.')
          //   return
          // }

          // //Validation For Nomiee Address
          // if (this.state.data.nomaddress1.length > 0) {
          //   this.state.move_to_next_page_flag_4 = true
          // }
          // else {
          //   this.state.move_to_next_page_flag_4 = false
          //   toast.error('Nominee Address is Required.', { position: toast.POSITION.TOP_LEFT })
          // }

          //  //Validation For Nominee Address 2
          // if (this.state.data.nomaddress2.length > 0) {
          //   this.state.move_to_next_page_flag_4 = true
          // }
          // else {
          //   this.state.move_to_next_page_flag_4 = false
          //   toast.error('Nominee Apartment no. is Required.')
          //   return
          // }

          //  //Validation For Country
          // if (this.state.data.nomcountry.length > 0) {
          //   this.state.move_to_next_page_flag_4 = true
          // }
          // else {
          //   this.state.move_to_next_page_flag_4 = false
          //   toast.error('Nominee Country is Required.', { position: toast.POSITION.TOP_LEFT })
          //   return
          // }

          //  //Validation For State
          // if (this.state.data.nomstate.length > 0) {
          //   this.state.move_to_next_page_flag_4 = true
          // }
          // else {
          //   this.state.move_to_next_page_flag_4 = false
          //   toast.error('Npminee State is Required.')
          //   return
          // }

          //  //Validation For City
          // if (this.state.data.nomcity.length > 0) {
          //   this.state.move_to_next_page_flag_4 = true
          // }
          // else {
          //   this.state.move_to_next_page_flag_4 = false
          //   toast.error('Nominee City is Required.', { position: toast.POSITION.TOP_LEFT })
          //   return
          // }

          //  //Validation For Postal Code
          // if (this.state.data.nompin.length > 0) {
          //   this.state.move_to_next_page_flag_4 = true
          // }
          // else {
          //   this.state.move_to_next_page_flag_4 = false
          //   toast.error('Nominee Postal Code is Required.')
          //   return
          // }
        //   handleSubmit = (e) => {
        //     e.preventDefault();
        //     let formVal = this.props.values.formValues;
        //     let flag = false;
        //     let sum = 0;
        //     for (let obj = 0; obj < formVal.length; obj++) {
        //         const element = parseFloat(formVal[obj].nomineeAllocation);
        //         console.log("allocation :", element);
        //         sum =sum+element;
        //         console.log("Sum of all allocation is : ", sum);
        //         if (element < 0 || element > 101 || sum >101) {
        //             alert("Allocation total should be 100");
        //             flag = true;
        //         } else {
        //             flag = false;
        //         }
        //     }
        //     if (flag == false) {
        //         this.continue();
        //     }
          
        // }
          
          if (this.state.move_to_next_page_flag_4) {
           
            if (stepCount == 3, 4) {
              stepCount = stepCount + 1;
              this.setState({ stepCount });
            }
          }

        }

      };
      const handleBackStep = () => {
        this.setState({ pressdBackButton: true })
        let { stepCount } = this.state;
        stepCount = stepCount - 1;
        this.setState({ stepCount });
      };


      const getStepContent = (step) => {
        switch (step) {
          case 0:
            return (
              <Step1
                state={this.state}
                handleChange={handleOnChange}
                handleNext={handleNextStep}
              />
            );
          case 1:
            return (
              <Step2
                state={this.state}
                handleChange={handleOnChange}
                handleNext={handleNextStep}
                handlePrev={handleBackStep}
              />
            );
          case 2:
            return (
              <Step3
                state={this.state}
                handleChange={handleOnChange}
                handleNext={handleNextStep}
                handlePrev={handleBackStep}
              // onChangeKyc={onChangeKyc}
              />
            );
          case 3:
            return (
              <Step4
                state={this.state}
                handleChange={handleOnChange}
                handleNext={handleNextStep}
                handlePrev={handleBackStep}
                handleSubmit={handleSubmit}
              />
            );
          case 4:
            return (
              <Step5
                handleChange={handleOnChange}
                handleNext={handleNextStep}
                handlePrev={handleBackStep}
                handleSubmit={handleSubmit}
              />
            );
          case 5:
            return <FinalStep />;
          default:
            return (
              <Step1
                state={this.state}
                handleChange={handleOnChange}
                handleNext={handleNextStep}
              />
            );
        }
      };

      return (
        <Grid container className={classes.formContainer}>
          <Grid item xs={12} sm={24}>
            <form onSubmit={this.handleSubmit} className={classes.form}>
              <Paper component={Box} mb={0.7}>
                <Box elevation="24" pt={2}>
                  {renderText({
                    type: "h3",
                    label: " REGISTRATION FORM",
                    color: "Primary",
                    align: "center",
                  })}
                </Box>

                <Stepper activeStep={this.state.stepCount} alternativeLabel>
                  {this.state.steps.map((item) => (
                    <Step key={item.label}>
                      <StepLabel>{item.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>

              </Paper>
              {getStepContent(this.state.stepCount)}
            </form>
          </Grid>
        </Grid>
      );
    }
  }
)



FormComponent.proptypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormComponent);