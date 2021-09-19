/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLaunches2
// ====================================================

export interface GetLaunches2_launchesPast_links {
  __typename: "LaunchLinks";
  mission_patch_small: string | null;
  mission_patch: string | null;
}

export interface GetLaunches2_launchesPast_rocket {
  __typename: "LaunchRocket";
  rocket_name: string | null;
}

export interface GetLaunches2_launchesPast {
  __typename: "Launch";
  mission_name: string | null;
  links: GetLaunches2_launchesPast_links | null;
  launch_year: string | null;
  rocket: GetLaunches2_launchesPast_rocket | null;
}

export interface GetLaunches2 {
  launchesPast: (GetLaunches2_launchesPast | null)[] | null;
}

export interface GetLaunches2Variables {
  limit?: number | null;
}
