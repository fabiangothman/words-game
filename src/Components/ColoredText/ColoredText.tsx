import { useEffect, useState } from 'react';
import { highColors } from '../../Utils/Colors';
// Styles
import styles from './ColoredText.module.scss';

type ColoredTextProps = {
  text: string,
}

const ColoredText = ({
  text,
}: ColoredTextProps) => {
  // console.log(`Props: `, props);
  // return null;
  const textArray = text.split("");
  const [colorsRandom, setColorsRandom] = useState(
    Array(...Array(textArray.length)).map(() => highColors[0]),
  );

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const newColors = colorsRandom.map(() => highColors[Math.floor(Math.random()*highColors.length)]);
    setColorsRandom(newColors);
  }, []);

  return (
    <div id="coloredText" className={styles.coloredText}>
      {textArray.map((char, index) => (
        <span
          key={index}
          style={{color:colorsRandom[index]}}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
export default ColoredText;
