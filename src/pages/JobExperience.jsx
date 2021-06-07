import React,{useState,useEffect} from "react"
import JobExperienceService from "../Services/jobExperienceService"

  const [jobExperiences, setJobExperience] = useState([])


  useEffect(()=>{
     let jobExperienceService=new JobExperienceService()
     jobExperienceService.getByGrudutionYear.then(result=>setJobExperience(result.data.data))     
  })
  
    return (
      <div>



        <Table celled>
          <Table.Header>
            <Table.Row>
          
              <Table.HeaderCell>Job Name</Table.HeaderCell>
              <Table.HeaderCell>Department</Table.HeaderCell>
              <Table.HeaderCell>Start Year</Table.HeaderCell>
              <Table.HeaderCell>Finish Year</Table.HeaderCell>
              <Table.HeaderCell>Addition Date</Table.HeaderCell>
             
            
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
        
        
                {employers.map((jobAdvertisements)=>
                (
                  <Table.Row key={jobAdvertisements.id}>
                  <Table.Cell>{jobAdvertisements.jobName }</Table.Cell>
                  <Table.Cell>{jobAdvertisements.department }</Table.Cell>
                  <Table.Cell>{jobAdvertisements.startYear }</Table.Cell>
                  <Table.Cell>{jobAdvertisements.finishYear }</Table.Cell>
                  <Table.Cell>{jobAdvertisements.additionDate }</Table.Cell>
               
                 
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