import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../CompCSS/TwoBrightFutures.module.css";

export default function TwoBrightFutures() {
  const navigate = useNavigate();

  return (
    <>
      <div className='Choice'>
        <button id='FutureCityFirst' onClick={() => navigate('/FutureCity')}>
          WonderCity
        </button>
        <button id='FutureCitySecond' onClick={() => navigate('/FutureCity2')}>
          Wonderland
        </button>
      </div>
    </>
  );
}
