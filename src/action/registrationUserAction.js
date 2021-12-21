import { regService } from "../service/registrationUserService";

export const REG_USER_ADD_PARTY_GENDER_PENDING = "REG_USER_ADD_PARTY_GENDER_PENDING";
export const REG_USER_ADD_PARTY_GENDER_SUCCESS = "REG_USER_ADD_PARTY_GENDER_SUCCESS";

export const REG_USER_ADD_PARTY_PENDING = "REG_USER_ADD_PARTY_PENDING";
export const REG_USER_ADD_PARTY_SUCCESS = "REG_USER_ADD_PARTY_SUCCESS";

export const REG_USER_ADD_PARTY_ADDRESS_PENDING = "REG_USER_ADD_PARTY_ADDRESS_PENDING";
export const REG_USER_ADD_PARTY_ADDRESS_SUCCESS = "REG_USER_ADD_PARTY_ADDRESS_SUCCESS";

export const REG_USER_ADD_PARTY_ATTRIBUTE_PENDING = "REG_USER_ADD_PARTY_ATTRIBUTE_PENDING";
export const REG_USER_ADD_PARTY_ATTRIBUTE_SUCCESS = "REG_USER_ADD_PARTY_ATTRIBUTE_SUCCESS";

export const REG_USER_ADD_PARTY_RELATIONSHIP_PENDING = "REG_USER_ADD_PARTY_RELATIONSHIP_PENDING";
export const REG_USER_ADD_PARTY_RELATIONSHIP_SUCCESS = "REG_USER_ADD_PARTY_RELATIONSHIP_SUCCESS";

export const REG_USER_ADD_PARTY_NOMINEE_ADDRESS_PENDING = "REG_USER_ADD_PARTY_NOMINEE_ADDRESS_PENDING";
export const REG_USER_ADD_PARTY_NOMINEE_ADDRESS_SUCCESS = "REG_USER_ADD_PARTY_NOMINEE_ADDRESS_SUCCESS";

export const REG_USER_ADD_PARTY_NOMINEE_PENDING = "REG_USER_ADD_PARTY_NOMINEE_PENDING";
export const REG_USER_ADD_PARTY_NOMINEE_SUCCESS = "REG_USER_ADD_PARTY_NOMINEE_SUCCESS";

export const REG_USER_ADD_PARTY_DOCUMENT_ID_PROOF_PENDING = "REG_USER_ADD_PARTY_DOCUMENT_ID_PROOF_PENDING";
export const REG_USER_ADD_PARTY_DOCUMENT_ID_PROOF_SUCCESS = "REG_USER_ADD_PARTY_DOCUMENT_ID_PROOF_SUCCESS";

export const REG_USER_ADD_PARTY_DOCUMENT_ADDRESS_PROOF_PENDING = "REG_USER_ADD_PARTY_DOCUMENT_ADDRESS_PROOF_PENDING";
export const REG_USER_ADD_PARTY_DOCUMENT_ADDRESS_PROOF_SUCCESS = "REG_USER_ADD_PARTY_DOCUMENT_ADDRESS_PROOF_SUCCESS";

export const REG_USER_ADD_PARTY_DOCUMENT_BANK_CHEQUE_PENDING = "REG_USER_ADD_PARTY_DOCUMENT_BANK_CHEQUE_PENDING";
export const REG_USER_ADD_PARTY_DOCUMENT_BANK_CHEQUE_SUCCESS = "REG_USER_ADD_PARTY_DOCUMENT_BANK_CHEQUE_SUCCESS";


export const Reg_USER_DATA = "Reg_USER_DATA";


export function getGenderDataPending() {
    return {
        type: REG_USER_ADD_PARTY_GENDER_PENDING

    }

}

export function getGenderDataSuccess(data) {
    return {
        type: REG_USER_ADD_PARTY_GENDER_SUCCESS,
        payload: data

    }

}

export function getRelationshipDataPending() {
    return {
        type: REG_USER_ADD_PARTY_RELATIONSHIP_PENDING

    }

}

export function getRelationshipDataSuccess(data) {
    return {
        type: REG_USER_ADD_PARTY_RELATIONSHIP_SUCCESS,
        payload: data

    }

}

export function regUserAddPartyPending() {
    return {
        type: REG_USER_ADD_PARTY_PENDING

    }

}

export function regUserAddPartySuccess(data) {
    return {
        type: REG_USER_ADD_PARTY_SUCCESS,
        payload: data

    }

}
export function regUserAddPartyAddressPending() {
    return {
        type: REG_USER_ADD_PARTY_ADDRESS_PENDING

    }

}

export function regUserAddPartyAddressSuccess(data) {
    return {
        type: REG_USER_ADD_PARTY_ADDRESS_SUCCESS,
        payload: data

    }

}
export function regUserAddPartyAttributePending() {
    return {
        type: REG_USER_ADD_PARTY_ATTRIBUTE_PENDING

    }

}

export function regUserAddPartyAttributeSuccess(data) {
    return {
        type: REG_USER_ADD_PARTY_ATTRIBUTE_SUCCESS,
        payload: data

    }

}

export function regUserAddPartyDocumentIDProofPending() {
    return {
        type: REG_USER_ADD_PARTY_DOCUMENT_ID_PROOF_PENDING

    }

}

export function regUserAddPartyDocumentIDProofSuccess(data) {
    return {
        type: REG_USER_ADD_PARTY_DOCUMENT_ID_PROOF_SUCCESS,
        payload: data

    }

}

export function regUserAddPartyDocumentAddressProofPending() {
    return {
        type: REG_USER_ADD_PARTY_DOCUMENT_ADDRESS_PROOF_PENDING

    }

}

