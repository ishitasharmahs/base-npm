import { Profile } from "../../utils/utils";

export interface GetAgentsProfilesResponse {
  /** @format int64 */
  page: number;
  /** @format int64 */
  "page-size": number;
  profiles: Profile[];
  /** @format int64 */
  "total-profiles": number;
  /** @format int64 */
  "total-pages": number;
}
