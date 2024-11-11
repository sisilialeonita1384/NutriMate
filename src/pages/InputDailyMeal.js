import React from 'react';
import '../styles/InputDailyMeal.css';

const InputDailyMeal = () => {
  return (
    <div className="input-daily-meal">
      <h1>Input Daily Meal</h1>
      <form>
        <label>
          Nama Makanan:
          <input type="text" name="namaMakanan" />
        </label>
        <br />
        <label>
          Jumlah Kalori:
          <input type="number" name="kalori" />
        </label>
        <br />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default InputDailyMeal;
