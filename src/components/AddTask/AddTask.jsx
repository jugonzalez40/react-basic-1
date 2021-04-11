import React from 'react'
import { useForm } from "react-hook-form";

const AddTask = ({onAdd}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => onAdd(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-form">
      <div className="form-control">
        <label htmlFor="">Task </label>
        <input {...register('text')} type="text" placeholder="Name" />
      </div>

      <div className="form-control">
        <label htmlFor="">Day & Time </label>
        <input {...register('day')} type="text" placeholder="Day"/>
      </div>

      <input type="submit" className="btn btn-block" value="Save Task" />

    </form>
  )
}

export default AddTask
