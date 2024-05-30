import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import s from './RecordingTime.module.css';

const RecordingTime = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="time"
      control={control}
      render={({ field }) => (
        <div className={s.wrapper}>
          <label htmlFor="time" className={s.label}>
            Recording time:
          </label>
          <ReactDatePicker
            id="time"
            selected={field.value || new Date()}
            onChange={date => {
              field.onChange(date);
            }}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={5}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className={s.datepicker}
            wrapperClassName={s.wrapper_datepicker}
          />
        </div>
      )}
    />
  );
};

export default RecordingTime;