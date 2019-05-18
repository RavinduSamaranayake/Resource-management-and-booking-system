import React, { Component } from "react";
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import Hallitem from "../halls/Hallitem";
import { getHallregs } from "../../actions/hallregActions";


import Calender from "../Calender/Calender";

const style = {
  //this for Calender
  position: "relative",
  margin: "20px auto"
};

class Halls extends Component {
  
  onDayClick = (e ,day) => {
    alert("The Day You Select Is : " + day);
  }

  constructor(props) {
    super(props);
    this.state = {
        // seat1: 50,
        //  seat2: 100,
        //  seat3: 150,
        current1: false,
        current2: false,
        current3: false,

    };

    this.onChange = this.onChange.bind(this);

    this.onCheck = this.onCheck.bind(this);
    this.onCheck1 = this.onCheck1.bind(this);
    this.onCheck2 = this.onCheck2.bind(this);
}


componentDidMount() {
    this.props.getHallregs();
}

onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}

onCheck(e) {

    this.setState({

        current1: !this.state.current1
    });


}

onCheck1(e) {

    this.setState({

        current2: !this.state.current2
    });


}

onCheck2(e) {

    this.setState({

        current3: !this.state.current3
    });


}




  render(){

    let hallItems0; let hallItems1; let hallItems2;
    const { hallregs, loading } = this.props.hallreg;

    if (this.state.current1 === true) {

        if (this.state.current2 === true) {
            this.setState({

                current2: !this.state.current2
            });

        }

        if (this.state.current3 === true) {
            this.setState({

                current3: !this.state.current3
            });

        }


        if (hallregs === null || loading) {
            hallItems0 = <Spinner />;
        } else {
            if (hallregs.length > 0) {
                hallItems0 = hallregs.map(hallreg => (
                    <Hallitem key={hallreg._id} hallreg={hallreg} seat1="50" />
                ));
            } else {
                hallItems0 = <h4>No profiles found...</h4>;
            }
        }
    }

    if (this.state.current2 === true) {

        if (this.state.current1 === true) {
            this.setState({

                current1: !this.state.current1
            });

        }

        if (this.state.current3 === true) {
            this.setState({

                current3: !this.state.current3
            });

        }

        if (hallregs === null || loading) {
            hallItems1 = <Spinner />;
        } else {
            if (hallregs.length > 0) {
                hallItems1 = hallregs.map(hallreg => (
                    <Hallitem key={hallreg._id} hallreg={hallreg} seat1="100" />
                ));
            } else {
                hallItems1 = <h4>No profiles found...</h4>;
            }
        }
    }

    if (this.state.current3 === true) {

        if (this.state.current1 === true) {
            this.setState({

                current1: !this.state.current1
            });

        }

        if (this.state.current2 === true) {
            this.setState({

                current2: !this.state.current2
            });

        }

        if (hallregs === null || loading) {
            hallItems2 = <Spinner />;
        } else {
            if (hallregs.length > 0) {
                hallItems2 = hallregs.map(hallreg => (
                    <Hallitem key={hallreg._id} hallreg={hallreg} seat1="150" />
                ));
            } else {
                hallItems2 = <h4>No profiles found...</h4>;
            }
        }
    }


  return (
    <React.Fragment>
      {/* <MDBRow>
        <div className="col-sm-3 " />
        <div className="col-sm-6 ">
          <MDBCol md="8">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black darken-2">
                <h4 className="h4-responsive text-white">Calender</h4>
              </MDBView>
              <MDBCardBody
                style={{ width: "100%", height: "350px" }}
                className="text-center">
                <Calender style= {style} width="320px" onDayClick={(e, day)=> this.onDayClick(e,day)}  />

              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="8">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black darken-2">
                <h4 className="h4-responsive text-white">Available Seats</h4>
                
              </MDBView>
              <MDBCardBody
                style={{ width: "100%", height: "400px" }}
                className="text-center"
              >
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item">

                    <div className="form-check mb-4">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current1"
                                    value={this.state.current1}
                                    checked={this.state.current1}
                                    onChange={this.onCheck}
                                    id="current1"
                                />
                                <label htmlFor="current1" className="form-check-label">
                                    Above 50
                                </label>
                            </div>
                      
                   
                    </li>
                    <li className="list-group-item">

                    <div className="form-check mb-4">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current2"
                                    value={this.state.current2}
                                    checked={this.state.current2}
                                    onChange={this.onCheck1}
                                    id="current2"
                                />
                                <label htmlFor="current2" className="form-check-label">
                                    Above 100
                                </label>
                            </div>
                    
                     
                    </li>
                    <li className="list-group-item">

                    <div className="form-check mb-4">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current3"
                                    value={this.state.current3}
                                    checked={this.state.current3}
                                    onChange={this.onCheck2}
                                    id="current3"
                                />
                                <label htmlFor="current3" className="form-check-label">
                                    Above 150
                                </label>
                            </div>
                      
                   

                    </li>
                    <li className="list-group-item">


                    </li>
                    <li className="list-group-item">
                       
                   

                    </li>
                   
                  </ul>
                  <br />
                </div>
              </MDBCardBody>
              
            </MDBCard>
            <div className="col-sm-6 style">
                            {hallItems0}
                            {hallItems1}
                            {hallItems2}

                     </div>

          </MDBCol>

        </div>
        
        </MDBRow> */}
 {/* <div className="col-sm-4" /> */}
 
        {/* <div className="col-sm-10 " > */}
<MDBRow>
  <div className="col-sm-4" /> 
          <MDBCol md="4">
            <MDBCard className="mt-4">
              <MDBView className="gradient-card-header black darken-2">
              <h4 className="h4-responsive text-white">Calender</h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '350px'}} className="text-center">
              <Calender style= {style} width="320px" onDayClick={(e, day)=> this.onDayClick(e,day)}  />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mt-4">
              <MDBView className="gradient-card-header black darken-2">
                <h4 className="h4-responsive text-white">
                  Hybrid map
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '350px'}} className="text-center">
              <div className="col-sm-30 style" align="left">
                            {hallItems0}
                            {hallItems1}
                            {hallItems2}

                     </div>
               
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>


        <MDBRow>
          <div className="col-sm-4" /> 
          <MDBCol md="4">
            <MDBCard className="mt-4">
              <MDBView className="gradient-card-header black darken-2">
              <h4 className="h4-responsive text-white">Available Seats</h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '400px'}} className="text-center">
              <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item">

                    <div className="form-check mb-4">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current1"
                                    value={this.state.current1}
                                    checked={this.state.current1}
                                    onChange={this.onCheck}
                                    id="current1"
                                />
                                <label htmlFor="current1" className="form-check-label">
                                    Above 50
                                </label>
                            </div>
                      
                   
                    </li>
                    <li className="list-group-item">

                    <div className="form-check mb-4">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current2"
                                    value={this.state.current2}
                                    checked={this.state.current2}
                                    onChange={this.onCheck1}
                                    id="current2"
                                />
                                <label htmlFor="current2" className="form-check-label">
                                    Above 100
                                </label>
                            </div>
                    
                     
                    </li>
                    <li className="list-group-item">

                    <div className="form-check mb-4">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current3"
                                    value={this.state.current3}
                                    checked={this.state.current3}
                                    onChange={this.onCheck2}
                                    id="current3"
                                />
                                <label htmlFor="current3" className="form-check-label">
                                    Above 150
                                </label>
                            </div>
                      
                   

                    </li>
                    <li className="list-group-item">


                    </li>
                    <li className="list-group-item">
                       
                   

                    </li>
                   
                  </ul>
                  <br />
                </div>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="5">
           
          </MDBCol>
        </MDBRow>
        
        </React.Fragment>
  );
};
}

Halls.propTypes = {
  getHallregs: PropTypes.func.isRequired,
  hallreg: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  hallreg: state.hallreg
});

export default connect(
  mapStateToProps,
  { getHallregs }
)(Halls);