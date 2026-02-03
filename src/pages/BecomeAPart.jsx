import React from "react";
import BreedInfo from "../components/BecomeAPart/Adopt";
import "../components/BecomeAPart/BecomeAPart.css";

function BecomeAPart() {
  return (
    <>
      <h1>Become A Part of the Journey</h1>
      <section className="volunteer-section">
        <h2>Volunteer</h2>
        <section>
          <p>
            There are many ways to make a difference at our shelter, and every
            helping hand matters.
          </p>
          <p>
            <b>Shelter Support</b> Help with cleaning, maintenance, and building
            new areas to create a safe and comfortable environment for our dogs.{" "}
            <br />
            <b>Dog Walking</b> Join our regular dog walks every Monday,
            Wednesday, and Saturday and give our dogs exercise, fresh air, and
            companionship. <br />
            <b>Donations</b> Support us by donating toys, dog bowls, treats,
            blankets, and other essentials that bring comfort and joy to our
            dogs.
          </p>
        </section>
      </section>
      <h2>Adopt</h2>
      <main className="adopt-section">
        <section className="adopt-text">
          <h3>Important!</h3>
          <p>
            We're so happy that you consider adopting one of our incredible dogs
            and let it become a member of you family. We want to ensure you that
            with this great happiness comes great responsibility. Dogs gives us
            so much love but they also require a lot of love, training and
            paitence. Our dogs have had a rough start in life and therefore need
            more of our attention. Make sure you are ready to take on this kind
            of responsibility.
          </p>
          <p>
            Please take a look at our breed info to the right. You are also
            welcome to visit us to talk and get guidance on your journey towards
            getting the best gift in life.
          </p>
        </section>
        <section className="breed-section">
          <h3>Find the breed that fits you</h3>
          <BreedInfo />
        </section>
      </main>
    </>
  );
}

export default BecomeAPart;
