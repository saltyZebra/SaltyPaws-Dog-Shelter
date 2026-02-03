import React from "react";
import "../components/HomePage/Home.css";

function Home() {
  return (
    <>
      <main className="home">
        <section className="home-bg">
          <h1>Welcome to Salty Paws Dog Shelter</h1>
          <h4>
            <em>Every heartbeat matters</em>
          </h4>
          <section className="text-sections">
            <h2>Our Mission</h2>
            <p>
              At our shelter, we believe every dog deserves love, safety, and a
              second chance. Our mission is to rescue, protect, and care for
              dogs in need, while helping them find the forever homes they
              deserve. With compassion, patience, and respect, we work to give
              each dog the opportunity to live a happy, healthy, and meaningful
              life — because every dog matters.
            </p>
          </section>

          <section className="text-sections">
            <h2>Events</h2>
            <section className="event-section">
              <p>
                <b>Agility Training Day</b>
              </p>
              <p>
                <b>Date & time: </b>10:00-13:00 25-02-2026
              </p>
              <p>
                Join us for an energetic agility training session with our most
                active dogs. A fun and rewarding way to help them build
                confidence, strength, and joy.
              </p>
            </section>

            <section className="event-section">
              <p>
                <b>Adoption & Meet-and-Greet Day</b>
              </p>
              <p>
                <b>Date & time: </b>12:00-15:00 15-03-2026
              </p>
              <p>
                Come meet our wonderful dogs, spend some time together, and
                learn more about adoption. You might just meet your new best
                friend.
              </p>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
