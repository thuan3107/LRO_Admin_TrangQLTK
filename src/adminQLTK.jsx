import React, { Component } from 'react';
import './style.css';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default class Admin extends Component {
  render() {
    return (
    <div>  
      <div class="d-flex" id="wrapper">

        <div class="bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">LRO TEAM</div>
            <div class="list-group list-group-flush my-3">
                <a href="12" class="list-group-item list-group-item-action bg-transparent second-text active">
                <i
                  class="fas fa-tachometer-alt me-2"></i> Bảng điều khiển
                </a>
            
                <a href="10" class="list-group-item list-group-item-action bg-transparent fw-bold" alt="10">< FolderCopyIcon/> Quản lý tài liệu
                </a>

                <a href="9" class="list-group-item list-group-item-action bg-transparent fw-bold" ><ImportContactsIcon/> Quản lý bài viết 
                </a>

                <a href="8" class="list-group-item list-group-item-action bg-transparent  fw-bold">
                <i class="fa-regular fa-user"></i>  Quản lý tài khoản</a>

                <a href="13" class="list-group-item list-group-item-action bg-transparent fw-bold">
                <SettingsIcon/>  Cài đặt
                        
                </a>
            
                <a href="5" class="list-group-item list-group-item-action bg-transparent fw-bold">
                <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất</a>
            </div>
        </div>

        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div class="d-flex align-items-center">
                    
                <div class="container">
            
                    <div class="row">

                      <div class="col-md-8">
                          
          
                          <div class="input-group mb-3">
                              <input type="text" class="form-control input-text" placeholder="Search...." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                              <i class="fa fa-search"></i>         
                          </div>
                          
                      </div>  
                      
                      <div className='dashboard-fiter'>
                        <div style={{ cursor:'pointer'}} >Dashboard/<a href="/">Quản lý tài khoản</a></div>
                        
                        <a className='filterIcon' href="/"><FilterAltOutlinedIcon/></a>
                          <ul className='dropdown-menu-filterIcon' >
                            <li><a class="dropdown-item2" href="3">Tài khoản online</a></li>
                            <li><a class="dropdown-item2" href="2">Tài khoản admin</a></li>
                            <li><a class="dropdown-item2" href="1">Tài khoản thành viên</a></li>
                          </ul>
                      </div>      
                        
                    </div>
            
            
                </div>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle second-text fw-bold" href="4" 
                            id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user me-2"></i>Admin
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="3">Profile</a></li>
                                <li><a class="dropdown-item" href="2">Settings</a></li>
                                <li><a class="dropdown-item" href="1">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>


            <table class="table">
              <thead align="center">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Tên đăng nhập</th>
                  <th scope="col">Ngày đăng ký</th>
                  <th scope="col">Email</th>
                  <th scope="col">Chức vụ</th>
                  <th scope="col">Tác vụ</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td style={{color:"red"}}><i class="fa-solid fa-circle"></i></td>
                  <td>vanthinh</td>
                  <td>17/2/2023</td>
                  <td className='email'>thinhb1906773@student.ctu.edu.vn</td> 
                  <td>Quản trị viên</td>    
                  <td className='DeleteIcon'> <DeleteIcon/> </td> 
                </tr>

                <tr>
                <td scope="row">2</td>
                  <td style={{color:"green"}}><i class="fa-solid fa-circle"></i></td>
                  <td>ngocvi</td>
                  <td>17/2/2023</td>
                  <td className='email'>vib1906610@student.ctu.edu.vn</td>
                  <td>Thành viên</td>
                  <td className='DeleteIcon'> <DeleteIcon/> </td> 
                </tr>

                <tr>
                <td scope="row">3</td>
                <td style={{color:"green"}}><i class="fa-solid fa-circle"></i></td>
                  <td>huuthuan</td>
                  <td>17/2/2023</td>
                  <td className='email'>thuanb1906581@student.ctu.edu.vn</td>
                  <td>Thành viên</td>
                  <td className='DeleteIcon'> <DeleteIcon/> </td> 
                </tr>

                <tr>
                <td scope="row">4</td>
                <td style={{color:"red"}}><i class="fa-solid fa-circle"></i></td>
                  <td>nguoidung1</td>
                  <td>26/2/2023</td>
                  <td className='email'>nguoidung1@gmail.com</td>
                  <td>Thành viên</td>
                  <td className='DeleteIcon'> <DeleteIcon/> </td> 
                </tr>

                <tr>
                <td scope="row">5</td>
                <td style={{color:"green"}}><i class="fa-solid fa-circle"></i></td>
                  <td>admin</td>
                  <td>1/3/2023</td>
                  <td className='email'>admin@gmail.com</td>
                  <td>Admin</td>
                  <td className='DeleteIcon'> <DeleteIcon/> </td>  
                </tr>  

                <tr>
                <td scope="row">6</td>
                <td style={{color:"green"}}><i class="fa-solid fa-circle"></i></td>
                  <td>nguoidung2</td>
                  <td>15/3/2023</td>
                  <td className='email'>nguoidung2@gmail.com</td>
                  <td>Thành viên</td>
                  <td className='DeleteIcon'> <DeleteIcon/> </td>  
                </tr>

              </tbody>
            </table>
  
            <div className='nextpage'>
            <p>Trở về < ArrowBackIosNewOutlinedIcon/>  <ArrowForwardIosOutlinedIcon/> Tiếp </p> 

            </div>

        </div>

      </div>
    </div>
    )
  }
}
