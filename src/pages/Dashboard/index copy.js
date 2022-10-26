import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
} from "reactstrap"

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div classNameName="page-content">
          <MetaTags>
            <title>Dashboard | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            <h4>Dashboard</h4>
            
            
            {/* details tiles */}
            <div className="row">
            <div classNameName="col-xl-12">
              <div classNameName="row">
                <div classNameName="col-md-4">
                  <div classNameName="mini-stats-wid card">
                    <div classNameName="card-body">
                      <div classNameName="d-flex">
                        <div classNameName="flex-grow-1">
                          <p classNameName="text-muted fw-medium">Orders</p>
                          <h4 classNameName="mb-0">1,235</h4>
                        </div>
                        <div classNameName="flex-grow-1">
                          <p classNameName="text-white fw-medium rounded-pill bg-success badge">New Orders</p>
                          <h4 classNameName="mb-0">999</h4>
                        </div>
                        <div classNameName="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                          <span classNameName="avatar-title">
                            <i classNameName="bx bx-copy-alt font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classNameName="col-md-4">
                  <div classNameName="mini-stats-wid card">
                    <div classNameName="card-body">
                      <div classNameName="d-flex">
                        <div classNameName="flex-grow-1">
                          <p classNameName="text-muted fw-medium">Shops</p>
                          <h4 classNameName="mb-0">1,235</h4>
                        </div>
                        <div classNameName="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                          <span classNameName="avatar-title">
                            <i classNameName="bx bx-copy-alt font-size-24"></i>
                          </span>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classNameName="col-md-4">
                    <div classNameName="mini-stats-wid card">
                      <div classNameName="card-body">
                        <div classNameName="d-flex">
                          <div classNameName="flex-grow-1">
                            <p classNameName="text-muted fw-medium">Products</p>
                            <h4 classNameName="mb-0">1,235</h4>
                          </div>
                          <div classNameName="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                            <span classNameName="avatar-title">
                              <i classNameName="bx bx-copy-alt font-size-24"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classNameName="col-md-4">
                    <div classNameName="mini-stats-wid card">
                      <div classNameName="card-body">
                        <div classNameName="d-flex">
                          <div classNameName="flex-grow-1">
                            <p classNameName="text-muted fw-medium">Returns</p>
                            <h4 classNameName="mb-0">1,235</h4>
                          </div>
                          <div classNameName="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                            <span classNameName="avatar-title">
                              <i classNameName="bx bx-copy-alt font-size-24"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classNameName="col-md-4">
                    <div classNameName="mini-stats-wid card">
                      <div classNameName="card-body">
                        <div classNameName="d-flex">
                          <div classNameName="flex-grow-1">
                            <p classNameName="text-muted fw-medium">Revenue</p>
                            <h4 classNameName="mb-0">$35, 723</h4>
                          </div>
                          <div classNameName="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                            <span classNameName="avatar-title">
                              <i classNameName="bx bx-archive-in font-size-24"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classNameName="col-md-4">
                    <div classNameName="mini-stats-wid card">
                      <div classNameName="card-body">
                        <div classNameName="d-flex">
                          <div classNameName="flex-grow-1">
                            <p classNameName="text-muted fw-medium">Outlets</p>
                            <h4 classNameName="mb-0">$16.2</h4>
                          </div>
                          <div classNameName="flex-grow-1">
                            <p classNameName="text-white fw-medium rounded-pill bg-warning badge">Pending Outlets</p>
                            <h4 classNameName="mb-0">999</h4>
                          </div>
                          <div classNameName="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                            <span classNameName="avatar-title">
                              <i classNameName="bx bx-purchase-tag-alt font-size-24"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;
