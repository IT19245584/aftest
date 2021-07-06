const { test } = require('jest')
const request = require('supertest')
const app = require('../routers/WorkShop')

//update
//pass update
test("Details Edited", async() => {
    const response = await request (app).post("http://localhost:6060/workshop/update/").send({
        topic:"Laravel",
        organization:"SLIIT",
        status:"Approved",
        presenter:"Praveena",
        qualification:"BSC IT",
        email:"praveena@gmail.com",
        phone:"0780998121",
        platform:"zoom",
        date:"2021-07-03",
        from_time:"4.00pm",
        to_time:"7.00pm",
        document:"mong.pdf",
        description:"introduction Session"
    })
    expect(response.statusCode).toBe(200)
})

//fail update
test("Details Edited Failed", async() => {
    const response = await request (app).put("http://localhost:6060/workshop/update/").send({
        topic:"Laravel",
        organization:"SLIIT",
        status:null,
        presenter:"Praveena",
        qualification:"BSC IT",
        email:"praveena@gmal.com",
        phone:"07809981",
        platform:"zoom",
        date:"2021-07-03",
        from_time:"4.00pm",
        to_time:"7.00pm",
        document:"mong.pdf",
        description:"introduction Session"
    })
    expect(response.statusCode).toBe(400)
})

//view-table
//pass
test("Get All Details of Workshops", async() => {
    const response = await request (app).get("http://localhost:6060/workshop/view-all-ws/")
    expect(response.statusCode).toBe(200)
})