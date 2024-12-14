import React from "react";

interface MovieReviewProps {
  attempt: number;
  maxAttempts: number;
  review: string;
}

export const MovieReview = ({ attempt, maxAttempts, review }: MovieReviewProps) => {
  return (
    <div className="bg-card p-3 sm:p-4 rounded-lg shadow-lg mb-4 sm:mb-6 border-2 border-accent">
      <p className="text-base sm:text-lg mb-2 sm:mb-3 text-center font-semibold">
        <strong>
          {attempt === maxAttempts 
            ? "Final Hint:" 
            : `Review ${attempt}:`}
        </strong>
      </p>
      <p className="text-base sm:text-lg text-card-foreground text-center font-serif italic">{review}</p>
    </div>
  );
};