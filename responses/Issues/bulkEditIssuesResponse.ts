import { BulkEditIssuesResponseEditInfo } from "../../utils/utils";

export interface BulkEditIssuesResponse {
  /** @format int64 */
  "issue-count": number;
  "edit-info": BulkEditIssuesResponseEditInfo;
  action_taken_by?: string;
}
