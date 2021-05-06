let chai = require("chai");
let chaiHttp = require("chai-http");
const { expect } = chai;


chai.use(chaiHttp);
chai.should();

let baseUrl = 'https://bookme-api-react.herokuapp.com';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im1vZHVsZV9pZCI6IjQwNSIsInVybCI6Imh0dHBzOi8vYm9va21lYXBwLmhlcm9rdWFwcC5jb20iLCJwZXJtaXNzaW9uIjoiY3JlYXRlLCByZWFkLCB1cGRhdGUsIGRlbGV0ZSwgcmVhZGFsbCwgbW9kaWZ5YWxsIiwidXNlcl9kZXRhaWwiOnsiYWNjb3VudF9pZCI6IjRhMWFjNTZmLTU1NWItNGJkOS04NjBhLTVmNzUwZjllZDFlYiIsInVzZXJfbmFtZSI6InRvYmlsYXNpbmRlIiwibmFtZSI6Ik9sYXNpbmRlIEFudGhvbnkiLCJlbWFpbCI6InRvYmlsYXNpbmRlMjAxMkB5YWhvby5jb20ifSwibW9kdWxlX25hbWUiOiJCb29rIGFuZCBMZWFybiB1cGRhdGVkIiwiY3VycmVudF9idXNpbmVzcyI6IlRvbnkiLCJidXNpbmVzc2VzIjpbeyJpZCI6MTc4LCJuYW1lIjoiVG9ueSJ9LHsiaWQiOjE5OSwibmFtZSI6IkJsb2cgQ29tcGFueSJ9XSwicHJvZmlsZSI6Ik93bmVyIiwicm9sZV9kZXRhaWxzIjp7InJvbGVfbGV2ZWwiOjAsInJvbGVfbmFtZSI6Ik93bmVyIn0sInNlY3JldCI6IjdzZCFPKCFAJCohIyojIWE5ODkhIUAqIyFAIyYhXiMqISYzaEFTRDk4NyooIyolJCYiLCJwdWJsaWNfa2V5Ijoib2JCV2dZM1dXQ2lObUxpNGVtSGIyMlNTcGU0UXUwIiwicHJpdmF0ZV9rZXkiOiJVMkZzZEdWa1gxODVwUUVhc29od0dwNjhYSFRSWERpUmFtTDZ6ZmxtV0gzei9idXVFSG5oNlV6LzdZWDVSSVZrIiwiYnVzaW5lc3NfZGVmYXVsdF9wZXJtaXNzaW9uIjoiIiwibW9kdWxlX2RlZmF1bHRfcGVybWlzc2lvbiI6IiIsImN1cnJlbnRQcm9maWxlIjoiMiIsInByb2ZpbGVfbG9naW5faG91cnMiOltdLCJwcm9maWxlX2lwX3JhbmVncyI6W10sIm1vZHVsZXMiOlt7Im5hbWUiOiJCbG9nIEFwcCBsb2NhbCIsInVybCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSJ9LHsibmFtZSI6IkJsb2cgU2luZ2xlIExvZ2luIiwidXJsIjoiaHR0cHM6Ly9ibG9nLnNpbmdsZWxvZ2luLmlvIn0seyJuYW1lIjoidG9ueSBtb2R1bGUiLCJ1cmwiOiJodHRwOi8vbG9jYWxob3N0OjMwMDcifSx7Im5hbWUiOiJUb255IGxpdmUiLCJ1cmwiOiJodHRwczovL3RvbnktYmUta2l0LXJlYWN0Lmhlcm9rdWFwcC5jb20ifSx7Im5hbWUiOiJUb255IGJvb2ttZSBwanMiLCJ1cmwiOiJodHRwczovL3RvbnktZmUta2l0Lmhlcm9rdWFwcC5jb20ifSx7Im5hbWUiOiJCb29rIGFuZCBMZWFybiB1cGRhdGVkIiwidXJsIjoiaHR0cHM6Ly9ib29rbWVhcHAuaGVyb2t1YXBwLmNvbSJ9LHsibmFtZSI6InRvbnkgYm9va21lIiwidXJsIjoiaHR0cHM6Ly9ib29rbWUtYXBpLXJlYWN0Lmhlcm9rdWFwcC5jb20ifV0sImRlcGFydG1lbnQiOlt7Im5hbWUiOiJFbmdpbmVlcmluZyIsImlkIjoxODR9XSwibWFuYWdlcnMiOlt7ImVtYWlsIjoic2FobWllbndva29AZ21haWwuY29tIiwibmFtZSI6IlNhbXVlbCBOd29rbyIsImRlcGFydG1lbnRfbmFtZSI6IkVuZ2luZWVyaW5nIiwiZGVwYXJ0bWVudF9pZCI6MTg0fSx7ImVtYWlsIjoidG9iaWxhc2luZGUyMDE0QGdtYWlsLmNvbSIsIm5hbWUiOiJBbnRob255IFRvYmlsb2JhIiwiZGVwYXJ0bWVudF9uYW1lIjoiRW5naW5lZXJpbmciLCJkZXBhcnRtZW50X2lkIjoxODR9XX0sImlhdCI6MTYxOTcwMTcwOSwiZXhwIjoxNjIwMzA2NTA5fQ.sz7scXBCcsZFfnjnO7F36m95QA8GGpq9hJnUf45-orI';

