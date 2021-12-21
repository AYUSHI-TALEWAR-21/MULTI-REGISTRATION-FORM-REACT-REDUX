export const KYC_Store_Data_For_ID = "KYC_Store_Data_For_ID";
export const KYC_Store_Data_For_Address="KYC_Store_Data_For_Address";
export const KYC_Store_Data_For_Bank="KYC_Store_Data_For_Bank";



export function kycUserDataIDProof(data) {
    return {
        type: KYC_Store_Data_For_ID,
        payload: data
    }
}
export function kycUserDataAddress(data) {
    return {
        type: KYC_Store_Data_For_Address,
        payload: data
    }
}
export function kycUserDataBank(data) {
    return {
        type: KYC_Store_Data_For_Bank,
        payload: data
    }
}



export function storeKYCDataIdProof(data) {
  
    return (dispatch) => {
        dispatch(kycUserDataIDProof(data));

    }
}
export function storeKYCDataForAddress(data) {
   
    return (dispatch) => {
        dispatch(kycUserDataAddress(data));

    }

}
export function storeKYCDataForBank(data) {
   
    return (dispatch) => {
        dispatch(kycUserDataBank(data));

    }

}