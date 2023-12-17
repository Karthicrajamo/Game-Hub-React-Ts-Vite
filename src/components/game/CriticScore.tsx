import React from 'react'

interface Props{
    score: number;
}

const CriticScore = ({score}: Props) => {
    let color: string = score > 90 ? 'bg-green-100 text-green-600' : score > 80 ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600';

return (
  <div className={`${color} bg-gree p-2 py-1 rounded-xl text-slate-800`}>
    {score}
  </div>
);

}

export default CriticScore