describe('Bookme App API Testing', () => {
  
  // before(done => {
  //   const key = {
  //     "public_key": "obBWgY3WWCiNmLi4emHb22SSpe4Qu0",
  //     "private_key": "U2FsdGVkX185pQEasohwGp68XHTRXDiRamL6zflmWH3z/buuEHnh6Uz/7YX5RIVk",
  //     "module_id": "405"
  //   };
  //   chai
  //     .request(baseUrl)
  //     .post("/")
  //     .send(key)
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       //token  = res.body.token
  //       //console.log(res.body)
  //       //console.log(err)
  //       done();
  //     });
  // });

  describe('GET All Services', () => {
    it("Get all services", function(done) {
        chai.request(baseUrl)
          .get('/services')
          .set({ "Authorization": `Bearer ${token}` })
          .then((res) => {
             expect(res).to.have.status(200)
             expect(res.body.status).to.be.equal(true)
             expect(res.body.data)
                .to.be.an.instanceof(Array)
                .and.to.have.property(0)
            expect(res.body.data[0]).to.have.property('id').and.to.be.a('number')
            res.body.data[0].should.all.have.property('id')
            res.body.should.have.keys('status', 'data', 'message')
            done()
          }).catch((err) => done(err))
     })

     it("Should return an error", function(done) {
      chai.request(baseUrl)
        .get('/service')
        .set({ "Authorization": `Bearer ${token}` })
        .then((res) => {
           expect(res).to.have.status(404)
          done()
        }).catch((err) => done(err))
    })
  })

  describe('POST Create a Service', () => {
     it("POST create a service", function(done) {
      const message_body = {
        "name": "haily" + Math.random(),
        "duration_in_min": 20,
        "charge": 200,
        "description": "come and cut your head, yeah, your head",
        "category_id": 1
      }
      chai.request(baseUrl)
        .post('/services')
        .send(message_body)
        .set({ "Authorization": `Bearer ${token}` })
        .then((res) => {
           expect(res).to.have.status(200)
           expect(res.body.status).to.be.equal(true)
           expect(res.body.data)
              .to.be.an.instanceof(Object)
          expect(res.body.data).to.have.keys('id', 'name', 'duration_in_min', 'charge', 'description', 'category', 'status')
          res.body.should.have.keys('status', 'data', 'message')
          idForService = res.body.data.id
          done()
        }).catch((err) => done(err))
   })
  })

  describe('PUT Update a Service', () => {
    it("PUT Update a service", function(done) {
      const message_body ={
        "id": 71,
        "name": "barbings",
        "duration_in_min": 30,
        "charge": 600,
        "category": "politics",
        "category_id": "1",
        "status": "active",
        "description": "updated"
      }
      chai.request(baseUrl)
        .put('/services')
        .send(message_body)
        .set({ "Authorization": `Bearer ${token}` })
        .then((res) => {
           expect(res).to.have.status(200)
           expect(res.body.status).to.be.equal(true)
           expect(res.body.data).to.be.an.instanceof(Object)
          res.body.should.have.keys('status', 'data', 'message')
          res.body.message.should.be.equal("service updated successfully")
          done()
          }).catch((err) => done(err))
        })
      })

 describe('GET a Service detail', () => {
  it("Get a service detail", function(done) {
      chai.request(baseUrl)
        .get('/services/1')
        .set({ "Authorization": `Bearer ${token}` })
        .then((res) => {
          expect(res).to.have.status(200)
          expect(res.body.status).to.be.equal(true)
          expect(res.body.data).to.be.an.instanceof(Object)
          expect(res.body.data.locations).to.be.an.instanceof(Array)
          res.body.should.have.keys('status', 'data', 'message')
          done()
        }).catch((err) => done(err))
   })

   it("Should return an error", function(done) {
    chai.request(baseUrl)
      .get('/service/300')
      .set({ "Authorization": `Bearer ${token}` })
      .then((res) => {
         expect(res).to.have.status(404)
        done()
      }).catch((err) => done(err))
  })
})

  describe('POST Update Multiple Services', () => {
    it("POST Update multiple services", function(done) {
      const message_body ={
        "ids": [1, 2],
        "status": "inactive"
      }
      chai.request(baseUrl)
        .post('/services/updateStatusForServices')
        .send(message_body)
        .set({ "Authorization": `Bearer ${token}` })
        .then((res) => {
          expect(res).to.have.status(200)
          expect(res.body.status).to.be.equal(true)
          expect(res.body.data).to.be.an.instanceof(Object)
          expect(res.body.data).to.contain.keys("totalServiceCount", "totalServicesUpdated", "totalFailedUpdates", "errors")
          expect(res.body.data.totalServiceCount).to.be.equal(2)
          expect(res.body.data.totalServiceCount).to.be.equal(res.body.data.totalServicesUpdated)
          expect(res.body.data.totalFailedUpdates).to.be.equal(0)
          expect(res.body.data.errors).to.be.an('array')
          res.body.should.have.keys('status', 'data', 'message')
          res.body.message.should.be.equal("services status updated successfully")
          done()
          }).catch((err) => done(err))
        })
  })

  describe('DELETE Delete a Service', () => {
    it("DELETE Delete a Service", function(done) {
      chai.request(baseUrl)
        .delete('/services/' + idForService)
        .set({ "Authorization": `Bearer ${token}` })
        .then((res) => {
          expect(res).to.have.status(200)
          expect(res.body.status).to.be.equal(true)
          expect(res.body.data).to.be.an.instanceof(Object)
          res.body.should.have.keys('status', 'data', 'message')
          res.body.message.should.be.equal("service deleted successfully")
          done()
          }).catch((err) => done(err))
        })

        it("Should return an error", function(done) {
          const message_body ={
            "ids": [1, 2],
            "status": "inactive"
          }
          chai.request(baseUrl)
            .delete('/services/9')
            .send(message_body)
            .set({ "Authorization": `Bearer ${token}` })
            .then((res) => {
              expect(res).to.have.status(404)
              expect(res.body.status).to.be.equal(false)
              res.body.should.have.keys('status', 'message')
              res.body.message.should.be.equal("Service not found")
              done()
              }).catch((err) => done(err))
            })
  })

  // describe('POST Delete Multiple Services', () => {
  //   it("POST delete multiple services", function(done) {
  //     const message_body = {"ids": [forServiceDelete-1, forServiceDelete+1]}
  //     chai.request(baseUrl)
  //       .post('/services/deleteServices')
  //       .send(message_body)
  //       .set({ "Authorization": `Bearer ${token}` })
  //       .then((res) => {
  //         expect(res).to.have.status(200)
  //         expect(res.body.status).to.be.equal(true)
  //         expect(res.body.data).to.contain.keys("totalLocationCount", "totalLocationsDeleted", "totalFailedDelete", "errors")
  //         res.body.should.have.keys('status', 'data', 'message')
  //         res.body.message.should.be.equal("services deleted successfully")
  //         done()
  //         }).catch((err) => done(err))
  //       })
  // })

  describe('POST Create a category', () => {
    it("POST create a category", function(done) {
     const message_body = {
      "name": "accounting" + Math.random(),
      "description": "treat patients"
    }
     chai.request(baseUrl)
       .post('/categories')
       .send(message_body)
       .set({ "Authorization": `Bearer ${token}` })
       .then((res) => {
        expect(res).to.have.status(200)
        expect(res.body.status).to.be.equal(true)
        expect(res.body.data).to.be.an.instanceof(Object)
        expect(res.body.data.id).to.be.a('number')
         res.body.should.have.keys('status', 'data', 'message')
         res.body.message.should.be.equal("category created successfully")
         idForCategory = res.body.data.id
         done()
       }).catch((err) => done(err))
  })
 })

  describe('GET All categories', () => {
    it("Get all categories", function(done) {
        chai.request(baseUrl)
          .get('/categories')
          .set({ "Authorization": `Bearer ${token}` })
          .then((res) => {
            expect(res).to.have.status(200)
            expect(res.body.status).to.be.equal(true)
            expect(res.body.data)
                .to.be.an.instanceof(Array)
                .and.to.have.property(0)
            expect(res.body.data[0]).to.have.property('id').and.to.be.a('number')
            res.body.data[0].should.all.have.property('id')
            res.body.should.have.keys('status', 'data', 'message')
            done()
          }).catch((err) => done(err))
    })

    it("Should return an error", function(done) {
      chai.request(baseUrl)
        .get('/category')
        .set({ "Authorization": `Bearer ${token}` })
        .then((res) => {
          expect(res).to.have.status(404)
          done()
        }).catch((err) => done(err))
    })
  })

  describe('GET a Category detail', () => {
    it("Get a category detail", function(done) {
        chai.request(baseUrl)
          .get('/categories/1')
          .set({ "Authorization": `Bearer ${token}` })
          .then((res) => {
            expect(res).to.have.status(200)
            expect(res.body.status).to.be.equal(true)
            expect(res.body.data).to.be.an.instanceof(Object)
            res.body.should.have.keys('status', 'data', 'message')
            res.body.message.should.be.equal("categry generated successfully")
            done()
          }).catch((err) => done(err))
     })
  
     it("Should return an error", function(done) {
      chai.request(baseUrl)
        .get('/categorie/300')
        .set({ "Authorization": `Bearer ${token}` })
        .then((res) => {
           expect(res).to.have.status(404)
          done()
        }).catch((err) => done(err))
    })
  })

  describe('PUT Update a category', () => {
    it("PUT Update a category", function(done) {
      const message_body ={
        "id": "1",
        "name": "politicking"
      }
      chai.request(baseUrl)
      .put('/categories')
      .send(message_body)
      .set({ "Authorization": `Bearer ${token}` })
      .then((res) => {
          expect(res).to.have.status(200)
          expect(res.body.status).to.be.equal(true)
          expect(res.body.data).to.be.an.instanceof(Object)
        res.body.should.have.keys('status', 'data', 'message')
        res.body.message.should.be.equal("category updated successfully")
        done()
        }).catch((err) => done(err))
      })
    })

      describe('DELETE Delete a category', () => {
        it("DELETE Delete a category", function(done) {
          chai.request(baseUrl)
            .delete('/categories/' + idForCategory)
            .set({ "Authorization": `Bearer ${token}` })
            .then((res) => {
              expect(res).to.have.status(200)
              expect(res.body.status).to.be.equal(true)
              expect(res.body.data).to.be.an.instanceof(Object)
              res.body.should.have.keys('status', 'data', 'message')
              res.body.message.should.be.equal("category deleted successfully")
              done()
              }).catch((err) => done(err))
            })
    
            it("Should return an error", function(done) {
              const message_body ={
                "ids": [1, 2],
                "status": "inactive"
              }
              chai.request(baseUrl)
                .delete('/categories/9')
                .send(message_body)
                .set({ "Authorization": `Bearer ${token}` })
                .then((res) => {
                  expect(res).to.have.status(404)
                  expect(res.body.status).to.be.equal(false)
                  res.body.should.have.keys('status', 'message')
                  res.body.message.should.be.equal("Category not found")
                  done()
                  }).catch((err) => done(err))
                })
      })

//       describe('POST Delete Multiple Categories', () => {
//         it("POST delete multiple categories", function(done) {
//           const message_body = {"ids": ["124", "125"]}
//           chai.request(baseUrl)
//             .post('/categories/deleteCategories')
//             .send(message_body)
//             .set({ "Authorization": `Bearer ${token}` })
//             .then((res) => {
//               expect(res).to.have.status(200)
//               expect(res.body.status).to.be.equal(true)
//               expect(res.body.data).to.contain.keys("totalCategoryCount", "totalCategorysDeleted", "totalFailedDelete", "errors")
//               res.body.should.have.keys('status', 'data', 'message')
//               res.body.message.should.be.equal("categories deleted successfully")
//               done()
//               }).catch((err) => done(err))
//             })
//       })

      describe('POST Create a location', () => {
        it("POST create a location", function(done) {
         const message_body = {
          "name": "starlight" + Math.random(),
          "city": "osogboo",
          "state": "osun state",
          "country": "nigeria",
          "office_no": "32",
          "street_name": "Onward",
          "zip_code": "230222",
          "phone_no": "09876543456",
          "email": "imilitus+TC_03@email.com",
          "manager_id": "582c3a52-e36d-4ce2-aa37-0ccdfffcce3f"
        }      
         chai.request(baseUrl)
           .post('/locations')
           .send(message_body)
           .set({ "Authorization": `Bearer ${token}` })
           .then((res) => {
            expect(res).to.have.status(200)
            expect(res.body.status).to.be.equal(true)
            expect(res.body.data).to.be.an.instanceof(Object)
            expect(res.body.data.id).to.be.a('number')
             res.body.should.have.keys('status', 'data', 'message')
             res.body.message.should.be.equal("location created successfully")
             idForLocation = res.body.data.id
             done()
           }).catch((err) => done(err))
      })
     })
    
      describe('GET All locations', () => {
        it("Get all locations", function(done) {
            chai.request(baseUrl)
              .get('/locations')
              .set({ "Authorization": `Bearer ${token}` })
              .then((res) => {
                expect(res).to.have.status(200)
                expect(res.body.status).to.be.equal(true)
                expect(res.body.data)
                    .to.be.an.instanceof(Array)
                    .and.to.have.property(0)
                expect(res.body.data[0]).to.have.property('id').and.to.be.a('number')
                res.body.data[0].should.all.have.property('id')
                res.body.should.have.keys('status', 'data', 'message')
                done()
              }).catch((err) => done(err))
        })
    
        it("Should return an error", function(done) {
          chai.request(baseUrl)
            .get('/location')
            .set({ "Authorization": `Bearer ${token}` })
            .then((res) => {
              expect(res).to.have.status(404)
              done()
            }).catch((err) => done(err))
        })
      })
    
      describe('GET a location detail', () => {
        it("Get a location detail", function(done) {
            chai.request(baseUrl)
              .get('/locations/40')
              .set({ "Authorization": `Bearer ${token}` })
              .then((res) => {
                expect(res).to.have.status(200)
                expect(res.body.status).to.be.equal(true)
                expect(res.body.data).to.be.an.instanceof(Object)
                res.body.should.have.keys('status', 'data', 'message')
                res.body.message.should.be.equal("location generated successfully")
                done()
              }).catch((err) => done(err))
         })
      
         it("Should return an error", function(done) {
          chai.request(baseUrl)
            .get('/location/300')
            .set({ "Authorization": `Bearer ${token}` })
            .then((res) => {
               expect(res).to.have.status(404)
              done()
            }).catch((err) => done(err))
        })
      })
    
      describe('PUT Update a location', () => {
        it("PUT Update a location", function(done) {
          const message_body ={
            "id": "1",
            "name": "starlight",
            "city": "osogbo",
            "state": "osun state",
            "country": "nigeria2",
            "street_no": "32",
            "street_name": "Onward",
            "zip_code": "230222",
            "phone_number": "09876543456",
            "phone_no": "09876543456",
            "email": "email@email.com",
            "manager_id": "582c3a52-e36d-4ce2-aa37-0ccdfffcce3f",
            "longitude": "",
            "latitude": "",
            "office_no": ""
        }       
          chai.request(baseUrl)
            .put('/locations')
            .send(message_body)
            .set({ "Authorization": `Bearer ${token}` })
            .then((res) => {
               expect(res).to.have.status(200)
               expect(res.body.status).to.be.equal(true)
               expect(res.body.data).to.be.an.instanceof(Object)
              res.body.should.have.keys('status', 'data', 'message')
              res.body.message.should.be.equal("location updated successfully")
              done()
              }).catch((err) => done(err))
            })
        })

        describe('POST Update Multiple Locations Status', () => {
          it("POST Update multiple locations status", function(done) {
            const message_body ={
              "ids": [2, 1, 1],
              "status": "inactive"
          }          
            chai.request(baseUrl)
              .post('/locations/updateStatusForLocations')
              .send(message_body)
              .set({ "Authorization": `Bearer ${token}` })
              .then((res) => {
                 expect(res).to.have.status(200)
                 expect(res.body.status).to.be.equal(true)
                 expect(res.body.data).to.be.an.instanceof(Object)
                res.body.should.have.keys('status', 'data', 'message')
                res.body.data.should.have.keys("totalLocationCount", "totalLocationsUpdated", "totalFailedUpdates", "errors")
                expect(res.body.data.totalLocationCount).to.be.equal(3)
                expect(res.body.data.totalLocationCount).to.be.equal(res.body.data.totalLocationsUpdated)
                expect(res.body.data.totalFailedUpdates).to.be.equal(0)
                expect(res.body.data.errors).to.be.an('array')
                res.body.message.should.be.equal("location status updated successfully")
                done()
                }).catch((err) => done(err))
              })
          })
    
          describe('DELETE Delete a location', () => {
            it("DELETE Delete a location", function(done) {
              chai.request(baseUrl)
                .delete('/locations/' + idForLocation)
                .set({ "Authorization": `Bearer ${token}` })
                .then((res) => {
                  expect(res).to.have.status(200)
                  expect(res.body.status).to.be.equal(true)
                  expect(res.body.data).to.be.an.instanceof(Object)
                  res.body.should.have.keys('status', 'data', 'message')
                  res.body.message.should.be.equal("location deleted successfully")
                  done()
                  }).catch((err) => done(err))
                })
        
                it("Should return an error", function(done) {
                  chai.request(baseUrl)
                    .delete('/locations/800')
                    .set({ "Authorization": `Bearer ${token}` })
                    .then((res) => {
                      expect(res).to.have.status(404)
                      expect(res.body.status).to.be.equal(false)
                      res.body.should.have.keys('status', 'message')
                      res.body.message.should.be.equal("Location not found")
                      done()
                      }).catch((err) => done(err))
                    })
          })
    
//           describe('POST Delete Multiple Locations', () => {
//             it("POST delete multiple locations", function(done) {
//               const message_body = {"ids": ["48", "49"]}
//               chai.request(baseUrl)
//                 .post('/locations/deleteLocations')
//                 .send(message_body)
//                 .set({ "Authorization": `Bearer ${token}` })
//                 .then((res) => {
//                   expect(res).to.have.status(200)
//                   expect(res.body.status).to.be.equal(true)
//                   expect(res.body.data).to.contain.keys("totalLocationCount", "totalLocationsDeleted", "totalFailedDelete", "errors")
//                   res.body.should.have.keys('status', 'data', 'message')
//                   res.body.message.should.be.equal("locations deleted successfully")
//                   done()
//                   }).catch((err) => done(err))
//                 })
//           })



          describe('GET All servicelocations', () => {
            it("Get all servicelocations", function(done) {
                chai.request(baseUrl)
                  .get('/servicelocations')
                  .set({ "Authorization": `Bearer ${token}` })
                  .then((res) => {
                    expect(res).to.have.status(200)
                    expect(res.body.status).to.be.equal(true)
                    expect(res.body.data)
                        .to.be.an.instanceof(Array)
                        .and.to.have.property(0)
                    expect(res.body.data[0]).to.have.property('id').and.to.be.a('number')
                    res.body.data[0].should.all.have.property('id')
                    expect(res.body.data[0]).to.contain.keys('id', "status", 'staff_id', 'service_name', 'location_name')
                    expect(res.body.data[0]).to.contain.keys("status", 'staff_id', 'service_name', 'location_name').and.to.be.a('string')
                    res.body.should.have.keys('status', 'data', 'message')
                    done()
                  }).catch((err) => done(err))
            })
        
            it("Should return an error", function(done) {
              chai.request(baseUrl)
                .get('/servicelocation')
                .set({ "Authorization": `Bearer ${token}` })
                .then((res) => {
                  expect(res).to.have.status(404)
                  done()
                }).catch((err) => done(err))
            })
          })
        
          describe('GET a servicelocation', () => {
            it("Get a servicelocation", function(done) {
                chai.request(baseUrl)
                  .get('/servicelocations/1')
                  .set({ "Authorization": `Bearer ${token}` })
                  .then((res) => {
                    expect(res).to.have.status(200)
                    expect(res.body.status).to.be.equal(true)
                    expect(res.body.data).to.be.an.instanceof(Object)
                    expect(res.body.data.location).to.be.an.instanceof(Object)
                    expect(res.body.data.service).to.be.an.instanceof(Object)
                    expect(res.body.data.service).to.contain.keys('id', 'Name', 'Duration', 'Charge', 'Description', 'BusinessId')
                    expect(res.body.data).to.have.property('id').and.to.be.a('number')
                    res.body.should.have.keys('status', 'data', 'message')
                    res.body.message.should.be.equal("service location generated successfully")
                    done()
                  }).catch((err) => done(err))
             })
          
             it("Should return an error", function(done) {
              chai.request(baseUrl)
                .get('/servicelocation/300')
                .set({ "Authorization": `Bearer ${token}` })
                .then((res) => {
                   expect(res).to.have.status(404)
                  done()
                }).catch((err) => done(err))
            })
          })
        
          describe('PUT Update a servicelocation', () => {
            it("PUT Update a servicelocation", function(done) {
              const message_body ={
                "id": "1",
                "staff_id": "5a1ac56f-555b-4bd9-860a-5f750f9ed1eb",
                "location_id": "1",
                "service_id": "2",
                "status": "active"
              }            
              chai.request(baseUrl)
                .put('/servicelocations')
                .send(message_body)
                .set({ "Authorization": `Bearer ${token}` })
                .then((res) => {
                   expect(res).to.have.status(200)
                   expect(res.body.status).to.be.equal(true)
                   expect(res.body.data).to.be.an.instanceof(Object)
                  res.body.should.have.keys('status', 'data', 'message')
                  res.body.message.should.be.equal("servicelocation updated successfully")
                  done()
                  }).catch((err) => done(err))
                })
            })
    
            describe('POST Update Multiple Service Location Status', () => {
              it("POST Update multiple service locations status", function(done) {
                const message_body ={
                  "ids": [70, 76, 79],
                  "status": "active"
                }              
                chai.request(baseUrl)
                  .post('/servicelocations/updateStatusForServiceLocations')
                  .send(message_body)
                  .set({ "Authorization": `Bearer ${token}` })
                  .then((res) => {
                     expect(res).to.have.status(200)
                     expect(res.body.status).to.be.equal(true)
                     expect(res.body.data).to.be.an.instanceof(Object)
                     expect(res.body.data.totalServiceLocationCount).to.be.equal(3)
                     expect(res.body.data.totalServiceLocationCount).to.be.equal(res.body.data.totalServiceLocationsUpdated)
                     expect(res.body.data.totalFailedUpdates).to.be.equal(0)
                     expect(res.body.data.errors).to.be.an('array')
                    res.body.should.have.keys('status', 'data', 'message')
                    res.body.data.should.have.keys("totalServiceLocationCount", "totalServiceLocationsUpdated", "totalFailedUpdates", "errors")
                    res.body.message.should.be.equal("service location status updated successfully")
                    done()
                    }).catch((err) => done(err))
                  })
              })
        
              describe('DELETE Delete a servicelocation', () => {
                it("DELETE Delete a servicelocation", function(done) {
                  chai.request(baseUrl)
                    .delete('/servicelocations/' + idForServiceLocation)
                    .set({ "Authorization": `Bearer ${token}` })
                    .then((res) => {
                      expect(res).to.have.status(200)
                      expect(res.body.status).to.be.equal(true)
                      expect(res.body.data).to.be.an.instanceof(Object)
                      res.body.should.have.keys('status', 'data', 'message')
                      res.body.message.should.be.equal("service location deleted successfully")
                      done()
                      }).catch((err) => done(err))
                    })
            
                    it("Should return an error", function(done) {
                      chai.request(baseUrl)
                        .delete('/servicelocations/800')
                        .set({ "Authorization": `Bearer ${token}` })
                        .then((res) => {
                          expect(res).to.have.status(404)
                          expect(res.body.status).to.be.equal(false)
                          res.body.should.have.keys('status', 'message')
                          res.body.message.should.be.equal("Service location not found")
                          done()
                          }).catch((err) => done(err))
                        })
              })
        
//               describe('POST Delete Multiple Service location', () => {
//                 it("POST delete multiple Service location", function(done) {
//                   const message_body = {"ids": ["75", "76"]}
//                   chai.request(baseUrl)
//                     .post('/servicelocations/deleteServiceLocations')
//                     .set({ "Authorization": `Bearer ${token}` })
//                     .then((res) => {
//                       expect(res).to.have.status(200)
//                       expect(res.body.status).to.be.equal(true)
//                       expect(res.body.data).to.contain.keys("totalServiceLocationCount", "totalServiceLocationsDeleted", "totalFailedDelete", "errors")
//                       expect(res.body.data.errors).to.an.instanceOf(Object)
//                       res.body.should.have.keys('status', 'data', 'message')
//                       res.body.message.should.be.equal("service locations deleted successfully")
//                       done()
//                       }).catch((err) => done(err))
//                     })
//               })

              describe('POST Create a Booking', () => {
                it("POST create a Booking", function(done) {
                 const message_body = {
                  "staff_id": "4a1ac56f-555b-4bd9-860a-5f750f9ed1eb",
                  "location_id": "12aa",
                  "service_id": "2",
                  "date": "2020-10-12" + Math.floor(Math.random() * 10),
                  "start_time": "10:00",
                  "end_time": "12:00",
                  "customer_id": "582c3a52-e36d-4ce2-aa37-0ccdfffcce3f"
                }              
                 chai.request(baseUrl)
                   .post('/bookings')
                   .send(message_body)
                   .set({ "Authorization": `Bearer ${token}` })
                   .then((res) => {
                    expect(res).to.have.status(200)
                    expect(res.body.status).to.be.equal(true)
                    expect(res.body.data).to.be.an.instanceof(Object)
                    expect(res.body.data.id).to.be.a('number')
                    res.body.should.have.keys('id', 'status', 'location', 'service', 'staff')
                    res.body.should.have.keys('status', 'data')
                    done()
                   }).catch((err) => done(err))
              })
             })
            
              describe('GET All bookings', () => {
                it("Get all bookings", function(done) {
                    chai.request(baseUrl)
                      .get('/bookings')
                      .set({ "Authorization": `Bearer ${token}` })
                      .then((res) => {
                        expect(res).to.have.status(200)
                        expect(res.body.status).to.be.equal(true)
                        expect(res.body.data.bookings)
                            .to.be.an.instanceof(Array)
                            .and.to.have.property(0)
                        expect(res.body.data.total_count).to.be.a('number')
                        expect(res.body.data.bookings[0]).to.have.property('id').and.to.be.a('number')
                        res.body.data.bookings[0].should.all.have.property('id')
                        res.body.should.have.keys('status', 'data', 'message')
                        expect(res.body.message).to.be.equal('bookings listed successfully')
                        done()
                      }).catch((err) => done(err))
                })
            
                it("Should return an error", function(done) {
                  chai.request(baseUrl)
                    .get('/booking')
                    .set({ "Authorization": `Bearer ${token}` })
                    .then((res) => {
                      expect(res).to.have.status(404)
                      done()
                    }).catch((err) => done(err))
                })
              })

              describe('GET All bookings with Details', () => {
                it("Get all bookings with details", function(done) {
                    chai.request(baseUrl)
                      .get('/bookings_details')
                      .set({ "Authorization": `Bearer ${token}` })
                      .then((res) => {
                        expect(res).to.have.status(200)
                        expect(res.body.status).to.be.equal(true)
                        expect(res.body.data)
                            .to.be.an.instanceof(Array)
                            .and.to.have.property(0)
                        expect(res.body.data[0].location).to.contain.keys('id', 'name', 'city', 'state')
                        expect(res.body.data[0]).to.have.property('id').and.to.be.a('number')
                        res.body.data[0].should.have.property('id')
                        res.body.should.have.keys('status', 'data', 'message')
                        expect(res.body.message).to.be.equal('bookings listed successfully')
                        done()
                      }).catch((err) => done(err))
                })
            
                it("Should return an error", function(done) {
                  chai.request(baseUrl)
                    .get('/booking_details')
                    .set({ "Authorization": `Bearer ${token}` })
                    .then((res) => {
                      expect(res).to.have.status(404)
                      done()
                    }).catch((err) => done(err))
                })
              })
            
            
              describe('GET a booking', () => {
                it("Get a booking", function(done) {
                    chai.request(baseUrl)
                      .get('/bookings/80')
                      .set({ "Authorization": `Bearer ${token}` })
                      .then((res) => {
                        expect(res).to.have.status(200)
                        expect(res.body.status).to.be.equal(true)
                        expect(res.body.data).to.be.an.instanceof(Object)
                        expect(res.body.data).to.contain.keys('id', 'cart', 'timesheet', 'review', 'customer', 'location', 'service', 'staff')
                        res.body.should.have.keys('status', 'data', 'message')
                        res.body.message.should.be.equal("booking generated successfully")
                        done()
                      }).catch((err) => done(err))
                 })
              
                 it("Should return an error", function(done) {
                  chai.request(baseUrl)
                    .get('/booking_details/300')
                    .set({ "Authorization": `Bearer ${token}` })
                    .then((res) => {
                       expect(res).to.have.status(404)
                      done()
                    }).catch((err) => done(err))
                })
              })
            
              describe('POST Update Booking Status', () => {
                it("POST Update Booking Status", function(done) {
                  const message_body = {
                    "id": "80",
                    "status": "completed"
                  }
                  chai.request(baseUrl)
                    .post('/bookings/updateStatusForBooking')
                    .send(message_body)
                    .set({ "Authorization": `Bearer ${token}` })
                    .then((res) => {
                       expect(res).to.have.status(200)
                       expect(res.body.status).to.be.equal(true)
                       expect(res.body.data).to.be.an.instanceof(Object)
                      res.body.should.have.keys('status', 'data', 'message')
                      res.body.message.should.be.equal("booking status updated successfully")
                      done()
                      }).catch((err) => done(err))
                    })
                })
        
                describe('POST Update Multiple Bookings Status', () => {
                  it("POST Update multiple bookings status", function(done) {
                    const message_body ={
                      "ids": ["98","99"],
                      "status": "completed"
                    }                  
                    chai.request(baseUrl)
                      .post('/bookings/updateStatusForBookings')
                      .send(message_body)
                      .set({ "Authorization": `Bearer ${token}` })
                      .then((res) => {
                        expect(res).to.have.status(200)
                        expect(res.body.status).to.be.equal(true)
                        expect(res.body.data).to.be.an.instanceof(Object)
                        expect(res.body.data.totalBookingCount).to.be.equal(2)
                        expect(res.body.data.totalBookingCount).to.be.equal(res.body.data.totalBookingsUpdated)
                        expect(res.body.data.totalFailedUpdates).to.be.equal(0)
                        expect(res.body.data.errors).to.be.an('array')
                        res.body.should.have.keys('status', 'data', 'message')
                        res.body.data.should.have.keys("totalBookingCount", "totalBookingsUpdated", "totalFailedUpdates", "errors")
                        res.body.message.should.be.equal("booking status updated successfully")
                        done()
                        }).catch((err) => done(err))
                      })
                  })
                
                  describe('GET All carts', () => {
                    it("Get all carts", function(done) {
                        chai.request(baseUrl)
                          .get('/carts')
                          .set({ "Authorization": `Bearer ${token}` })
                          .then((res) => {
                            expect(res).to.have.status(200)
                            expect(res.body.status).to.be.equal(true)
                            expect(res.body.data.carts)
                                .to.be.an.instanceof(Array)
                                .and.to.have.property(0)
                            expect(res.body.data.total_count).to.be.a('number')
                            expect(res.body.data.carts[0]).to.have.property('id').and.to.be.a('number')
                            res.body.data.carts[0].should.all.have.property('id')
                            res.body.should.have.keys('status', 'data', 'message')
                            expect(res.body.message).to.be.equal('carts listed successfully')
                            done()
                          }).catch((err) => done(err))
                    })
                
                    it("Should return an error", function(done) {
                      chai.request(baseUrl)
                        .get('/booking')
                        .set({ "Authorization": `Bearer ${token}` })
                        .then((res) => {
                          expect(res).to.have.status(404)
                          done()
                        }).catch((err) => done(err))
                    })
                  })
                
                  describe('GET One Cart', () => {
                    it("Get one cart", function(done) {
                        chai.request(baseUrl)
                          .get('/carts/17')
                          .set({ "Authorization": `Bearer ${token}` })
                          .then((res) => {
                            expect(res).to.have.status(200)
                            expect(res.body.status).to.be.equal(true)
                            expect(res.body.data).to.be.an.instanceof(Object)
                            expect(res.body.data.bookings).to.be.an.instanceof(Array)
                            expect(res.body.data).to.contain.keys('id', 'status', 'payment_status', 'bookings', 'customer', 'amount')
                            expect(res.body.data.amount).to.be.a('number')
                            res.body.should.have.keys('status', 'data', 'message')
                            res.body.message.should.be.equal("cart generated successfully")
                            done()
                          }).catch((err) => done(err))
                     })
                  
                     it("Should return an error", function(done) {
                      chai.request(baseUrl)
                        .get('/cart/300')
                        .set({ "Authorization": `Bearer ${token}` })
                        .then((res) => {
                           expect(res).to.have.status(404)
                          done()
                        }).catch((err) => done(err))
                    })
                  })
                
                  describe('POST Update Cart Status', () => {
                    it("POST Update Booking Status", function(done) {
                      const message_body = {
                        "id": "17",
                        "status": "processing"
                      }
                    
                      chai.request(baseUrl)
                        .post('/carts/updateStatus')
                        .send(message_body)
                        .set({ "Authorization": `Bearer ${token}` })
                        .then((res) => {
                           expect(res).to.have.status(200)
                           expect(res.body.status).to.be.equal(true)
                           expect(res.body.data).to.be.an.instanceof(Object)
                          res.body.should.have.keys('status', 'data', 'message')
                          res.body.message.should.be.equal("cart status updated successfully")
                          done()
                          }).catch((err) => done(err))
                        })
                    })
            
                    describe('POST Update Multiple Carts Status', () => {
                      it("POST Update multiple carts status", function(done) {
                        const message_body ={
                          "ids": [17, 20],
                          "status": "pending"
                      }
                      
                        chai.request(baseUrl)
                          .post('/carts/updateStatusForCarts')
                          .send(message_body)
                          .set({ "Authorization": `Bearer ${token}` })
                          .then((res) => {
                            expect(res).to.have.status(200)
                            expect(res.body.status).to.be.equal(true)
                            expect(res.body.data).to.be.an.instanceof(Object)
                            expect(res.body.data.totalCartCount).to.be.equal(2)
                            expect(res.body.data.totalCartCount).to.be.equal(res.body.data.totalCartsUpdated)
                            expect(res.body.data.totalFailedUpdates).to.be.equal(0)
                            expect(res.body.data.errors).to.be.an('array')
                            res.body.should.have.keys('status', 'data', 'message')
                            res.body.data.should.have.keys("totalCartCount", "totalCartsUpdated", "totalFailedUpdates", "errors")
                            res.body.message.should.be.equal("cart status updated successfully")
                            done()
                            }).catch((err) => done(err))
                          })
                      })

                      describe('POST Update Payment Status', () => {
                        it("POST Update payment status", function(done) {
                          const message_body ={
                            "id": "17",
                            "reference": "fersdihkj",
                            "payment_type": "paystack"
                          }                        
                          chai.request(baseUrl)
                            .post('/carts/updatePaymentStatus')
                            .send(message_body)
                            .set({ "Authorization": `Bearer ${token}` })
                            .then((res) => {
                               expect(res).to.have.status(200)
                               expect(res.body.status).to.be.equal(true)
                               expect(res.body.data).to.be.an.instanceof(Object)
                              res.body.should.have.keys('status', 'data', 'message')
                              res.body.message.should.be.equal("Payment status updated successfully")
                              done()
                              }).catch((err) => done(err))
                            })
                        })

                        describe('TIMESHEET', () => {
                          it("POST Check Staff's Availability", function(done) {
                            const message_body ={
                              "staff_id": "de145622-86c2-4a22-9bed-8fd3969a080c",
                              "date": "2012-10-10"
                            }                          
                            chai.request(baseUrl)
                              .post('/timesheets/availability')
                              .send(message_body)
                              .set({ "Authorization": `Bearer ${token}` })
                              .then((res) => {
                                expect(res).to.have.status(200)
                                expect(res.body.status).to.be.equal(true)
                                expect(res.body.data).to.be.an.instanceof(Array)
                                expect(res.body.data[0]).to.have.keys('start_time', 'end_time')
                                res.body.should.have.keys('status', 'data')
                                done()
                                }).catch((err) => done(err))
                              })
                          })
                
            
});