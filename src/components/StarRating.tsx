interface StarRatingProps {
  rating: number; // 0–5, supports halves via partial fill
  className?: string;
}

/** Accessible star rating — the value is announced via aria-label. */
export default function StarRating({ rating, className = '' }: StarRatingProps) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.max(0, Math.min(1, rating - (star - 1)));
        return (
          <svg
            key={star}
            viewBox="0 0 20 20"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`star-${star}-${rating}`}>
                <stop offset={`${fill * 100}%`} stopColor="#f59e0b" />
                <stop offset={`${fill * 100}%`} stopColor="#44403c" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${star}-${rating})`}
              d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z"
            />
          </svg>
        );
      })}
    </span>
  );
}
