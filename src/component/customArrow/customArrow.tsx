import React from 'react';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomArrow = (props: ArrowProps & { type?: 'next' | 'prev' }) => {
  const isNext = props.className?.includes('slick-next');
  return (
    <button
      className={`bg-[#1C243F] z-10 text-white rounded-full p-2 absolute top-1/2 -translate-y-1/2 ${props.className}`}
      style={props.style}
      onClick={props.onClick}
      type='button'
    >
      {isNext ? '→' : '←'}
    </button>
  );
};

export { CustomArrow };
