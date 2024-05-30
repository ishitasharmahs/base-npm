import {
  LogicalConditions,
  CustomFieldsLogicalConditions,
  AuthorEmailLogicalConditions,
  LogicalConditionsWithoutExists,
  AssigneeEmailLogicalConditions,
  LogicalConditionsRatings,
  LogicalConditionsWithoutOr,
} from "../utils/utils";
export interface GetIssuesQuery {
  "app-ids"?: string[];
  tags?: LogicalConditions;
  /** @format int64 */
  updated_since?: number;
  custom_fields?: CustomFieldsLogicalConditions;
  "platform-types"?: string[];
  "assignee-ids"?: LogicalConditions;
  "sort-order"?: "desc" | "asc";
  excludes?: "messages"[];
  issue_modes?: string[];
  /** @format int64 */
  "page-size"?: number;
  author_emails?: AuthorEmailLogicalConditions;
  ids?: number[];
  state?: (
    | "pending-reassignment"
    | "new"
    | "agent-replied"
    | "waiting-for-agent"
    | "new-for-agent"
    | "rejected"
    | "resolved"
  )[];
  includes?: (
    | "predict_labels"
    | "queue"
    | "feedback"
    | "custom_fields"
    | "meta"
    | "sentiment_analysis"
    | "private_notes"
    | "smart_intents"
  )[];
  /** @format int64 */
  page?: number;
  /** @format int64 */
  updated_until?: number;
  "end-user-ids"?: string[];
  /** @format int64 */
  created_until?: number;
  redacted?: true | false;
  /** @format int64 */
  state_since?: number;
  /** @format int64 */
  "created-since"?: number;
  "timestamp-format"?: "iso-8601" | "unix";
  messages?: LogicalConditionsWithoutExists;
  assignee_emails?: AssigneeEmailLogicalConditions;
  notes?: LogicalConditionsWithoutExists;
  "feedback-rating"?: LogicalConditionsRatings;
  /** @format int64 */
  "created-until"?: number;
  "feedback-comment"?: LogicalConditionsWithoutOr;
  "sort-by"?: "state-change-time" | "creation-time";
  /** @format int64 */
  created_since?: number;
  languages?: LogicalConditions;
  /** @format int64 */
  "state-since"?: number;
  /** @format int64 */
  "state-until"?: number;
  /** @format int64 */
  state_until?: number;
  queue_ids?: string[];
}
