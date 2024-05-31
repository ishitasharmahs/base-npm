import { Issue } from "../../utils/utils";
export interface GetIssuesResponse {
  /** @format int64 */
  page: number;
  /** @format int64 */
  "page-size": number;
  issues: Issue[];
  /** @format int64 */
  "total-hits": number;
  /** @format int64 */
  "total-pages": number;
}
