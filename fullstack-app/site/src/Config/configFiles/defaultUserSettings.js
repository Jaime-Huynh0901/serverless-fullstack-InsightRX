import moment from "moment";
import {company, setCompany} from  "../updateUserConfig";

//if a new default company needs to be set call setCompany and pass the company name: 
// setCompany("newname");

const defaultUserConfig = {
         Events: 
         {
            "source-name": company.default
         },
         DatedEvents: 
         {
            "source-name": company.default,
            "start-date": moment().utc().subtract(180, "days").format().toString().slice(0, -1),
            "end-date": moment().utc().format().toString().slice(0, -1)
         }, 
         InitialQuery:
         {
            "eventtype-name": "newPatientButton",
            "source-name": company.default,
            "version-number": 1,
            "start-date": moment().utc().subtract(500, "days").format().toString().slice(0, -1),
            "end-date": moment().utc().format().toString().slice(0, -1)
         }
}
  
export default defaultUserConfig;