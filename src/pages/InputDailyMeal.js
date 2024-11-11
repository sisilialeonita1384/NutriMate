import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaPlusCircle } from 'react-icons/fa';
import breakfastImage from '../assets/icons/breakfast.png';
import dinnerImage from '../assets/icons/dinner.png';
import lunchImage from '../assets/icons/lunch.png';
import motivationImage from '../assets/icons/motivationImage.png';
import snacksImage from '../assets/icons/snacks.png';
import '../styles/InputDailyMeal.css';


const InputDailyMeal = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const progressValue = 0; 

  return (
    <div className="input-daily-meal">
      <header className="page-header">
        <h1>Input Daily Meal</h1>
        <p>{`Today, ${currentDate}`}</p>
      </header>

      <div className="meal-container">
        <div className="meal-wrapper">
          <section className="meal-section">
            <div className="meal-category">
              <h2>Breakfast</h2>
              <div className="meal-card">
                <FaPlusCircle className="add-icon" />
                <p>Add Meals</p>
                <img
                  src={breakfastImage}
                  alt="Breakfast"
                  className="meal-image"
                />
              </div>
            </div>

            <div className="meal-category">
              <h2>Lunch</h2>
              <div className="meal-card">
                <FaPlusCircle className="add-icon" />
                <p>Add Meals</p>
                <img
                  src={lunchImage}
                  alt="Lunch"
                  className="meal-image"
                />
              </div>
            </div>

            <div className="meal-category">
              <h2>Dinner</h2>
              <div className="meal-card">
                <FaPlusCircle className="add-icon" />
                <p>Add Meals</p>
                <img
                  src={dinnerImage}
                  alt="Dinner"
                  className="meal-image"
                />
              </div>
            </div>

            <div className="meal-category">
              <h2>Snacks/Others</h2>
              <div className="meal-card">
                <FaPlusCircle className="add-icon" />
                <p>Add Meals</p>
                <img
                  src={snacksImage}
                  alt="Snacks"
                  className="meal-image"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="card-wrapper">
          <div className="daily-calorie-card">
            <h2 className="no-data">No Data</h2>
            <div style={{ width: 100, height: 100, margin: '0 auto' }}>
              <CircularProgressbar
                value={progressValue}
                text={`${progressValue}%`}
                strokeWidth={15} 
                styles={buildStyles({
                  textColor: '#FF6000', 
                  pathColor: '#FF6000', 
                  trailColor: '#FFEFE6', 
                  textSize: '20px', 
                })}
              />
            </div>
            <p className="calorie-label">Daily Calorie</p>
            <p className="calorie-value">-</p>
            <div className="calorie-summary">
              <div className="calorie-item">
                <p>Now</p>
                <div className="calorie-count">260</div>
              </div>
              <div className="calorie-item">
                <p>Recommendation</p>
                <div className="calorie-count">400</div>
              </div>
            </div>
          </div>

          <div className="motivational-card">
            <p className="motivational-text">
              A journey of a thousand miles begins with a single step. You’re on your way!
            </p>
            <img
              src={motivationImage}
              alt="Motivational Illustration"
              className="motivational-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDailyMeal;
