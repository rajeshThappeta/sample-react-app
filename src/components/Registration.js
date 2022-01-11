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
                        <input type="text" id="un" className="form-control" {...register("username", { required: true, minLength: 4 ,maxLength:6})} />
                        {/* validation error msg for username */}
                        {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 6</p>}
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" {...register("email", { required: true })} />
                        {/* validation error msg for email */}
                        {errors.email?.type === 'required' && <p className='text-danger'>* Email required</p>}
                    </div>
                    {/* date of birth */}
                    <div className="mb-3">
                        <label htmlFor="dob">Date of birth</label>
                        <input type="date" id="dob" className="form-control" {...register("dob", { required: true })} />
                        {/* validation error msg for username */}
                        {errors.dob?.type === 'required' && <p className='text-danger'>* Date of birth required</p>}
                    </div>
                    {/* select branch */}
                    <div className="mb-3">
                        <label htmlFor="branch">Branch</label>
                        <select id="branch" className="form-select" {...register("branch", { required: true })} defaultValue={'CSE'}>

                            <option value="cse">CSE</option>
                            <option value="it">IT</option>
                            <option value="ece">ECE</option>
                        </select>
                        {/* validation error msg for branch */}
                        {errors.branch?.type === 'required' && <p className='text-danger'>* Branch is required</p>}
                    </div>
                    {/* gender */}
                    <div className="mb-3">
                        <label>Choose a gender</label>
                        {/* male */}
                        <div className="form-check">
                            <input type="radio" id="male" className="form-check-input" {...register("gender", { required: true })} value="male" />
                            <label htmlFor="male" className="form-check-label">Male</label>
                        </div>
                        {/* female */}
                        <div className="form-check">
                            <input type="radio" id="male" className="form-check-input" {...register("gender", { required: true })} value="female" />
                            <label htmlFor="female" className="form-check-label">Female</label>
                        </div>
                        {/* validation error msg for gender */}
                        {errors.gender?.type === 'required' && <p className='text-danger'>* Gender required</p>}
                    </div>

                    {/* user feedback */}
                    <div className="mb-3">
                        <label htmlFor="feedback">Feedback</label>
                        <textarea id="feedback" rows="5" className="form-control" {...register("feedback", { required: true })}></textarea>
                        {/* validation error msg for feedback */}
                        {errors.feedback?.type === 'required' && <p className='text-danger'>* Feedback is  required</p>}
                    </div>
                    {/* submit button */}
                    <button type="submit" className="btn btn-success w-100 mb-4">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Registration
