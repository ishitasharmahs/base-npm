import { CustomFields } from "../../utils/utils";

export interface CreateIssueParams {
  end_user_id?: string;
  "author-name"?: string;
  tags?: string[];
  email?: string;
  "platform-type"?: string;
  "app-id"?: string;
  meta?: string;
  custom_fields?: CustomFields;
  attachments?: File | File[];
  cc?: string[];
  title?: string;
  language?: string;
  identifier?: string;
  "message-body": string;
  "platform-id"?: string;
  /** @format binary */
  attachment?: File;
}
