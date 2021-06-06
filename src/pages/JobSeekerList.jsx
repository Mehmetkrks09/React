import React from "react";
import React, { useState, useEffect } from "react";
import JobSeekerService from "../Services/jobSeekerService";

export default function JobSeeker() {
  const [employers, setJobSeeker] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();

    jobSeekerService
      .getJobSeeker()
      .then((result) => setJobSeeker(result.data.data));
  });
  

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>password</Table.HeaderCell>

            <Table.HeaderCell>CreatedOn</Table.HeaderCell>
            <Table.HeaderCell>firstName</Table.HeaderCell>
            <Table.HeaderCell>lastName</Table.HeaderCell>
            <Table.HeaderCell>birthYear</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((JobSeeker) => (
            <Table.Row key={JobSeeker.id}>
              <Table.Cell>{JobSeeker.email}</Table.Cell>
              <Table.Cell>{JobSeeker.password}</Table.Cell>

              <Table.Cell>{JobSeeker.createdOn}</Table.Cell>
              <Table.Cell>{JobSeeker.companyName}</Table.Cell>
              <Table.Cell>{JobSeeker.phoneNumber}</Table.Cell>
              <Table.Cell>{JobSeeker.webAddress}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
