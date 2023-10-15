"use client"
import React from 'react';

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <svg
        width='100'
        height='100'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <circle cx='50' cy='50' r='45' fill='none' stroke='#3498db' strokeWidth='5'>
          <animate attributeName='r' repeatCount='indefinite' dur='1s' values='0;45;0;0' keyTimes='0;0.125;0.375;1' keySplines='0 0.2 0.8 1;0 0.2 0.8 1' calcMode='spline' begin='0s' />
        </circle>
        <circle cx='50' cy='50' r='45' fill='none' stroke='#f68a0a' strokeWidth='5'>
          <animate attributeName='r' repeatCount='indefinite' dur='1s' values='0;45;45;0' keyTimes='0;0.125;0.625;1' keySplines='0 0.2 0.8 1;0.5 0.2 0.8 1' calcMode='spline' begin='0.125s' />
        </circle>
        <circle cx='50' cy='50' r='45' fill='none' stroke='#f1556c' strokeWidth='5'>
          <animate attributeName='r' repeatCount='indefinite' dur='1s' values='0;45;45;0' keyTimes='0;0.375;0.875;1' keySplines='0 0.2 0.8 1;0.5 0.2 0.8 1' calcMode='spline' begin='0.25s' />
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
