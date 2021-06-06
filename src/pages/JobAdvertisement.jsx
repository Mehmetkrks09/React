import React from 'react'
import React,{useState,useEffect} from "react"
import JobAdvertisementService from '../Services/jobAdvertisementService'


export default function JobAdvertisement() {
    const [jobAdvertisements, setJobAdvertisement] = useState([])


    useEffect(()=>{
       let jobAdvertisementService=new JobAdvertisementService()
       jobAdvertisementService.getAllJobAdvertisement.then(result=>setJobAdvertisement(result.data.data))     
    })
    
      return (
        <div>
 
       
          <Table celled>
            <Table.Header>
              <Table.Row>
              <Table.HeaderCell>companyName </Table.HeaderCell>
              <Table.HeaderCell>webAddress</Table.HeaderCell>
                <Table.HeaderCell>Min Salary</Table.HeaderCell>
                <Table.HeaderCell>Max Salary</Table.HeaderCell>
                
                <Table.HeaderCell>description</Table.HeaderCell>
                <Table.HeaderCell>numberOfOpenPositions</Table.HeaderCell>
                <Table.HeaderCell>deadline</Table.HeaderCell>
                <Table.HeaderCell>createdDate</Table.HeaderCell>
               
              
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
          
          
                  {employers.map((jobAdvertisements)=>
                  (
                    <Table.Row key={jobAdvertisements.id}>
                    <Table.Cell>{jobAdvertisements.companyName }</Table.Cell>
                    <Table.Cell>{jobAdvertisements.webAddress}</Table.Cell>
                  
                    <Table.Cell>{jobAdvertisements.minSalary}</Table.Cell>
                    <Table.Cell>{jobAdvertisements.maxSalary}</Table.Cell>
                    <Table.Cell>{jobAdvertisements.description}</Table.Cell>
                    <Table.Cell>{jobAdvertisements.deadline}</Table.Cell>
                    <Table.Cell>{jobAdvertisements.createdDate}</Table.Cell>
               
                 
                   
                  </Table.Row>
    
    
                  ))
              }
            
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
