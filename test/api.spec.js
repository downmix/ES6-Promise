const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const API = "https://jsonplaceholder.typicode.com";

chai.use(chaiHttp);

describe("Post", () => {
  it("should succeed get list", (done) =>{
    chai.request(API)
      .get("/posts")
      .end((err,res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        expect(res.body).to.have.lengthOf(100);
        done();
      });
  });

  it("should succeed create post", (done) =>{
    chai.request(API)
      .post("/posts")
      .send({userId: 1, title: "post test"})
      .end((err,res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        done();
      });
  });
});
