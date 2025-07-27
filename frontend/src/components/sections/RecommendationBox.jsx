import React from 'react';
import { Lightbulb } from 'lucide-react';

const RecommendationBox = () => {
  return (
    <div className="relative bg-purple-600 text-white rounded-2xl px-6 py-4 w-[360px] h-[100px] overflow-hidden">
      
      <Lightbulb className="absolute left-4 top-3 w-16 h-16 opacity-10 text-white" />

      <div className="relative z-10">
        <p className="text-sm text-white/80 font-medium">
          Smart Recommendation-
        </p>
        <h3 className="text-md font-bold leading-tight mt-1">
          How to reduce spending by 10%?
        </h3>
      </div>
    </div>
  );
};

export default RecommendationBox;