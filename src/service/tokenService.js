import { Global_var } from "../global/global_var";
import RestDataSource from "../resetDatasource/restDataSource";


export const createTokenService = {
    TokenUser
}


function TokenUser(fn) {
    let url = Global_var.BASEURL + Global_var.URL_JWT_TRUST;
    return new RestDataSource(url).GetData((res) => fn(res.data));
}