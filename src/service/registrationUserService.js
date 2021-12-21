import { createTokenService } from "./tokenService";
import { Global_var } from "../global/global_var";
import RestDataSource from "../resetDatasource/restDataSource";


export const regService = {

    AddPartyGenderForRegUser,
    AddPartyForRegUser,
    AddPartyAddressForRegUser,
    AddPartyAttributeForRegUser,
    AddPartyDocumentIDProofforregUser,
    AddPartyDocumentAddressProofforregUser,
    AddPartyDocumentBankChequeforregUser,
    AddPartyRelationshipForRegUser,
    AddPartyNomineeForRegUser,
    AddPartyNomineeAddressForRegUser,

}
function AddPartyGenderForRegUser(data, fn) { 
    
    createTokenService.TokenUser((res) => {
        if (res.status === "success") {
        localStorage.setItem("jwt-token", res.responseObject);
        var url = Global_var.BASEURL + Global_var.URL_GET_CODE_VALUE;
        return new RestDataSource(url, fn).Store(
            data,
            (res) => {
               
            if (res != null) {
                if (res.headers["jtitoken"] != null) {
                localStorage.setItem("jti-token", res.headers.jtitoken);
                }
                fn(res);
            }

         }
     );
 }
    })
}


function AddPartyForRegUser(data, fn) {
   
    createTokenService.TokenUser((res) => {
        if (res.status === "success") {
            localStorage.setItem("jwt-token", res.responseObject);
            var url = Global_var.BASEURL + Global_var.URL_ADD_PARTY;
            return new RestDataSource(url, fn).Store(
                data,
                (res) => {
                   
                    if (res != null) {
                        if (res.headers["jtitoken"] != null) {
                            localStorage.setItem("jti-token", res.headers.jtitoken);
                        }
                        fn(res);
                    }
                }
            );
        }

    })

}

function AddPartyAddressForRegUser(data, fn) {
  
    createTokenService.TokenUser((res) => {
        
        if (res.status === "success") {
            localStorage.setItem("jwt-token", res.responseObject);
            var url = Global_var.BASEURL + Global_var.URL_ADD_PARTY_ADDRESS;
            return new RestDataSource(url, fn).Store(
                data,
                (res) => {
                    ;
                    if (res != null) {
                        if (res.headers["jtitoken"] != null) {
                            localStorage.setItem("jti-token", res.headers.jtitoken);
                        }
                        fn(res);
                    }
                }
            );
        }

    })

}

function AddPartyAttributeForRegUser(data, fn) {
    ;
    createTokenService.TokenUser((res) => {
        ;
        if (res.status === "success") {
            localStorage.setItem("jwt-token", res.responseObject);
            var url = Global_var.BASEURL + Global_var.URL_ADD_PARTY_ATTRIBUTE;
            return new RestDataSource(url, fn).Store(
                data,
                (res) => {
                    ;
                    if (res != null) {
                        if (res.headers["jtitoken"] != null) {
                            localStorage.setItem("jti-token", res.headers.jtitoken);
                        }
                        fn(res);
                    }
                }
            );
        }

    })

}

function AddPartyDocumentIDProofforregUser(data, fn) {
    ;
    createTokenService.TokenUser((res) => {
        ;
        if (res.status === "success") {
            localStorage.setItem("jwt-token", res.responseObject);
            var url = Global_var.BASEURL + Global_var. URL_ADD_PARTY_DOCUMENT;
            return new RestDataSource(url, fn).Store(
                data,
                (res) => {
                    ;
                    if (res != null) {
                        if (res.headers["jtitoken"] != null) {
                            localStorage.setItem("jti-token", res.headers.jtitoken);
                        }
                        fn(res);
                    }
                }
            );
        }

    })

}

function AddPartyDocumentAddressProofforregUser(data, fn) {
    ;
    createTokenService.TokenUser((res) => {
        ;
        if (res.status === "success") {
            localStorage.setItem("jwt-token", res.responseObject);
            var url = Global_var.BASEURL + Global_var.URL_ADD_PARTY_DOCUMENT;
            return new RestDataSource(url, fn).Store(
                data,
                (res) => {
                    ;
                    if (res != null) {
                        if (res.headers["jtitoken"] != null) {
                            localStorage.setItem("jti-token", res.headers.jtitoken);
                        }
                        fn(res);
                    }
                }
            );
        }

    })

}

function AddPartyDocumentBankChequeforregUser(data, fn) {
    ;
    createTokenService.TokenUser((res) => {
        ;
        if (res.status === "success") {
            localStorage.setItem("jwt-token", res.responseObject);
            var url = Global_var.BASEURL + Global_var. URL_ADD_PARTY_DOCUMENT;
            return new RestDataSource(url, fn).Store(
                data,
                (res) => {
                    ;
                    if (res != null) {
                        if (res.headers["jtitoken"] != null) {
                            localStorage.setItem("jti-token", res.headers.jtitoken);
                        }
                        fn(res);
                    }
                }
            );
        }

    })

}

function AddPartyRelationshipForRegUser(data, fn) { 
    
    createTokenService.TokenUser((res) => {
        if (res.status === "success") {
        localStorage.setItem("jwt-token", res.responseObject);
        var url = Global_var.BASEURL + Global_var.URL_GET_CODE_VALUE;
        return new RestDataSource(url, fn).Store(
            data,
            (res) => {
            
            if (res != null) {
                if (res.headers["jtitoken"] != null) {
                localStorage.setItem("jti-token", res.headers.jtitoken);
                }
                fn(res);
            }

         }
     );
 }
    })
}


function AddPartyNomineeForRegUser(data, fn) {
    createTokenService.TokenUser((res) => {
        
        if (res.status === "success") {
   
            localStorage.setItem("jwt-token", res.responseObject);
            var url = Global_var.BASEURL + Global_var.URL_ADD_PARTY_ATTRIBUTE;
            return new RestDataSource(url, fn).Store(
                data,
                (res) => {
                    
                    if (res != null) {
                        if (res.headers["jtitoken"] != null) {
                            localStorage.setItem("jti-token", res.headers.jtitoken);
                        }
                        fn(res);
                    }
                }
            );
        }

    })

}

function AddPartyNomineeAddressForRegUser(data, fn) {
    
    createTokenService.TokenUser((res) => {
        
        if (res.status === "success") {
            localStorage.setItem("jwt-token", res.responseObject);
            var url = Global_var.BASEURL + Global_var.URL_ADD_PARTY_ADDRESS;
            return new RestDataSource(url, fn).Store(
                data,
                (res) => {
                    
                    if (res != null) {
                        if (res.headers["jtitoken"] != null) {
                            localStorage.setItem("jti-token", res.headers.jtitoken);
                        }
                        fn(res);
                    }
                }
            );
        }

    })

}



