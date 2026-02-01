import React from "react";
import BreedInfo from "../components/BecomeAPart/BreedInfo";
import "../components/BecomeAPart/BecomeAPart.css";

function BecomeAPart() {
  return (
    <>
      <h2>Become A Part of the Journey</h2>
      <section>
        <h3>Volunteer</h3>
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
      <h3>Adopt</h3>
      <main className="adopt-section">
        <section>
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
            Please take a look at our breed info to the left. You are also
            welcome to visit us to talk and get guidance on your journey towards
            getting the best gift in life.
          </p>
        </section>
        <section>
          <h4>Find the breed that fits you</h4>
          <BreedInfo />
        </section>
      </main>
    </>
  );
}

export default BecomeAPart;
