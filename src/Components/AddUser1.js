import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiChinhSua: false
    };
  }

  hienThiNut = () => {
    if (this.state.trangThaiChinhSua === true) {
      return (
        <div
          className="btn btn-block btn-outline-secondary"
          onClick={this.thayDoiTrangThai}
        >
          Đóng lại
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-block btn-outline-info"
          onClick={this.thayDoiTrangThai}
        >
          Thêm mới
        </div>
      );
    }
  };

  thayDoiTrangThai = () => {
    this.setState({
      trangThaiChinhSua: !this.state.trangThaiChinhSua
    });
  };

  hienThiForm = () => {
    if (this.state.trangThaiChinhSua === true) {
      return (
        <div className="card border-primary mb-3 mt-2">
          <div className="card-header">Thêm mới user vào hệ thống</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tên user"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Điện thoại"
              />
            </div>
            <div className="form-group">
              <select className="custom-select" required>
                <option>Chọn quyền mặc định</option>
                <option value={1}>Admin</option>
                <option value={2}>Modrator</option>
                <option value={3}>Normal</option>
              </select>
            </div>
            <button className="btn-block btn-primary">Thêm mới</button>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="col-3">
        <div>
          {this.hienThiNut()}
          {this.hienThiForm()}
        </div>
      </div>
    );
  }
}
