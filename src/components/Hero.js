import React from "react";
import FoodImage from "./../assets/restauranfood.jpg";

const Hero = () => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#495E57",
        width: "100%",
        height: 260,
        top: "10%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          marginLeft: 50,
          marginRight: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#f4ce14" }}>Little Lemon</h1>
        <h3 style={{ color: "#fff" }}>Chicago</h3>
        <p style={{ color: "#fff" }}>
          We are a family owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
      <div style={{ position: "absolute", right: "10%", top: 20 }}>
        <img src={FoodImage} height="300" width="250" />
      </div>

      <button
        style={{
          backgroundColor: "#f4ce14",
          borderColor: "transparent",
          height: 30,
          width: 120,
          borderRadius: 20,
          marginLeft: 50,
        }}
      >
        Reserve a Table
      </button>
    </div>
  );
};

export default Hero;
