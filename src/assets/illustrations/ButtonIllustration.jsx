import React from "react";

const ButtonIllustration = ({ customClass }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      width="132"
      height="132"
      viewBox="0 0 132 132"
      class={`start ${customClass}`}
    >
      <defs>
        <filter
          id="Trazado_12261"
          x="0"
          y="0"
          width="132"
          height="132"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood flood-opacity="0.486" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Grupo_5823"
        data-name="Grupo 5823"
        transform="translate(-892 -8571)"
      >
        <g
          transform="matrix(1, 0, 0, 1, 892, 8571)"
          filter="url(#Trazado_12261)"
        >
          <path
            id="Trazado_12261-2"
            data-name="Trazado 12261"
            d="M57,0A57,57,0,1,1,0,57,57,57,0,0,1,57,0Z"
            transform="translate(9 6)"
            fill="#fff"
          />
        </g>
        <g
          id="Grupo_5785"
          data-name="Grupo 5785"
          transform="translate(15.309 -63)"
        >
          <path
            class="color"
            id="Trazado_12260"
            data-name="Trazado 12260"
            d="M363.995,49.991A49.991,49.991,0,1,1,314,0a49.991,49.991,0,0,1,49.991,49.99"
            transform="translate(628.678 8646.999)"
            fill="#fddb00"
          />
          <path
            id="off"
            d="M30.386,60.772A30.292,30.292,0,0,1,4.065,45.638,29.832,29.832,0,0,1,0,30.386a29.971,29.971,0,0,1,7.835-20.3q.177-.177.682-.712t.831-.861a3.681,3.681,0,0,1,.89-.623,2.456,2.456,0,0,1,1.158-.3,3.65,3.65,0,0,1,2.671,1.128,3.65,3.65,0,0,1,1.128,2.671,5.949,5.949,0,0,1-.208,1.661,2.359,2.359,0,0,1-.446.95l-.177.3a22.612,22.612,0,0,0-4.985,7.3A22.058,22.058,0,0,0,7.6,30.386a22.319,22.319,0,0,0,3.057,11.425,22.616,22.616,0,0,0,8.309,8.309,22.88,22.88,0,0,0,22.849,0A22.616,22.616,0,0,0,50.12,41.81a22.8,22.8,0,0,0,1.275-20.237,22.969,22.969,0,0,0-4.926-7.328,3.9,3.9,0,0,1-.89-2.85,3.65,3.65,0,0,1,1.128-2.671A3.65,3.65,0,0,1,49.377,7.6a2.728,2.728,0,0,1,.8.118,3.99,3.99,0,0,1,.623.238,3.128,3.128,0,0,1,.623.474,5.315,5.315,0,0,1,.5.5q.118.15.533.623t.474.533A30.212,30.212,0,0,1,58.368,42.2,29.732,29.732,0,0,1,42.2,58.368a29.808,29.808,0,0,1-11.81,2.4Zm0-30.386a3.748,3.748,0,0,1-3.8-3.8V3.8a3.624,3.624,0,0,1,1.128-2.7,3.727,3.727,0,0,1,2.7-1.1,3.644,3.644,0,0,1,2.671,1.1,3.667,3.667,0,0,1,1.1,2.7v22.79a3.748,3.748,0,0,1-3.8,3.8Z"
            transform="translate(912.295 8666.604)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
};

export default ButtonIllustration;
