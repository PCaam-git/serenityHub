import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface AdviceData {
  slip: {
    id: number;
    advice: string;
  };
}

function Home() {
  const [advice, setAdvice] = useState<string>("Loading inspiration...");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data: AdviceData) => {
        setAdvice(data.slip.advice);
      })
      .catch(() => {
        setAdvice("Breathe deep and keep going");
      });
  }, []);

  return (
    <section className="home-page">
      <div className="home-page__overlay"></div>
      <div className="organic-blob organic-blob--top"></div>
      <div className="organic-blob organic-blob--bottom"></div>

      <div className="home-page__content">
        <div className="home-page__intro animate-entry">
          <h1 className="home-page__headline">
            Your safe space to find wellness and mental health tools.
          </h1>
          <p className="home-page__lead">
            Explore practical resources for mindfulness, movement and nutrition in one place.
          </p>
        </div>

        <div className="advice-card animate-entry delay-1">
          <p className="advice-card__label">Daily inspiration</p>
          <p className="advice-card__text">"{advice}"</p>
        </div>

        <div className="home-page__category-area">
          <h2 className="home-page__section-title animate-entry delay-2">Start your journey</h2>
          <svg className="home-page__path animate-entry delay-2" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path
              d="M0,100 C250,150 750,50 1000,100"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeDasharray="10 10"
              opacity="0.5"
            />
          </svg>

          <div className="cards-container">
            <Link to="/resources?category=mindfulness" className="category-card hover-card animate-entry delay-2">
              <div className="bg-pattern-dots"></div>
              <div className="category-card__content">
                <h3 className="category-card__title">Mindfulness</h3>
                <p className="category-card__text">
                  Meditation techniques and awareness.
                </p>
              </div>
            </Link>

            <Link to="/resources?category=exercise" className="category-card hover-card animate-entry delay-3">
              <div className="bg-pattern-dots"></div>
              <div className="category-card__content">
                <h3 className="category-card__title">Physical Exercise</h3>
                <p className="category-card__text">
                  Activate your body to heal your mind.
                </p>
              </div>
            </Link>

            <Link to="/resources?category=nutrition" className="category-card hover-card animate-entry delay-4">
              <div className="bg-pattern-dots"></div>
              <div className="category-card__content">
                <h3 className="category-card__title">Nutrition</h3>
                <p className="category-card__text">
                  Healthy eating for a healthy brain.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
