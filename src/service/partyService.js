import RestDataSource from "../resetDatasource/restDataSource";
import { Global_var } from "../global/global_var";
import { loginService } from "../service/loginServices";

export const partyServices = {
    nomineeDetailsParty,
    addNomineeParty,
    addNomineePartyAddress
 }


//Nominee Details Add or Create 
function nomineeDetailsParty(mfaInfo, fn, fnError) {
    loginService.TokenUser((res) => {
        if (res.status === "success") {
        localStorage.setItem("jwt-token", res.responseObject);
        var url = Global_var.BASEURL + Global_var.URL_PARTYRELATIONSHIP_CREATE;

        return new RestDataSource(url, fn).Store(
            mfaInfo,
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
    }, fnError);
}

//Nominee Add Party
function addNomineeParty(mfaInfo, fn, fnError) {
    loginService.TokenUser((res) => {
        if (res.status === "success") {
        localStorage.setItem("jwt-token", res.responseObject);
        var url = Global_var.BASEURL + Global_var.URL_ADD_PARTY;

        return new RestDataSource(url, fn).Store(
            mfaInfo,
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
    }, fnError);
}

//Nominee Party Address

function addNomineePartyAddress(mfaInfo, fn, fnError) {
    loginService.TokenUser((res) => {
        if (res.status === "success") {
        localStorage.setItem("jwt-token", res.responseObject);
        var url = Global_var.BASEURL + Global_var.URL_ADD_PARTY_ADDRESS;

        return new RestDataSource(url, fn).Store(
            mfaInfo,
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
    }, fnError);
}