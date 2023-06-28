import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const MemberTable = () => {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMembers(currentPage);
  }, [currentPage]);

  const fetchMembers = async (page) => {
    try {
      // 임의의 회원 데이터
      const dummyMembers = [
        { code: 1, name: '김승우', id: 'badboy' ,report:2,regdate:20230601,},
        { code: 2, name: '최은지', id: 'longstone',report:4,regdate:20230601},
        { code: 3, name: '김은지', id: 'kojima',report:6,regdate:20230601 },
        { code: 4, name: '이가은', id: 'localhost',report:2,regdate:20230601 },
        { code: 5, name: '김신희', id: 'react' ,report:0,regdate:20230601},
        { code: 6, name: '조유진', id: 'hello' ,report:1,regdate:20230601}
      ];

      setMembers(dummyMembers);
      setTotalPages(1);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>ID</th>
            <th>REPORT</th>
            <th>Regdate</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.code} className="userBoard">
              <td>{member.code}</td>
              <td>{member.name}</td>
              <td>{member.id}</td>
              <td>{member.report}</td>
              <td>{member.regdate}</td>
              <td><Button variant="danger">교수형</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default MemberTable;