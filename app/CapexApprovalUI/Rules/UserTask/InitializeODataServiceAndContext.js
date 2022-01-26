/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InitializeODataServiceAndContext(clientAPI) {
    return clientAPI.executeAction("/CapexApprovalUI/Actions/Service/InitializeOnline.action").then(() => {
        return clientAPI.executeAction("/CapexApprovalUI/Actions/UserTask/ReadFromService.action").then((result) => {
            clientAPI.getAppClientData().WorkflowUsertask.InitialBinding = result.data.getItem(0);
        });
    });
}