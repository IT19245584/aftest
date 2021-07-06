const { test } = require('jest')
const request = require('supertest')
const app = require('../routers/ResearchPaper')

//update
//pass update
test("Details Edited", async() => {
    const response = await request (app).post("http://localhost:6060/researchPaper/update/").send({
        topic:"Block Chain",
        university:"Sliit",
        status:"Approved",
        purpose:"Assignment",
        team_leader:"PraveenaT",
        email:"praveena@gmail.com",
        phone: "0776000021",
        document:"platform",
        description:"Technologies related to Block Chain"
    })
    expect(response.statusCode).toBe(200)
})

//fail update
test("Details Edited Failed", async() => {
    const response = await request (app).put("http://localhost:6060/researchPaper/update/").send({
        topic:"Block Chain",
        university:"Sliit",
        status:"null",
        purpose:"Assignment",
        team_leader:"PraveenaT",
        email:"praveena@gmail.com",
        phone: "0776000021",
        document:"platform",
        description:"Technologies related to Block Chain"
    })
    expect(response.statusCode).toBe(400)
})

//view-table
//pass
test("Get All Details of Workshops", async() => {
    const response = await request (app).get("http://localhost:6060/researchPaper/view-all-rp")
    expect(response.statusCode).toBe(200)
})