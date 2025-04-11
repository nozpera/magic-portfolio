"use client";
import { Typewriter } from 'react-simple-typewriter';

export default function HomeSubline() {
  return (
    <span>
      <Typewriter
        words={[
          "Ahmad Ryan Permana.",
          "a Data Scientist at Empirix Research.",
          "Engineer by Nature.",
          "Scientist by Passion."
        ]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={1500}
      />
    </span>
  );
}