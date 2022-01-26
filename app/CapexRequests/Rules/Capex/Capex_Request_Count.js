/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Capex_Request_Count(clientAPI) {
    let serviceName = "/CapexRequests/Services/service1.service";
    let entitySet = "Capex";
    return clientAPI.count(serviceName, entitySet, ' ').then((result) => {
			return result;
		}).catch(err => {
			console.log(err);
			return 0;
		});
}
