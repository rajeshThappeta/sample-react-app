import React from 'react'
import { useForm } from 'react-hook-form'


function Registration() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    //form submission
    const onFormSubmit = (userData) => {
        console.log(userData)
    }

    return (
        <div className='row mt-3'>
            <p className="display-1 text-success text-center">User registration</p>
            <div className="col-11 col-sm-8 col-md-6 mx-auto mt-3">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    {/* username */}
                    <div className="mb-3">
                        <label htmlFor="un">Username</label>
                        <input type="text" id="un" className="form-control" {...register("username")} />
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" {...register("email")} />
                    </div>
                    {/* date of birth */}
                    <div className="mb-3">
                        <label htmlFor="dob">Date of birth</label>
                        <input type="date" id="dob" className="form-control" {...register("dob")} />
                    </div>
                    {/* select branch */}
                    <div className="mb-3">
                        <label htmlFor="branch">Branch</label>
                        <select id="branch" className="form-select" {...register("branch")} defaultValue={'CSE'}>

                            <option value="cse">CSE</option>
                            <option value="it">IT</option>
                            <option value="ece">ECE</option>
                        </select>
                    </div>
                    {/* gender */}
                    <div className="mb-3">
                        <label>Choose a gender</label>
                        {/* male */}
                        <div className="form-check">
                            <input type="radio" id="male" className="form-check-input" {...register("gender")} value="male" />
                            <label htmlFor="male" className="form-check-label">Male</label>
                        </div>
                        {/* female */}
                        <div className="form-check">
                            <input type="radio" id="male" className="form-check-input" {...register("gender")} value="female" />
                            <label htmlFor="female" className="form-check-label">Female</label>
                        </div>
                    </div>

                    {/* user feedback */}
                    <div className="mb-3">
                        <label htmlFor="feedback">Feedback</label>
                        <textarea id="feedback" rows="5" className="form-control" {...register("feedback")}></textarea>
                    </div>
                    {/* submit button */}
                    <button type="submit" className="btn btn-success w-100">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Registration
