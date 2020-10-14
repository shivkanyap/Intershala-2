import React,{useState} from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions/formaction'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import '../App.css'

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Too Short!')
        .required("username can't be blank"),
    email: Yup.string()
        .email('Invaild email..!!')
        .required("email can't be blank"),
    mobile: Yup.number()
        .min(10, 'Too Short!')
        .max(12, 'Too long..!')
        .required('phone number required'),
    date: Yup.string()
        .required('date can not be blank'),
    rating: Yup.string()
        .required("rate can't be blank"),
    cusinies: Yup.string()
        .required("cusinies can't be blank"),
    suggestion: Yup.string()
        .required("suggestion can't be blank")
})

const options = [
    { value: 'punjabi', label: 'punjabi' },
    { value: 'north', label: 'north' },
    { value: 'south', label: 'south' },
    { value: 'mughali', label: 'mughali' },
    { value: 'rajasthani', label: 'rajasthani' }
  ];

const  Feedback =(props)=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const [date,setDate]=useState(new Date())
    const [rating,setRating]=useState()
    const [suggestion,setSuggestion]=useState('')
    const [cusinies,setCusine]=useState([])
    const [recommandation,setRecom]=useState('')

  const   handleSubmit=(e)=>{
        console.log('u clicked')
        e.preventDefault()
        const formData={
            name:name,
            email:email,
            mobile:mobile,
            rating:rating,
            cusinies:cusinies,
            suggestion:suggestion,
            recommandation: recommandation
            
            
        }
        console.log(formData)
        props.fetchUser(formData)
        
    }
    
const handleChange=(cusinies)=>{
    console.log(cusinies,' in t')
    setCusine(cusinies)
}

        return(
         <div className="formdata">
            <h3>FeedBack from Customer</h3>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    mobile: '',
                    date: '',
                    rating: '',
                    cusinies: '',
                    suggestion: ''
                    }}
                validationSchema={FeedbackSchema}
                onSubmit={handleSubmit}
            >
            {({ errors, touched }) => (
                <Form >
                    <div className="form-group col-4">
                        <label> Name: 
                            <Field  
                            type="text" 
                            className="form-control" 
                            name="name" 
                            value={name} 
                            onChange={e=>setName(e.target.value)}
                            placeholder="enter your name"
                            />
                            {/* <div>{touched.name}</div> */}
                            {(errors.name && touched.name) ? (<div className="errormsg">{errors.name}</div>) : null }
                        </label>
                    </div>
                    <div className="form-group col-4">
                        <label >Email address
                            <Field type="email" 
                            className="form-control" 
                            size="sm" name="email" 
                            onChange={e=>setEmail(e.target.value)}  
                            value={email} id="exampleInputEmail1" aria-describedby="emailHelp" 
                            placeholder="Enter email"/>
                            {errors.email && touched.email ? (<div className="errormsg">{errors.email}</div>) : null }
                        </label>
                    </div>
                    <div className="form-group col-4">
                        <label>Phone
                            <Field type="number" 
                            className="form-control" 
                            name="mobile" 
                            onChange={e=>setMobile(e.target.value)} 
                            value={mobile} 
                            placeholder="Enter mobile number"/>
                            {errors.mobile && touched.mobile ? (<div className="errormsg">{errors.mobile}</div>) : null }
                        </label>
                    </div>
                    <div className="form-group col-4"> 
                        <label className="control-label col-4 " > date: 
                        <DatePicker selected={date} onChange={e=>setDate(e)}/>
                    {/* <input type="date" className="form-control" 
                     id="date" name="date"  onChange={e=>setDate(e.target.value)} 
                     value={date} placeholder="MM/DD/YYY" type="text"/> */}
                     {errors.date && touched.date ? (<div>{errors.date}</div>) : null }
                     </label>
                    </div>
                    <div className="form-group col-4">
                        <label >Ratings
                        <select multiple className="form-control" 
                        name="rating"  onChange={e=>setRating(e.target.value)}  
                        value={rating} id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                        </label>
                        {errors.rating && touched.rating ? (<div className="errormsg">{errors.rating}</div>) : null }
                    </div>
                    <div>
                    <h4>Cuisine Preference</h4>
                    <div  className="form-group col-4">
                        <Select
                         value={cusinies}
                        onChange={handleChange}
                        options={options}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        isMulti
                        />
                        {errors.rating && touched.rating ? (<div className="errormsg">{errors.rating}</div>) : null }
                    </div>
                    </div>
                    <div className="form-group col-8">
                        <label >Suggestions
                        <textarea className="form-control" 
                        name="suggestion" 
                        onChange={e=>setSuggestion(e.target.value)} 
                        value={suggestion} id="exampleFormControlTextarea1" rows="3">
                        </textarea>
                        {errors.suggestion && touched.suggestion ? (<div className="errormsg">{errors.suggestion}</div>) : null }
                        </label>
                    </div>
                    <h4>Friend Recommadation</h4>
                    <div className="form-check col-4">
                    <input className="form-check-input" 
                    type="radio" name=" recommandation" 
                    id="yes"value="yes" 
                    onChange={e=>setRecom(e.target.value)}/>
                    <label className="form-check-label" >
                         yes
                    </label>
                    </div>
                    <div className="form-check col-4">
                    <input className="form-check-input" 
                    type="radio" name=" recommandation" 
                    id="exampleRadios2" value="no" 
                    onChange={e=>setRecom(e.target.value)}/>
                     <label className="form-check-label">
                            No
                    </label>
                    </div>
                    <div className="form-check col-4">
                    <input className="form-check-input" 
                    type="radio" name=" recommandation" 
                    id="exampleRadios2" value="maybe" 
                    onChange={e=>setRecom(e.target.value)}/>
                     <label className="form-check-label">
                            May Be
                    </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            )}
            </Formik>
        </div>
        )}
        {/* <div className="form-group col-4">
            <label>Phone</label>
            <input type="number" className="form-control" name="mobile" onChange={e=>setMobile(e.target.value)} value={mobile} placeholder="Enter mobile number"/>
        </div>

        <div className="form-group col-4">
                <label >Email address</label>
                <input type="email" className="form-control" size="sm" name="email" onChange={e=>setEmail(e.target.value)}  value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group col-4"> 
        <label className="control-label col-4 " >Date</label>
        <DatePicker selected={date} onChange={e=>setDate(e)}/>
        {/* <input type="date" className="form-control"  id="date" name="date"  onChange={e=>setDate(e.target.value)} value={date} placeholder="MM/DD/YYY" type="text"/> */}
    //   </div>
