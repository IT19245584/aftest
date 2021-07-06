import React, {useState} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import {reactLocalStorage} from 'reactjs-localstorage';
import HomePageNav from '../Navigation';

export default function researchpaper(){

    const [topic, setTopic] = useState("");
    const [university, setUniversity] = useState("");
    const [purpose, setPurpose] = useState("");
    const [team_leader, setTeam_leader] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [document, setDocument] = useState("");
    const [description, setDescription] = useState("");
    
    async function sendDate(e){
        e.preventDefault();

        Swal.fire({  
            title: "Success!",
            text: "Successfully Pay!",
            icon: 'success',
            confirmButtonText: "OK",
            confirmButtonColor: "#00B74A",
            type: "success"}).then(okay => {
                if (okay) {
                  window.location.href = "/";
                }
              });
    }
    return(
<div> 
    <HomePageNav/>
    <div className="container">
          <div class="row mt-5 mb-2">
              <div class="col-sm-6">
              <img src="https://i.imgur.com/Gi5lMXq.jpeg" style={{width:'100%'}} class="img-fluid pt-6" alt="Responsive image"/>
              </div>
              <div class="col-sm-6 p-3 bg-light">
              <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px" }}>Payment Details</h2>
              <div >
              <div className="row mb-1">
                  <div class="mb-1 col-6">
                    <label class="form-label">Account Number </label>
                    <input type="text" class="form-control"  placeholder="Enter Account number" onChange={(e) =>{
                              setPassword(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-1 col-4">
                    <label class="form-label">Amount </label>
                    <input type="number" class="form-control"  placeholder="Enter amount" onChange={(e) =>{
                              setPassword(e.target.value);
                            }}/>
                  </div>
                  </div>
                  <div className="row mb-1">
                  <div class="mb-1 col-6">
                    <label class="form-label">Expeir Date </label>
                    <input type="date" class="form-control"  placeholder="" onChange={(e) =>{
                              setPassword(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-1 col-4">
                    <label class="form-label">CVC </label>
                    <input type="number" class="form-control"  placeholder="Enter CVC" onChange={(e) =>{
                              setPassword(e.target.value);
                            }}/>
                  </div>
                  </div>
                  <div class="mb-1 col-10">
                    <label class="form-label">Email </label>
                    <input type="email" class="form-control"  placeholder="Enter Email" onChange={(e) =>{
                              setEmail(e.target.value);
                            }}/>
                  </div>
                </div>
                <br/>
                <div className="text-end pr-4">
              <center><button onClick={sendDate} type="submit" className="btn btn-danger btn-block mb-2" >
                Pay Here <i className="fas fa-angle-double-right"></i>
              </button></center>
            </div>
              </div>
              </div>
        </div>
        
        </div>
          
    )
}
