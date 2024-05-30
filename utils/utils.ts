export interface LogicalConditions {
  and?: string[];
  or?: string[];
  nor?: string[];
  exists?: "false" | "true";
}
export interface CustomFieldsLogicalConditions {
  checkbox?: CheckboxFieldLogicalConditions;
  singleline?: TextFieldLogicalConditions;
  multiline?: TextFieldLogicalConditions;
  date?: DateFieldLogicalConditions;
  number?: NumberFieldLogicalConditions;
  dropdown?: DropdownFieldLogicalConditions;
}
export interface CheckboxFieldLogicalConditions {
  and?: GetIssuesCheckboxField;
  or?: GetIssuesCheckboxField;
}
export type GetIssuesCheckboxField = Record<string, boolean>;
export interface TextFieldLogicalConditions {
  and?: GetIssuesTextField;
  or?: GetIssuesTextField;
}

export type GetIssuesTextField = Record<string, TextFieldOperators>;
export interface TextFieldOperators {
  is_set?: boolean;
  contains?: string[];
  does_not_contain?: string[];
}
export interface DateFieldLogicalConditions {
  and?: GetIssuesDateField;
  or?: GetIssuesDateField;
}
export type GetIssuesDateField = Record<string, DateFieldOperators>;
export interface DateFieldOperators {
  is_set?: boolean;
  /** @format int64 */
  is?: number;
  /** @format int64 */
  is_not?: number;
  /** @format int64 */
  is_after?: number;
  /** @format int64 */
  is_before?: number;
}
export interface NumberFieldLogicalConditions {
  and?: GetIssuesNumberField;
  or?: GetIssuesNumberField;
}
export type GetIssuesNumberField = Record<string, NumberFieldOperators>;
export interface NumberFieldOperators {
  is_set?: boolean;
  /** @format int64 */
  is?: number;
  /** @format int64 */
  is_not?: number;
  /** @format int64 */
  is_greater_than?: number;
  /** @format int64 */
  is_smaller_than?: number;
}
export interface DropdownFieldLogicalConditions {
  and?: GetIssuesDropdownField;
  or?: GetIssuesDropdownField;
}
export type GetIssuesDropdownField = Record<string, DropdownFieldOperators>;
export interface DropdownFieldOperators {
  is_set?: boolean;
  is?: string;
  is_not?: string;
  is_one_of?: string[];
  is_none_of?: string[];
}
export interface AuthorEmailLogicalConditions {
  or?: string[];
  exists?: "false" | "true";
}
export interface LogicalConditionsWithoutExists {
  and?: string[];
  or?: string[];
  nor?: string[];
}
export interface AssigneeEmailLogicalConditions {
  or?: string[];
}
export interface LogicalConditionsWithoutExists {
  and?: string[];
  or?: string[];
  nor?: string[];
}
export interface LogicalConditionsRatings {
  and?: ConstrainedRatings[];
  or?: ConstrainedRatings[];
  exists?: "false" | "true";
}
export interface ConstrainedRatings {
  /** @format double */
  is_greater_than?: number;
  /** @format double */
  is_smaller_than?: number;
  /** @format double */
  is?: number;
  /** @format double */
  is_not?: number;
}
export interface ConstrainedRatings {
  /** @format double */
  is_greater_than?: number;
  /** @format double */
  is_smaller_than?: number;
  /** @format double */
  is?: number;
  /** @format double */
  is_not?: number;
}
export interface LogicalConditionsWithoutOr {
  and?: string[];
  nor?: string[];
  exists?: "false" | "true";
}
export interface Issue {
  current_predict_label?: string;
  tags: (string | null)[];
  meta?: GetIssuesResponseIssuesMeta;
  custom_fields?: CustomFields;
  /** @format int64 */
  feedback_rating?: number;
  assignee_name?: string | null;
  queue?: Queue;
  app_id: string;
  hs_user_id: string;
  private_notes?: PrivateNote[];
  feedback_comment?: string;
  title: string;
  redacted: boolean;
  updated_at: number | string;
  messages?: Message[];
  assignee_id?: string;
  /** @format int64 */
  id: number;
  sentiment_analysis?: SentimentAnalysisData | null;
  app_publish_id: string;
  original_predict_label?: string;
  issue_mode_data: IssueModeData;
  author_name?: string;
  author_email?: string | null;
  smart_intents?: IntentsData | null;
  domain: string;
  state_data: StateData;
  created_at: number | string;
}
export type GetIssuesResponseIssuesMeta = Record<string, any>;
export type CustomFields = any;
export interface Queue {
  id: string;
  name: string;
}
export interface PrivateNote {
  body: string;
  created_at: any;
  author: Author;
}
export interface Author {
  name?: string;
  id: string;
  emails?: string[];
  phone_number?: string;
}
export interface Message {
  intent_labels?: string[];
  attachments?: Attachment[];
  sentiment?: MessageSentiment;
  author: Author;
  id?: string;
  origin: "helpshift" | "end-user";
  body: string;
  created_at: number | string;
  attachment?: Attachment;
}
export interface Attachment {
  /** @format int64 */
  size?: number;
  content_type?: string;
  file_name?: string;
  url?: string;
}
export interface MessageSentiment {
  label?: string;
  sentiment_transition_from?: string;
  sentiment_transition_to?: string;
}
export interface SentimentAnalysisData {
  sentiment_enabled?: boolean;
  issue_sentiment_trend?: string[];
}
export interface IssueModeData {
  issue_mode: string;
}
export interface IntentsData {
  intent_group?: IntentGroup;
  intent?: Intent;
  intent_search_text?: string | null;
}
export interface IntentGroup {
  id: string;
  name: string;
}
export interface Intent {
  id: string;
  name: string;
}
export interface StateData {
  state:
    | "pending-reassignment"
    | "new"
    | "agent-replied"
    | "waiting-for-agent"
    | "new-for-agent"
    | "rejected"
    | "resolved";
  /** @format int64 */
  changed_at: number;
}
