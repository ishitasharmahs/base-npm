import { RedactionRequest } from "../../utils/utils";

export interface RedactionStatusResponse {
  redaction_id: string;
  status:
    | "nominated"
    | "done"
    | "rejected"
    | "created"
    | "approved"
    | "invalid"
    | "in_progress";
  eta?: string;
  reason?: string;
  request: RedactionRequest;
}
