const request = require('supertest')
const app = require('../../../backend/routers/user')

//Pass test case
    test("Login Pass", async () => {
      const response = await request(app).post("http://localhost:6060/user/login").send({
        email: "uabarna@gmail.com",
        password: "Admin@23"
      })
      expect(response.statusCode).toBe(200)
    })
	
//Fail test case
    test("Login Failed", async () => {
      const response = await request(app).post("http://localhost:6060/user/login").send({
        email: "uabarna@gmail.com",
        password: "Abarna@23"
      })
      expect(response.statusCode).toBe(400)
    })
