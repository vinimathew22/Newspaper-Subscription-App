import React from 'react'
import Navbar from './Navbar'

const ViewSub = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <p class="text-center fs-4 fw-semibold">VIEW SUBSCRIBERS</p>
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone No.</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Email ID</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Anjali R.</td>
                                        <td>7907281004</td>
                                        <td>Adoor, Pathanamthitta</td>
                                        <td>anjaliraj22@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Athira Panicker</td>
                                        <td>9496321148</td>
                                        <td>Karunagappally, Kollam</td>
                                        <td>aathirapanicker99@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Binoy Thomas</td>
                                        <td>9698773145</td>
                                        <td>Nooranad, Alappuzha</td>
                                        <td>thomasbin007@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Charles Abraham</td>
                                        <td>7929825630</td>
                                        <td>Thiruvalla, Pathanamthitta</td>
                                        <td>charles11abhram@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Fathima Mariyam</td>
                                        <td>9496098346</td>
                                        <td>Charummoodu, Alappuzha</td>
                                        <td>fathimam122@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Ishan Sankar</td>
                                        <td>9698024819</td>
                                        <td>Kottarakara, Kollam</td>
                                        <td>govindkrisha87@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Karthik Vijay</td>
                                        <td>9896560126</td>
                                        <td>Elanthoor, Pathanamthitta</td>
                                        <td>karthikvv1209@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>Mary Anthony</td>
                                        <td>751248973</td>
                                        <td>Changanassery, Kottayam</td>
                                        <td>mmanthony731@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>Praisy Biju</td>
                                        <td>6254098209</td>
                                        <td>Aluva, Ernakulam</td>
                                        <td>praisyelizbiju21@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>Mohammed Shafi</td>
                                        <td>9496783476</td>
                                        <td>Vaikom, Kottayam</td>
                                        <td>mohammedshafi90@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewSub
