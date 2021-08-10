using { sap.ui.lcnc as my } from '../db/schema';

@path: 'serviceonline'
service MainOnlineService {
  entity Capex 
    @(restrict : [
            {
                grant : [ 'READ' ],
                to : [ 'CapexRead' ]
            },
            {
                grant : [ '*' ],
                to : [ 'CapexWrite' ]
            }
    ])
    as projection on my.Capex;
    
  entity CapexType 
    @(restrict : [
            {
                grant : [ 'READ' ],
                to : [ 'CapexRead' ]
            },
            {
                grant : [ '*' ],
                to : [ 'CapexWrite' ]
            }
    ])
    as projection on my.CapexType;
  entity BusinessUnits 
    @(restrict : [
            {
                grant : [ 'READ' ],
                to : [ 'CapexRead' ]
            },
            {
                grant : [ '*' ],
                to : [ 'CapexWrite' ]
            }
    ])
    as projection on my.BusinessUnits;
}
