import React from 'react';
import './ExerciseDetails.css';

function ExerciseDetails() {

const exercises = [
  {
    id: 1,
    videoUrl: 'https://www.example.com/video1.mp4',
    description: 'This is the description for exercise 1.'
  },
  {
    id: 2,
    videoUrl: 'https://www.example.com/video2.mp4',
    description: 'This is the description for exercise 2.'
  },
  // Add more exercises as needed
];
  return (
<>
<div>ExerciseDetails</div>
<div className="exercise-container">
      {exercises.map((exercise, index) => (
        <div
          key={exercise.id}
          className={`exercise ${index % 2 === 0 ? 'left-video' : 'right-video'}`}
        >
          {index % 2 === 0 ? (
            <>
              <div className="video-container">
                <video src={exercise.videoUrl} controls></video>
              </div>
              <div className="description-container">
                <p>{exercise.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="description-container">
                <p>{exercise.description}</p>
              </div>
              <div className="video-container">
                <video src={exercise.videoUrl} controls></video>
              </div>
            </>
          )}
        </div>
      ))}
    </div>

</>  
)
}

export default ExerciseDetails