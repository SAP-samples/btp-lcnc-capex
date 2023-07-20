namespace sap.ui.lcnc;


using
{
    managed,
    Country,
    Currency
}
from '@sap/cds/common';

entity Capex : managed
{
    key ID : UUID
        @Core.Computed;
    requestid : String;
    title : String;
    firstname : String;
    lastname : String;
    email : String;
    userid : String;
    comments : String;
    totalcost : String;
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
    energy_cost_savings : Decimal;
    water_savings : String;
    folder_id : String;
    expiration_date: Date;
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