//       <div className="form-group col-4">
//     <label >Ratings</label>
//     <select multiple className="form-control" name="rating"  onChange={e=>setRating(e.target.value)}  value={rating} id="exampleFormControlSelect2">
//       <option>1</option>
//       <option>2</option>
//       <option>3</option>
//       <option>4</option>
//       <option>5</option>
//     </select>
//   </div>
//   <div className="form-group col-4">
//     <label >Suggestions</label>
//     <textarea className="form-control" name="suggestion" onChange={e=>setSuggestion(e.target.value)} value={suggestion} id="exampleFormControlTextarea1" rows="3"></textarea>
//   </div>
//             <h4>Cuisine Preference</h4>
//             <div  className="form-group col-4">
//             <Select value={setCusine}
//             onChange={e=>e.target.value}
//             options={options}
//             closeMenuOnSelect={false}
//              hideSelectedOptions={false}
//             isMulti
//             />
//             </div>
            
        
//         <h4>Friend Recommadation</h4>
//         <div className="form-check col-4">
            
//     <input className="form-check-input" type="radio" name=" recommandation" id="yes"value="yes" onChange={e=>setRecom(e.target.value)}/>
//      <label className="form-check-label" >
//              yes
//     </label>
//     </div>
//     <div className="form-check col-4">
            
//     <input className="form-check-input" type="radio" name=" recommandation" id="exampleRadios2" value="no" onChange={e=>setRecom(e.target.value)}/>
//      <label className="form-check-label" >
//         No
//     </label>
//     </div>
//     <div className="form-check col-4">
            
//     <input className="form-check-input" type="radio" name=" recommandation" id="exampleRadios2" value="maybe" onChange={e=>setRecom(e.target.value)}/>
//      <label className="form-check-label">
//             May Be
//     </label>
//     </div>
//     <br/>
    
    //     <button type="submit" className="btn btn-primary">Submit</button>
    //     </form>
    //     </div>
    //     )
    // } */}

const mapStatetoProps=state=>({
    user:state.user.form
})
export default connect(mapStatetoProps,{fetchUser})(Feedback) 