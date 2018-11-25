import React, { Component } from "react";
import EditUser from "./EditUser";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
      userObj: {}
    };
  }

  hienThiNut = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div
          className="btn btn-block btn-outline-secondary"
          onClick={() => this.props.ketNoi()}
        >
          Đóng lại
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-block btn-outline-info"
          onClick={this.props.ketNoi}
        >
          Thêm mới
        </div>
      );
    }
  };

  isChange = event => {
    this.setState({ tempValue: event.target.value });
    this.props.checkConnectProps(this.state.tempValue);
  };
  isShowEditForm = () => {
    if (this.props.editUserStatus === true) {
      return (
        <EditUser
          getUserEditInfo={info => this.getUserEditInfo(info)}
          userEditObject={this.props.userEditObject}
          changeEditUserStatus={() => this.props.changeEditUserStatus()}
        />
      );
    }
  };
  getUserEditInfo = info => {
    this.setState({
      userObj: info
    });
  };
  getUserEditInfo = info => {
    this.setState({
      userObj: info
    });
    this.props.getUserEditInfoApp(info);
  };
  render() {
    return (
      <div className="col-12">
        {this.isShowEditForm()}
        <div className="form-group">
          <div className="btn-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa"
              onChange={event => this.isChange(event)}
            />
            <button
              className="btn-info"
              onClick={dl => this.props.checkConnectProps(this.state.tempValue)}
            >
              Tìm
            </button>
          </div>
        </div>
        <div className="btn-group1">{this.hienThiNut()}</div>
        <hr />
      </div>
    );
  }
}
