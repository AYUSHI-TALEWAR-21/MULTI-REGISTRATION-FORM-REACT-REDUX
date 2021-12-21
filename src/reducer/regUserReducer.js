import {
    REG_USER_ADD_PARTY_GENDER_PENDING,
    REG_USER_ADD_PARTY_GENDER_SUCCESS,
    REG_USER_ADD_PARTY_PENDING,
    REG_USER_ADD_PARTY_SUCCESS,
    REG_USER_ADD_PARTY_ADDRESS_PENDING,
    REG_USER_ADD_PARTY_ADDRESS_SUCCESS,
    REG_USER_ADD_PARTY_ATTRIBUTE_PENDING,
    REG_USER_ADD_PARTY_ATTRIBUTE_SUCCESS,
    REG_USER_ADD_PARTY_DOCUMENT_ID_PROOF_PENDING,
    REG_USER_ADD_PARTY_DOCUMENT_ID_PROOF_SUCCESS,
    REG_USER_ADD_PARTY_DOCUMENT_ADDRESS_PROOF_PENDING,
    REG_USER_ADD_PARTY_DOCUMENT_ADDRESS_PROOF_SUCCESS,
    REG_USER_ADD_PARTY_DOCUMENT_BANK_CHEQUE_PENDING,
    REG_USER_ADD_PARTY_DOCUMENT_BANK_CHEQUE_SUCCESS,
    REG_USER_ADD_PARTY_RELATIONSHIP_PENDING,
    REG_USER_ADD_PARTY_RELATIONSHIP_SUCCESS,
    REG_USER_ADD_PARTY_NOMINEE_PENDING,
    REG_USER_ADD_PARTY_NOMINEE_SUCCESS,
    REG_USER_ADD_PARTY_NOMINEE_ADDRESS_PENDING,
    REG_USER_ADD_PARTY_NOMINEE_ADDRESS_SUCCESS,
    Reg_USER_DATA,
    // REG_USER_ADD_PARTY_NOMINEE_ADDRESS_SUCCESS,
    
} from "../action/registrationUserAction";

const initialState = {
    userRegistred: Boolean,
    addPartyData: [],
    addPartyRelationshippending: Boolean,
    relationshipData: [],
    addPartyGenderpending: Boolean,
    genderData: [],
    addPartypending: Boolean,
    regData: {}
};

