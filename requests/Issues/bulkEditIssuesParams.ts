import { EditIssueCustomFields } from "../../utils/utils";

export interface BulkEditIssuesParams {
  "issue-ids": string[];
  tags?: string[];
  "assignee-id"?: string;
  status?: string;
  "message-body"?: string;
  "assignee-email"?: string;
  action_taken_by?: string;
  custom_fields?: EditIssueCustomFields;
}
