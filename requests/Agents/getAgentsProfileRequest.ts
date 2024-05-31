export interface GetAgentsProfilesRequest {
  roles?: string[];
  /** @format int64 */
  page?: number;
  /** @format int64 */
  page_size?: number;
  includes?: ("availability" | "groups" | "last_login_at")[];
  emails?: string[];
  provider?: string;
  [key: string]: any;
}
