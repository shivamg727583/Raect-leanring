

import { useForm } from "react-hook-form";

function UseForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
  };
  console.log(errors);
  // console.log(watch('name'))
  return (
    <div>
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="w-[300px] flex flex-col gap-4 border-2 border-zinc-400 rounded-xl p-3"
      >
        <input
          type="text"
          name="name"
          {...register("name", {
            required: "This is required.",
            maxLength: {
              value: 10,
              message: "This input exceed maxLength.",
            },
            minLength: {
              value: 3,
              message: "This input must be more than 3",
            },
          })}
          placeholder="Enter username"
          className="px-3 py-2 rounded-lg border"
        />
        {errors.name?.type === "required" && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
        <input
          type="email"
          name="email"
          {...register("email")}
          placeholder="Enter email"
          className="px-3 py-2 rounded-lg border"
        />

        <select {...register("city")}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="chennai">Chennai</option>
          <option value="bhopal">Bhopal</option>
        </select>

        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="gender"
            value="male"
            {...register("gender")}
          />{" "}
          Male
        </div>

        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="gender"
            value="female"
            {...register("gender")}
          />{" "}
          Female
        </div> 

        <input
          type="submit"
          value="Submit"
          className="p-3 rounded-xl bg-blue-600 font-bold text-xl text-white"
        />
      </form>
    </div>
  );
}

export default UseForm;