export function regUserAddPartyDocumentAddressProofSuccess(data) {
    return {
        type: REG_USER_ADD_PARTY_DOCUMENT_ADDRESS_PROOF_SUCCESS,
        payload: data

    }

}

export function regUserAddPartyDocumentBankChequePending() {
    return {
        type: REG_USER_ADD_PARTY_DOCUMENT_BANK_CHEQUE_PENDING

    }

}

export function regUserAddPartyDocumentBankChequeSuccess(data) {
    return {
        type: REG_USER_ADD_PARTY_DOCUMENT_BANK_CHEQUE_SUCCESS,
        payload: data

    }

}


export function regUserAddPartyNomineePending() {
    return {
        type: REG_USER_ADD_PARTY_NOMINEE_PENDING

    }

}

export function regUserAddPartyNomineeSuccess(data) {
    return {
        type: REG_USER_ADD_PARTY_NOMINEE_SUCCESS,
        payload: data

    }

}

export function regUserAddPartyNomineeAddressPending() {
    return {
        type: REG_USER_ADD_PARTY_NOMINEE_ADDRESS_PENDING

    }

}

export function regUserAddPartyNomineeAddressSuccess(data) {
    return {
        type: REG_USER_ADD_PARTY_NOMINEE_ADDRESS_SUCCESS,
        payload: data

    }

}

export function regUserData(data) {
    return {
        type: Reg_USER_DATA,
        payload: data
    }
}

export function addPartyGenderForRegUser(data, fn) {
    return (dispatch) => {
        dispatch(getGenderDataPending());
        regService.AddPartyGenderForRegUser(data, (res) => {
            
            dispatch(getGenderDataSuccess(res.data.responseListObject));
            fn(res);
        })

    }

}

export function addPartyRelationshipForRegUser(data, fn) {
    
    return (dispatch) => {
        dispatch(getRelationshipDataPending());
        regService.AddPartyRelationshipForRegUser(data, (res) => {
            
            dispatch(getRelationshipDataSuccess(res.data.responseListObject));
            fn(res);
        })

    }

}
export function addPartyDocumentIDProofforregUser(data, fn) {
   
    return (dispatch) => {
        dispatch(regUserAddPartyDocumentIDProofPending());
        regService.AddPartyDocumentIDProofforregUser(data, (res) => {
            
            dispatch(regUserAddPartyDocumentIDProofSuccess(res.data.responseListObject));
            fn(res);
        })

    }

}

export function addPartyDocumentAddressProofforregUser(data, fn) {
    
    return (dispatch) => {
        dispatch(regUserAddPartyDocumentAddressProofPending());
        regService.AddPartyDocumentAddressProofforregUser(data, (res) => {
            
            dispatch(regUserAddPartyDocumentAddressProofSuccess(res.data.responseListObject));
            fn(res);
        })

    }

}

export function addPartyDocumentBankChequeforregUser(data, fn) {
    
    return (dispatch) => {
        dispatch(regUserAddPartyDocumentBankChequePending());
        regService.AddPartyDocumentBankChequeforregUser(data, (res) => {
            
            dispatch(regUserAddPartyDocumentBankChequeSuccess(res.data.responseListObject));
            fn(res);
        })

        
    }

}


export function getRelationshipData(data) {
    return (dispatch) => {
        dispatch(getRelationshipDataPending(data));
        regService.AddPartyRelationshipForRegUser(data, (res) => {
        
            dispatch(getRelationshipDataSuccess(res.data.responseListObject));
            // fn(res);
        })

    }
}

export function addPartyForRegUser(data, fn) {
    
    return (dispatch) => {
        dispatch(regUserAddPartyPending());
        regService.AddPartyForRegUser(data, (res) => {
            
            dispatch(regUserAddPartySuccess(res.data.responseListObject));
            fn(res);
        })

    }

}
export function addPartyAddressForRegUser(data, fn) {
    
    return (dispatch) => {
        dispatch(regUserAddPartyAddressPending());
        regService.AddPartyAddressForRegUser(data, (res) => {
            
            dispatch(regUserAddPartyAddressSuccess(res.data.responseListObject));
            fn(res);
        })

    }

}
export function addPartyAttributeForRegUser(data, fn) {
    
    return (dispatch) => {
        dispatch(regUserAddPartyAttributePending());
        regService.AddPartyAttributeForRegUser(data, (res) => {
            
            dispatch(regUserAddPartyAttributeSuccess(res.data.responseListObject));
            fn(res);
        })

    }

}

export function addPartyNomineeForRegUser(data, fn) {
    
    return (dispatch) => {
        dispatch(regUserAddPartyNomineePending());
        regService.AddPartyNomineeForRegUser(data, (res) => {

            dispatch(regUserAddPartyNomineeSuccess(res.data.responseListObject));
            fn(res);
        })

    }

}

export function addPartyNomineeAddressForRegUser(data, fn) {

    return (dispatch) => {
        dispatch(regUserAddPartyNomineeAddressPending());
        regService.AddPartyNomineeAddressForRegUser(data, (res) => {
        
            dispatch(regUserAddPartyNomineeAddressSuccess(res.data.responseListObject));
            fn(res);
        })

    }

}

export function storeRegData(data) {
    return (dispatch) => {
        dispatch(regUserData(data));

    }
}

export function getGenderData(data) {
    return (dispatch) => {
        dispatch(getGenderDataPending(data));
        regService.AddPartyGenderForRegUser(data, (res) => {
            
            dispatch(getGenderDataSuccess(res.data.responseListObject));
            // fn(res);
        })

    }
}


