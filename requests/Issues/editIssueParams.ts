//putSingleIssueParams
import { EditIssueCustomFields } from "../../utils/utils";
export interface EditIssueParams {
  "assignee-id"?: string;
  tags?: string[];
  meta?: string;
  custom_fields?: EditIssueCustomFields;
  title?: string;
  status?: string;
  "agent-profile-id"?: string;
  queue_id?: string;
  "assignee-email"?: string;
}
