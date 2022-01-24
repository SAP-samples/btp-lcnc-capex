namespace sap.ui.lcnc;

using sap.workflow from './WorkflowObject';

using
{
    managed,
    Country,
    Currency
}
from '@sap/cds/common';

entity Capex : managed, workflow.TaskEnabled
{
    key ID : UUID
        @Core.Computed;
    requestid : String;
    title : String
        @workflow.start.property;
    firstname : String
        @workflow.start.property;
    lastname : String
        @workflow.start.property;
    email : String
        @workflow.start.property;
    userid : String;
    comments : String;
    totalcost : String
        @workflow.start.property;
    type : Association to one CapexType;
    capex : String;
    opex : String;
    currency : Currency;
    roi : String;
    irr : String;
    country : Country;
    business_unit : Association to one BusinessUnits;
    description : String;
    energy_efficiency : String;
    co2_efficiency : String;
    energy_cost_savings : String;
    water_savings : String;
    folder_id : String;
}

entity CapexType : managed
{
    key type : String;
    typedescription : String;
}

entity BusinessUnits : managed
{
    key business_unit : String;
    name : String;
}
