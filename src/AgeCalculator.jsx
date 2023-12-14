import React, { useState } from 'react';

function AgeCalculator() {
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });
  const [error, setError] = useState('');

  const calculateAge = () => {
    const birthdate = new Date(birthYear, birthMonth - 1, birthDay);
    const currentDate = new Date();

    if (isNaN(birthdate.getTime()) || birthdate > currentDate) {
      setAge({ years: '--', months: '--', days: '--' });
      setError('Please enter a valid date!');
      return;
    }

    const ageInMilliseconds = currentDate - birthdate;
    const ageDate = new Date(ageInMilliseconds);

    setAge({
      years: ageDate.getUTCFullYear() - 1970,
      months: ageDate.getUTCMonth(),
      days: ageDate.getUTCDate() - 1, // Subtract 1 day due to date calculation
    });
    setError('');
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="birthYear">Year: </label>
      <input
        type="text"
        id="birthYear"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      />
      <label htmlFor="birthMonth">Month: </label>
      <input
        type="text"
        id="birthMonth"
        value={birthMonth}
        onChange={(e) => setBirthMonth(e.target.value)}
      />
      <label htmlFor="birthDay">Day: </label>
      <input
        type="text"
        id="birthDay"
        value={birthDay}
        onChange={(e) => setBirthDay(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      <p>Age: {age.years} years, {age.months} months, {age.days} days</p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default AgeCalculator;





