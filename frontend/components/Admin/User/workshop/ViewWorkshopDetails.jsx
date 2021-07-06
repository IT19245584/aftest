import React, {useState} from "react";
import axios from 'axios';
import HomePageNav from '../Navigation';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function Workshop(){

    var Workshop = reactLocalStorage.getObject('Workshop');

    const id = Workshop[0];
    const [topic, setTopic] = useState(Workshop[0]);
    const [organization, setOrganization] = useState(Workshop[1]);
    const [presenter, setPresenter] = useState(Workshop[2]);
    const [phone, setPhone] = useState(Workshop[5]);
    const [email, setEmail] = useState(Workshop[4]);
    const [qualification, setQualification] = useState(Workshop[3]);
    const [platform, setPlatform] = useState(Workshop[6]); 
    const [date, setDate] = useState(Workshop[7]);
    const [from_time, setFrom_time] = useState(Workshop[8]);
    const [to_time, setTo_time] = useState(Workshop[9]);
    const [document, setDocument] = useState(Workshop[10]);
    const [description, setDescription] = useState(Workshop[11]);


    function sendData(e){
        e.preventDefault();
        const Workshop = {
            topic,
            organization,
            presenter,
            phone,
            email,
            qualification,
            platform,
            date,
            from_time,
            to_time,
            document,
            description
        }

        
        axios.get("http://localhost:6060/workshop/get/"+id, Workshop).then(()=>{
            const id = 0;
	
		})
    }
    return(
<div> 
    <HomePageNav/>
        <div className="container"><br/>
        <h3>View Workshop Details</h3><br/>
        <form className="row" onSubmit={sendData}>
            
            <div className="col-5 form-group">
                <label for="name" className="form-label">Topic</label>
                    <input type="text" className="form-control" id="name"  disabled={true} value={topic}
                    onChange={(e)=>{
                        setTopic(e.target.value);
                    }}/>
            </div>

            <div className="col-5 form-group">
                <label for="age" className="form-label">Organization</label>
                    <input type="text" className="form-control" id="age"  value={organization}
                    onChange={(e)=>{
                        setOrganization(e.target.value);
                    }} disabled/>
            </div>

            <div className="col-5 form-group">
                <label for="gender" className="form-label">Presenter</label>
                    <input type="text" className="form-control" id="gender"  value={presenter}
                    onChange={(e)=>{
                        setPresenter(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="gender"  value={phone}
                    onChange={(e)=>{
                        setPhone(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Email</label>
                    <input type="text" className="form-control" id="gender"  value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Qualification</label>
                    <input type="text" className="form-control" id="gender"  value={qualification}
                    onChange={(e)=>{
                        setQualification(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Platform</label>
                    <input type="text" className="form-control" id="gender"  value={platform}
                    onChange={(e)=>{
                        setPlatform(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Date</label>
                    <input type="text" className="form-control" id="gender"  value={date}
                    onChange={(e)=>{
                        setDate(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">From Date</label>
                    <input type="text" className="form-control" id="gender"  value={from_time}
                    onChange={(e)=>{
                        setFrom_time(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">To Date</label>
                    <input type="text" className="form-control" id="gender"  value={to_time}
                    onChange={(e)=>{
                        setTo_time(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Document</label>
                    <input type="text" className="form-control" id="gender"  value={document}
                    onChange={(e)=>{
                        setDocument(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Description</label>
                    <input type="text" className="form-control" id="gender"  value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }} disabled/>
            </div>
        </form>
        </div>
        </div>
    )
                }
