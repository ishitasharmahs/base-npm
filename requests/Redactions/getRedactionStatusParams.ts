export interface GetRedactionStatusRequestParams {
  email?: string;
  issue_id?: string;
  external_redaction_id?: string;
  hs_user_id?: string;
  /** @format int64 */
  page?: number;
  external_user_id?: string;
  message_id?: string;
  attachment_id?: string;
  redaction_id?: string;
}
