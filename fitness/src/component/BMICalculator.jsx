import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight, gender");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    console.log("BMI Value: ", bmiValue); // Debug log

    if (bmiValue < 18.5) {
      toast.warning("aap kuposhan ke shikar hai khaya piya kijia.");
    }
     else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have a normal weight.");
    } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
      toast.warning("mote thoda kam khaya kar.");
    } else {
      toast.error("abe saale mote thoda kam khaya kar warna fulke fatt jayega.");
    }
  };

  return (
    <>
      <ToastContainer />
      <section className='bmi'>
        <h1>BMI Calculator</h1>
        <div className="container">
          <div className="wrapper">
            <form onSubmit={calculateBMI}>
              <div>
                <label>Height (CM)</label>
                <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} required />
              </div>
              <div>
                <label>Weight (Kg)</label>
                <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} required />
              </div>
              <div>
                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                  <option value="">Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <button type="submit">Calculate BMI</button>
            </form>
          </div>
          <div className="wrapper">
            <img src="/bmi.jpg" alt="bmiImage" />
          </div>
        </div>
      </section>
    </>
  );
}

export default BMICalculator;
