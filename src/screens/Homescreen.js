import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaAction";

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <div className="row " >
        {loading ? (
          <h1>loading</h1>
        ) : error ? (
          <h1>something went wrong</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-4 " key={pizza._id}>
                <div >
                  <Pizza  pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
