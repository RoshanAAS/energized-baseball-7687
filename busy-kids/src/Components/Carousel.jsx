// import React, { Component } from "react";

import React from "react";
import Slider from "react-slick";

export default function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div  >
      <Slider style={{height:'500px'}} {...settings}>
        <div style={{ width: "100%", height: "300px" }}>
          <img
            style={{ width: "90%", height:'500px',margin:'auto' }}
            src="https://media.istockphoto.com/id/482805813/photo/young-boy-nerd-saves-money-in-his-piggy-bank.jpg?s=612x612&w=0&k=20&c=lKSU58xlppXDZOeLK4vaY7n_7oGAjdTG9TTlMYeesHY="
            alt="banner"
          />
        </div>
        <div style={{ width: "100%", height: "300px" }}>
          <img
            style={{ width: "90%", height:'500px',margin:'auto' }}
            src="https://media.istockphoto.com/id/470201459/photo/young-business-children-make-faces-holding-lots-of-money.jpg?s=612x612&w=0&k=20&c=ygSAoTe0SHnD9luZSVHHqiTtpPLC7ptu41-0y1QOXFo="
            alt="image"
          />
        </div>
        <div style={{ width: "100%", height: "300px" }}>
          <img
            style={{ width: "90%", height:'500px',margin:'auto' }}
            src="https://media.istockphoto.com/id/143174484/photo/young-nerd-boy-wearing-glasses-holding-calculator.jpg?s=612x612&w=0&k=20&c=OgkVslPR23x6hMxb7sbApdhs3MTJh30eR10sX23TEeo="
            alt="frome"
          />
        </div>
        <div style={{ width: "100%", height: "300px" }}>
          <img
            style={{ width: "90%", height:'500px',margin:'auto' }}
            src="https://media.istockphoto.com/id/1001817774/photo/little-accountant.jpg?s=612x612&w=0&k=20&c=-UzlymcaJEXgwduAlWM5GKyo7s6VaD4WaQRIR1u9nec="
            alt="frome"
          />
        </div>
        <div style={{ width: "100%", height: "300px" }}>
          <img
            style={{ width: "90%", height:'500px',margin:'auto' }}
            src="https://media.istockphoto.com/id/1086903378/photo/brother-and-sister-saving-money.jpg?s=612x612&w=0&k=20&c=Dk1Fe5Wh0Nt149IaWXheLLAZfpBKk211s0cYtNKKbzc="
            alt="frome"
          />
        </div>
       
      </Slider>
    </div>
  );
}
