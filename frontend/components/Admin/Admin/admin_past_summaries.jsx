import React,{useState , useEffect} from "react";
import Footer from './admin_dashaboard Footer.jsx';
import Nav from './admin_dashboard Nav.jsx';
import SlideNav from './admin_dashboard SlideNav.jsx';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Admin_past_summaries(){
   const [fastConferences,set_fastConference] = useState([]);
   useEffect(() => {
    axios.get('http://localhost:6060/admin_accept_budject/retriveYearsSummeries')
    .then(res => set_fastConference(res.data))
    .catch(error => console.log(error));
  },[]);
return (
     <div class="sb-nav-fixed">
        <Nav/>
        <div id="layoutSidenav">
            <SlideNav/>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <div className="container-fluid px-4 pt-5 mt-3">
                           <h2 className="text-center text-uppercase text-dark">Past Conference Bujects</h2>
                       </div>
                       <div className="text-end mr-3">
                         <a href="Admin_BudjectView">
                            <button type="button" class="btn btn-dark btn-sm">Back</button>
                         </a>
                       </div>
                       <div className="container mt-3">
                       <div class="row">
                          {fastConferences.map((fastConference,key) => (
                        <div class="col-sm-4">
                          <div class="card m-0 p-0">
                            <div class="card-body m-0 p-0">
                              <h3 class="text-center mt-3">{fastConference.year}</h3>
                              <div class="alert alert-dark m-0 rounded-0">
                                  <h6 class="card-title ">
                                    Accepted Income : RS.{fastConference.Acceptedincome}.00<br/>
                                    Accepted Expences : RS.{fastConference.AcceptedExpence}.00<br/>
                                  </h6>
                              </div>
                              <div class="alert alert-secondary m-0 rounded-0">
                                  <h6 class="card-title ">
                                    Accepted Income : RS.{fastConference.ActualExpence}.00<br/>
                                    Accepted Expences : RS.{fastConference.Actualincome}.00<br/>
                                  </h6>
                              </div>
                                <div class="alert alert-warning m-0 rounded-0">
                                  <h6 class="card-warning ">
                                    Actual Balance : RS.{ parseInt(fastConference.Actualincome)- parseInt(fastConference.ActualExpence)}.00<br/>
                                    Accepted Balance : RS.{ parseInt(fastConference.Acceptedincome)- parseInt(fastConference.AcceptedExpence)}.00<br/>
                                  </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                          ))}
                       </div>
                       </div>
                    </div>
                </main>
            
            </div>
        </div>
        </div>
   )
}