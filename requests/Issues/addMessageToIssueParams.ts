export interface AddMessageToIssueParams {
  "message-body": string;
  "message-type": string;
  /** @format binary */
  attachment?: File;
  attachments?: File | File[];
  "agent-id"?: string;
}
