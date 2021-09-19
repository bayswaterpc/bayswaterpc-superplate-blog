export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  ObjectID: any;
  timestamptz: any;
  uuid: any;
};




export type CapsulesFind = {
  id?: Maybe<Scalars['ID']>;
  landings?: Maybe<Scalars['Int']>;
  mission?: Maybe<Scalars['String']>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};



export type CoresFind = {
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  missions?: Maybe<Scalars['String']>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  water_landing?: Maybe<Scalars['Boolean']>;
};












export type HistoryFind = {
  end?: Maybe<Scalars['Date']>;
  flight_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  start?: Maybe<Scalars['Date']>;
};





export type LaunchFind = {
  apoapsis_km?: Maybe<Scalars['Float']>;
  block?: Maybe<Scalars['Int']>;
  cap_serial?: Maybe<Scalars['String']>;
  capsule_reuse?: Maybe<Scalars['String']>;
  core_flight?: Maybe<Scalars['Int']>;
  core_reuse?: Maybe<Scalars['String']>;
  core_serial?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  eccentricity?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Date']>;
  epoch?: Maybe<Scalars['Date']>;
  fairings_recovered?: Maybe<Scalars['String']>;
  fairings_recovery_attempt?: Maybe<Scalars['String']>;
  fairings_reuse?: Maybe<Scalars['String']>;
  fairings_reused?: Maybe<Scalars['String']>;
  fairings_ship?: Maybe<Scalars['String']>;
  gridfins?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  land_success?: Maybe<Scalars['String']>;
  landing_intent?: Maybe<Scalars['String']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
  launch_date_local?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_success?: Maybe<Scalars['String']>;
  launch_year?: Maybe<Scalars['String']>;
  legs?: Maybe<Scalars['String']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  manufacturer?: Maybe<Scalars['String']>;
  mean_motion?: Maybe<Scalars['Float']>;
  mission_id?: Maybe<Scalars['String']>;
  mission_name?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Scalars['Int']>;
  orbit?: Maybe<Scalars['String']>;
  payload_id?: Maybe<Scalars['String']>;
  payload_type?: Maybe<Scalars['String']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['String']>;
  rocket_id?: Maybe<Scalars['String']>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  second_stage_block?: Maybe<Scalars['String']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
  ship?: Maybe<Scalars['String']>;
  side_core1_reuse?: Maybe<Scalars['String']>;
  side_core2_reuse?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  tbd?: Maybe<Scalars['String']>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  tentative?: Maybe<Scalars['String']>;
};
















export type MissionsFind = {
  id?: Maybe<Scalars['ID']>;
  manufacturer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  payload_id?: Maybe<Scalars['String']>;
};





export type PayloadsFind = {
  apoapsis_km?: Maybe<Scalars['Float']>;
  customer?: Maybe<Scalars['String']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Date']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  manufacturer?: Maybe<Scalars['String']>;
  mean_motion?: Maybe<Scalars['Float']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Scalars['Int']>;
  orbit?: Maybe<Scalars['String']>;
  payload_id?: Maybe<Scalars['ID']>;
  payload_type?: Maybe<Scalars['String']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
};
















export type ShipsFind = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  imo?: Maybe<Scalars['Int']>;
  mmsi?: Maybe<Scalars['Int']>;
  abs?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  weight_lbs?: Maybe<Scalars['Int']>;
  weight_kg?: Maybe<Scalars['Int']>;
  year_built?: Maybe<Scalars['Int']>;
  home_port?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  speed_kn?: Maybe<Scalars['Int']>;
  course_deg?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  successful_landings?: Maybe<Scalars['Int']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  mission?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};



/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};




/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  rocket?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  twitter?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
};


/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  name?: Maybe<Order_By>;
  rocket?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
};


/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  name?: Maybe<Order_By>;
  rocket?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
};


/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  rocket?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rocket = 'rocket',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Twitter = 'twitter'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rocket = 'rocket',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Twitter = 'twitter'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetLaunchesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetLaunchesQuery = { __typename?: 'Query', launchesPast?: Maybe<Array<Maybe<{ __typename?: 'Launch', mission_name?: Maybe<string>, launch_year?: Maybe<string>, id?: Maybe<string>, links?: Maybe<{ __typename?: 'LaunchLinks', mission_patch_small?: Maybe<string>, mission_patch?: Maybe<string> }>, rocket?: Maybe<{ __typename?: 'LaunchRocket', rocket_name?: Maybe<string> }> }>>> };

export type GetLaunches2QueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetLaunches2Query = { __typename?: 'Query', launchesPast?: Maybe<Array<Maybe<{ __typename?: 'Launch', mission_name?: Maybe<string>, launch_year?: Maybe<string>, links?: Maybe<{ __typename?: 'LaunchLinks', mission_patch_small?: Maybe<string>, mission_patch?: Maybe<string> }>, rocket?: Maybe<{ __typename?: 'LaunchRocket', rocket_name?: Maybe<string> }> }>>> };
