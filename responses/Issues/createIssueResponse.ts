import { CustomFields, Attachment } from "../../utils/utils";

export interface CreateIssueResponse {
  /** @format int64 */
  created_at: number;
  id: string;
  title: string;
  tags: string[];
  attachment?: Attachment;
  attachments?: Attachment[];
  custom_fields?: CustomFields;
}
