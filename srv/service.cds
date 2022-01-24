using { sap.ui.lcnc as my } from '../db/schema';

@path : 'serviceonline'
service MainOnlineService
{
    @restrict :
    [
        { grant : ['READ'], to : ['CapexRead'] },
        { grant : ['*'], to : ['CapexWrite'] }
    ]
    @workflow.start.dataObject : 'capexStart'
    @workflow.start.definitionId : 'capexapprovals'
    entity Capex as
        projection on my.Capex;

    @restrict :
    [
        { grant : ['READ'], to : ['CapexRead'] },
        { grant : ['*'], to : ['CapexWrite'] }
    ]
    entity CapexType as
        projection on my.CapexType;

    @restrict :
    [
        { grant : ['READ'], to : ['CapexRead'] },
        { grant : ['*'], to : ['CapexWrite'] }
    ]
    entity BusinessUnits as
        projection on my.BusinessUnits;
}
