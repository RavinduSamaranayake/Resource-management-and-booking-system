
import React, { Component } from 'react';
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createAcadamicbooking } from "../../actions/acadamicbookingActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Allbookingitem extends Component {
    constructor(props) {
        super(props);
        this.state = {


            hallname: "",
            bookdate: "",
            booktime: "",
            reason: "",
            isOpen: false,

            errors: {}
        };


        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);


    }

    onSubmit(e) {
        const { booking } = this.props;
        e.preventDefault();

        const bookingData = {


            hallname: booking.hallname,
            bookdate: booking.bookdate,
            booktime: booking.booktime,
            reason: booking.reason,
            recommend: "Recooamnd by Acadamic Branch"

        };
        this.props.createAcadamicbooking(bookingData);


    }


    onSubmit2(e) {
        const { booking } = this.props;
        e.preventDefault();

        const bookingData = {
            hallname: booking.hallname,
            bookdate: booking.bookdate,
            booktime: booking.booktime,
            reason: booking.reason,
            recommend: "Unrecooamnd by Acadamic Branch",

        };
        this.props.createAcadamicbooking(bookingData);

    }



    render() {
        const { booking } = this.props;



        return (
            <div className="card card-body bg-light mb-3" onSubmit={this.onSubmit} onSubmit1={this.onSubmit1}>
                <div className="row">

                    <div className="col-4">
                        <h4>{booking.hallname}</h4>
                        <h4>{booking.bookdate}</h4>
                        <h4>{booking.booktime}</h4>
                        <h4>{booking.reason}</h4>




                    </div>
                    {/* <div className="col-8">
                        <Link className="btn btn-success" to={"#"} align={"Right"} color={'red'}><strong>RECOMMANDED</strong></Link>
                        <Link className="btn btn-primary" to={"#"} align={"Right"} color={'red'}><strong>UNRECOMMANDED</strong></Link>
                    </div> */}

                    {/* <form onSubmit={this.onSubmit}>


                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-info btn-light mt-4"
                        />
                    </form>

                    <form onSubmit={this.onSubmit2}>

                        <input
                            type="submit"
                            value="Submit2"
                            className="btn btn-info btn-block mt-4"
                        />
                    </form> */}

                    <button type="button" class="btn btn-primary" onClick={this.onSubmit}
                    >
                        Recoomand
                    </button>

                    <button type="button" class="btn btn-success" onClick={this.onSubmit2}
                    >
                        Unrecommand
                    </button>




                </div>
            </div>
        );
    }
}
Allbookingitem.propTypes = {
    profile: PropTypes.object.isRequired,
    createAcadamicbooking: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { createAcadamicbooking }
)(withRouter(Allbookingitem));

