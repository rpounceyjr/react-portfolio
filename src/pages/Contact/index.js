import React from "react"

function Contact(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="button text-center">
                    <button type="submit" className="btn btn-secondary" href="mailto:rpounceyjr@gmail.com">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact