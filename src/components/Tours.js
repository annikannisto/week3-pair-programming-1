import React from "react";
import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section tours" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center tours-center">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours; 