const regUserReducer = (state = initialState, action) => {
    switch (action.type) {
        // fecth  branch List
        case REG_USER_ADD_PARTY_GENDER_PENDING:

            return {
                ...state,
                addPartyGenderpending: true,
                //  userRegistred: false
            };
        case REG_USER_ADD_PARTY_GENDER_SUCCESS:

            return {
                ...state,
                genderData: action.payload,
                addPartyGenderpending: false,
                //  userRegistred: false
            };

            case REG_USER_ADD_PARTY_RELATIONSHIP_PENDING:

                return {
                    ...state,
                    addPartyRelationshippending: true,
                    
                };
            case REG_USER_ADD_PARTY_RELATIONSHIP_SUCCESS:
    
                return {
                    ...state,
                    relationshipData: action.payload,
                    addPartyRelationshippending: false,
                    
                };

        case REG_USER_ADD_PARTY_PENDING:

            return {
                ...state,
                addPartypending: true,
                userRegistred: false
            };
        case REG_USER_ADD_PARTY_SUCCESS:

            return {
                ...state,
                addPartyData: action.payload,
                addPartypending: false,
                userRegistred: false
            };
            case REG_USER_ADD_PARTY_ADDRESS_PENDING:

            return {
                ...state,
                addPartyAddresspending: true,
                userRegistredForAddress: false
            };
        case REG_USER_ADD_PARTY_ADDRESS_SUCCESS:

            return {
                ...state,
                addPartyAddressData: action.payload,
                addPartyAddresspending: false,
                userRegistredForAddress: false,
            };
            case REG_USER_ADD_PARTY_ATTRIBUTE_PENDING:

                return {
                    ...state,
                    addPartyAttributepending: true,
                    userRegistredForAttribute: false
                };
            case REG_USER_ADD_PARTY_ATTRIBUTE_SUCCESS:
    
                return {
                    ...state,
                    addPartyAttributeData: action.payload,
                    addPartyAttributepending: false,
                    userRegistredForAttribute: false
                };
                case REG_USER_ADD_PARTY_DOCUMENT_ID_PROOF_PENDING:

                return {
                    ...state,
                    addPartyDocumentIDProofpending: true,
                    userRegistredForDocumentIDProof: false
                };
            case REG_USER_ADD_PARTY_DOCUMENT_ID_PROOF_SUCCESS:
    
                return {
                    ...state,
                    addPartyDocumentIDProofData: action.payload,
                    addPartyDocumentIDProofpending: false,
                    userRegistredForDocumentIDProof: false
                };

                case REG_USER_ADD_PARTY_DOCUMENT_ADDRESS_PROOF_PENDING:

                    return {
                        ...state,
                        addPartyDocumentAddressProofpending: true,
                        userRegistredForDocumentAddressProof: false
                    };
                case REG_USER_ADD_PARTY_DOCUMENT_ADDRESS_PROOF_SUCCESS:
        
                    return {
                        ...state,
                        addPartyDocumentAddressProofData: action.payload,
                        addPartyDocumentAddressProofpending: false,
                        userRegistredForDocumentAddressProof: false
                    };
                    case REG_USER_ADD_PARTY_DOCUMENT_BANK_CHEQUE_PENDING:

                        return {
                            ...state,
                            addPartyDocumentBankChequepending: true,
                            userRegistredForDocumentBankCheque: false
                        };
                    case REG_USER_ADD_PARTY_DOCUMENT_BANK_CHEQUE_SUCCESS:
            
                        return {
                            ...state,
                            addPartyDocumentBankChequeData: action.payload,
                            addPartyDocumentBankChequepending: false,
                            userRegistredForDocumentBankCheque: false
                        };
                        case REG_USER_ADD_PARTY_NOMINEE_PENDING:

                            return {
                                ...state,
                                addPartyNomineepending: true,
                                userRegistredForNominee: false
                            };
                        case REG_USER_ADD_PARTY_NOMINEE_SUCCESS:
                
                            return {
                                ...state,
                                addPartyNomineeData: action.payload,
                                addPartyNomineepending: false,
                                userRegistredForNominee: false
                            };
                            case REG_USER_ADD_PARTY_NOMINEE_ADDRESS_PENDING:

                                return {
                                    ...state,
                                    addPartyNomineeAddresspending: true,
                                    userRegistredForNomineeAddress: false
                                };
                            case REG_USER_ADD_PARTY_NOMINEE_ADDRESS_SUCCESS:
                    
                                return {
                                    ...state,
                                    addPartyNomineeAddressData: action.payload,
                                    addPartyNomineeAddresspending: false,
                                    userRegistredForNomineeAddress: false,
                                    userRegistred:true
                                };
                // case REG_USER_ADD_PARTY_NOMINEE_ADDRESS_SUCCESS:
    
                //     return {
                //         ...state,
                //         userRegistred:true
                //     };

        case Reg_USER_DATA:

            return {
                ...state,
                regData: action.payload

            };
        default:
            return state;
    }
};

export default regUserReducer;

export const regUserAddPartyGenderSuccess = (state) => state.genderData;
export const regUserAddPartyGenderPending = (state) => state.addPartyGenderpending;

export const regUserAddPartySuccess = (state) => state.addPartyData;
export const regUserAddPartyPending = (state) => state.addPartypending;

export const regUserAddPartyAddressSuccess = (state) => state.addPartyAddressData;
export const regUserAddPartyAddressPending = (state) => state.addPartyAddresspending;

export const regUserAddPartyAttributeSuccess = (state) => state.addPartyAttributeData;
export const regUserAddPartyAttributePending = (state) => state.addPartyAttributepending;

export const regUserAddPartyRelationshipSuccess = (state) => state.relationshipData;
export const regUserAddPartyRelationshipPending = (state) => state.addPartyRelationshippending;

export const regUserAddPartyDocumentIDProofSuccess = (state) => state.addPartyDocumentIDProofData;
export const regUserAddPartyDocumentIDProofPending = (state) => state.addPartyDocumentIDProofpending;

export const regUserAddPartyDocumentAddressProofSuccess = (state) => state.addPartyDocumentAddressProofData;
export const regUserAddPartyDocumentAddressProofPending = (state) => state.addPartyDocumentAddressProofpending;

export const regUserAddPartyDocumentBankChequeSuccess = (state) => state.addPartyDocumentBankChequeData;
export const regUserAddPartyDocumentBankChequePending = (state) => state.addPartyDocumentBankChequepending;

export const regUserAddPartyNomineeSuccess = (state) => state.addPartyNomineeData;
export const regUserAddPartyNomineePending = (state) => state.addPartyNomineepending;

export const regUserAddPartyNomineeAddressSuccess = (state) => state.addPartyNomineeAddressData;
export const regUserAddPartyNomineeAddressPending = (state) => state.addPartyNomineeAddresspending;

export const completeUserregistration = (state) => state.userRegistred;
export const regData = (state) => state.regData;
