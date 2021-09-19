import React from "react";
import { useQuery } from "@apollo/client";

import { GET_LAUNCHES } from "./graphql";
import {
    GetLaunches2,
    GetLaunches2Variables,
} from "@graphqlTypes/GetLaunches2";

export const GraphQLExample: React.FC = () => {
    const { data, loading, error } = useQuery<
        GetLaunches2,
        GetLaunches2Variables
    >(GET_LAUNCHES, {
        variables: { limit: 2 },
    });

    if (loading) return <p>Loading..</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;
    if (!data.launchesPast) return <p>Missing Past Launches</p>;

    return (
        <div>
            <div>Last 2 Space-X Launches</div>
            <div>
                {data.launchesPast.map((val: any) => {
                    if (!val) return <p>Null Val</p>;
                    if (!val.links) return <p>Null Links</p>;
                    if (!val.links.mission_patch_small)
                        return <p>Null Mission Patch</p>;
                    if (!val.rocket) return <p>Null Val</p>;
                    return (
                        <div>
                            <img src={val.links.mission_patch_small} />
                            <div>
                                <h3>{val.mission_name}</h3>
                                <div>
                                    <div>
                                        <h4>Rocket:</h4>
                                        <span>{val.rocket.rocket_name}</span>
                                    </div>
                                    <div>
                                        <h4>Launch year:</h4>
                                        <span>{val.launch_year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
