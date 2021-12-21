import {
    KYC_Store_Data_For_ID,
    KYC_Store_Data_For_Address,
    KYC_Store_Data_For_Bank,

} from "../action/kycStoreDataAction";
import {
    REG_USER_ADD_PARTY_NOMINEE_ADDRESS_SUCCESS,

} from "../action/registrationUserAction";

const initialState = {

    kycDataIDProf: {},
    kycDataAddress: {},
    kycDataBank: {},
};

const kycUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        // fecth  branch List

        case KYC_Store_Data_For_ID:

            return {
                ...state,
                kycDataIDProf: action.payload

            };
        case KYC_Store_Data_For_Address:

            return {
                ...state,
                kycDataAddress: action.payload

            };
        case KYC_Store_Data_For_Bank:

            return {
                ...state,
                kycDataBank: action.payload

            };
        case REG_USER_ADD_PARTY_NOMINEE_ADDRESS_SUCCESS:
            return {
                kycDataIDProf: {},
                    kycDataAddress: {},
                    kycDataBank: {},

            }
            default:
                return state;
    }
};

export default kycUserDataReducer;

export const kycDataForID = (state) => state.kycDataIDProf;
export const kycDataForAddress = (state) => state.kycDataAddress;
export const kycDataForBank = (state) => state.kycDataBank;