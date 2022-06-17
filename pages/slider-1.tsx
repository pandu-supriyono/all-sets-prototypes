import { NextPage } from "next";
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import Div100vh from 'react-div-100vh'
import sliderStyles from "../styles/Slider1.module.css";
import { useRanger } from "react-ranger";

export const SliderPrototype1Page: NextPage = () => {
  const [values, setValues] = useState([10]);
  const [noteIsCollapsed, setNoteIsCollapsed] = useState(false)

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (textAreaRef.current && noteIsCollapsed) {
      textAreaRef.current.focus()
    }
  }, [noteIsCollapsed])

  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 100,
    stepSize: 1,
    values,
    onDrag: setValues,
  });
  return (
    <>
      <Div100vh style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <header className={sliderStyles["top-bar"]}></header>
        <div className={sliderStyles.container}>
          <div className={sliderStyles.header}>
            <span className={sliderStyles["header__category"]}>Physical</span>
            <h1 className={sliderStyles["header__question"]}>
              Do you feel that you have enough exercise?
            </h1>
          </div>
          <div
            className={sliderStyles.slider}
            {...getTrackProps({
              style: {
                height: "1rem",
                marginBottom: "1rem",
                background: "lightgray",
                borderRadius: "50px",
              },
            })}
          >
            {handles.map(({ getHandleProps }, idx) => (
              // eslint-disable-next-line react/jsx-key
              <div
                {...getHandleProps({
                  style: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    background: "lightgray",
                    border: "1px solid black",
                  },
                })}
              />
            ))}
          </div>
          <div className={sliderStyles.labels}>
            <div>Too little</div>
            <div className={sliderStyles["labels__slider-position"]}>
              {values[0]}
            </div>
            <div>Too much</div>
          </div>
          <div className={sliderStyles.note}>
            <button onClick={() => setNoteIsCollapsed((val) => !val)} className={sliderStyles["note__button"]}>Add a note</button>
            {
              noteIsCollapsed && (
                <textarea ref={textAreaRef} name="" id="" rows={10} className={sliderStyles["note__textarea"]}></textarea>
              )
            }
          </div>
        </div>
        <div className={sliderStyles.container} style={{
          marginTop: 'auto'
        }}>
          <div className={sliderStyles.end}>
            <small className={sliderStyles["end__questions-left"]}>4 questions left</small>
            <button className={sliderStyles["end__button"]}>Continue</button>
          </div>
        </div>
      </Div100vh>
    </>
  );
};

export default SliderPrototype1Page;
