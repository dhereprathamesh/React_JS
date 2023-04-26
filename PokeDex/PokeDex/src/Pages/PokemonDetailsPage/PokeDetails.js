import React from "react";
import Paper from "@mui/material/Paper";
import { Chart, BarSeries } from "@devexpress/dx-react-chart-material-ui";
import "../../Common/Cards/Card.css";

const PokeDetails = ({ data, loading }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            />
          )}
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <>
                  <h3>
                    {poke.stat.name}:{poke.base_stat}
                  </h3>
                </>
              );
            })}
          </div>
          {/* <div>
            {data.stats.map((poke) => {
              return (
                <>
                  <Paper>
                    <Chart>
                      <BarSeries
                        valueField={poke.base_stat}
                        argumentField={poke.stat.name}
                        type="bar"
                      />
                    </Chart>
                  </Paper>
                </>
              );
            })}
          </div> */}
        </>
      )}
    </>
  );
};

export default PokeDetails;
