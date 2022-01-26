/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnDecisionUpdateEntitySuccess(clientAPI) {
    window.parent.postMessage("actionCompletion", window.location.origin);
    clientAPI.executeAction("/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntitySuccessMessage.action");
}